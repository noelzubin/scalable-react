import { SET_POST, SET_ERROR } from './actions';

const initialState = {
  post: null,
  error: false,
};

const appReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case SET_POST:
      return { ...state, post: data };
    case SET_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
}

export const appSelector = state => state.app;

export default {
  app: appReducer
}