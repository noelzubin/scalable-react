import reducerMap from './reducers';
import photosSaga from './sagas';

export default {
  id: 'photos',
  reducerMap,
  sagas: [photosSaga],
}  