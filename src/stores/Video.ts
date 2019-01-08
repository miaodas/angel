import {
  applySnapshot,
  flow,
  Instance,
  onSnapshot,
  types,
} from 'mobx-state-tree';
import { AsyncStorage } from 'react-native';
import resources from '../services/videoService';

const MODEL_NAME = 'Video';
export const Video = types
  .model(MODEL_NAME, {
    // user: types.optional(UserModel, { id: 0 }),
  })
  .volatile(() => ({
    categories: [],
    videos: [] as any,
    videoWithPage: {
      fetching: false,
      current_offset: 0,
      has_more: true,
      limit: 50,
      total_video: 0,
      page: 0,
    },
  }))
  .actions(self => ({
    getVideosSuccess(response: any) {
      if (response) {
        self.videoWithPage.page === 1
          ? (self.videos = response.videos)
          : (self.videos = [...self.videos, ...response.videos]);
      }
      console.log(self.videos);
      self.videoWithPage.fetching = false;
      return Promise.resolve(response);
    },
    getFailed(err: any) {
      self.videoWithPage.fetching = false;
      return Promise.reject(err);
    },
  }))
  .actions(self => ({
    async getCat() {
      const params = {};
      try {
        const respon = await resources.get('categories', { params });
        return this.getCatSuccess(respon.data.response.categories);
      } catch (error) {
        return self.getFailed(error);
      }
    },
    getCatSuccess(response: any) {
      if (response) {
        self.categories = response;
      }
      return Promise.resolve(response);
    },
    getVideos: flow(function*(params: any) {
      try {
        if (params.page === 0) {
          self.videoWithPage = {
            ...self.videoWithPage,
            page: params.page,
          };
        }
        if (self.videoWithPage.fetching) {
          return;
        }
        self.videoWithPage.fetching = true;
        const respon = yield resources.get(
          `videos/${params.page === 0 ? 0 : self.videoWithPage.page}`,
          { params },
        );
        self.videoWithPage = {
          ...self.videoWithPage,
          has_more: respon.data.response.has_more,
          page: self.videoWithPage.page + 1,
        };
        console.log(respon);
        return self.getVideosSuccess(respon.data.response);
      } catch (error) {
        return self.getFailed(error);
      }
    }),
    hydrate: flow(function*(version: string) {
      const data = yield AsyncStorage.getItem(`${MODEL_NAME}_${version}`);
      if (data) {
        applySnapshot(self, JSON.parse(data));
      }
      onSnapshot(self, (snapshot: object) => {
        AsyncStorage.setItem(
          `${MODEL_NAME}_${version}`,
          JSON.stringify(snapshot),
        );
      });
    }),
  }));

export type IVideoStore = Instance<typeof Video>;
