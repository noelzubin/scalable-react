import { SET_PHOTOS } from './actions';

const initialState = {
  photos: null,
  loading: false,
  error: false
};

const photosReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case SET_PHOTOS:
      return { ...state, ...data };
    default:
      return state;
  }
}

export const photosSelector = state => state.photos;

export default {
  photos: photosReducer
}