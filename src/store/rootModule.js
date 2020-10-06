import reducerMap from './reducers';
import rootSaga from './sagas';

export default {
  id: 'root',
  reducerMap,
  sagas: [rootSaga],
}  