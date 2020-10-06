import { createStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';

import rootModule from './rootModule';

const configureStore = preloadedState => {
  return createStore(
    {
      initialState: {},
      extensions: [getSagaExtension({})],
      enhancers: [],
    },
    rootModule
  );
};

export default configureStore;
