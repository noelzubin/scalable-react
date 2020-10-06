import { takeEvery, all, put } from 'redux-saga/effects';
import { FETCH_POST, SET_ERROR, SET_POST } from './actions';

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_POST, fetchPost),
  ]);
}

function* fetchPost() {
  try {
    let data = yield fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!data.ok) throw 'failed to fetch data';
    data = yield data.json();
    yield put({ type: SET_POST, data })
  } catch (e) {
    yield put({ type: SET_ERROR });
  }
}