import { SET_USERS } from './actions';

const initialState = {
  users: null,
  loading: false,
  error: false
};

const usersReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case SET_USERS:
      return { ...state, ...data };
    default:
      return state;
  }
}

export const usersSelector = state => state.users;

export default {
  users: usersReducer
}