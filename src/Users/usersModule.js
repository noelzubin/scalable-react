import reducerMap from './reducers';
import usersSaga from './sagas';

export default {
  id: 'users',
  reducerMap,
  sagas: [usersSaga],
}  