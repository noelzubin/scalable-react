import { all, put, call, takeLatest } from "redux-saga/effects";
import { FETCH_USERS, SET_USERS } from "./actions";

export default function* usersSaga() { 
  yield all([
    takeLatest(FETCH_USERS, fetchUsers),
  ])
}

function* setUsers(data) {
  yield put({ type: SET_USERS, data });
}

function* fetchUsers() {
  try {
    yield call(setUsers, { loading: true });
    let users = yield fetch('https://jsonplaceholder.typicode.com/users');
    if (!users.ok) throw 'failed to fetch';
    users = yield users.json();
    yield call(setUsers, { users, loading: false });
  } catch(e) {
    yield call(setUsers, { error: true, loading: false, users: null });
  }
}