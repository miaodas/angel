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
    videos: [],
  }))
  .actions(self => ({
    async getCat() {
      const params = {};
      try {
        const respon = await resources.get('categories', { params });
        return this.getCatSuccess(respon.data.response.categories);
      } catch (error) {
        return this.getFailed(error);
      }
    },
    getCatSuccess(response: any) {
      if (response) {
        self.categories = response;
      }
      return Promise.resolve(response);
    },
    getFailed(err: any) {
      return Promise.reject(err);
    },
    async getVideos(params: any) {
      try {
        const respon = await resources.get('videos/0', { params });
        return this.getVidesSuccess(respon.data.response.videos);
      } catch (error) {
        return this.getFailed(error);
      }
    },
    getVidesSuccess(response: any) {
      if (response) {
        self.videos = response;
      }
      return Promise.resolve(response);
    },
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
