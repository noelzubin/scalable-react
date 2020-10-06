import { all, put, call, takeLatest } from "redux-saga/effects";
import { FETCH_PHOTOS, SET_PHOTOS } from "./actions";

export default function* photosSaga() { 
  yield all([
    takeLatest(FETCH_PHOTOS, fetchPhotos),
  ])
}

function* setPhotos(data) {
  yield put({ type: SET_PHOTOS, data });
}

function* fetchPhotos() {
  try {
    yield call(setPhotos, { loading: true });
    let data = yield fetch('https://jsonplaceholder.typicode.com/photos');
    if (!data.ok) throw 'failed to fetch';
    data = yield data.json();
    yield call(setPhotos, { photos: data, loading: false });
  } catch(e) {
    yield call(setPhotos, { error: true, loading: false, photos: null });
  }
}