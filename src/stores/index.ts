import { configure } from 'mobx';
import { flow, Instance, types } from 'mobx-state-tree';
import { enableLogging } from 'mobx-logger';
export { default as injectStores } from './injectStore';
import { IVideoStore, Video as video } from './Video';
export { IVideoStore };

configure({
  enforceActions: 'always',
});

enableLogging({
  predicate: () => __DEV__ && Boolean(global.navigator.userAgent),
  action: true,
  reaction: true,
  transaction: true,
  compute: true,
});

const STORE_VERSION = 'angle_00001';

export const Store = types
  .model('RootStore', {
    video,
    isHydrated: false,
  })
  .actions(self => ({
    hydrate: flow(function* hydrate() {
      yield self.video.hydrate(STORE_VERSION);
      self.isHydrated = true;
      return self;
    }),
  }))
  .create({
    video: {},
  });

export type IStore = Instance<typeof Store>;

export function createStore() {
  return Store.hydrate() as Promise<IStore>;
}

// (async () => {
//   try {
//     createStore();
//   } finally {
//     console.log('splash hide');
//   }
// })();
