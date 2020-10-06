import React, { useEffect, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { appSelector } from './store/reducers' 
import { fetchPost } from './store/actions';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';

const Users = lazy(() => import('./Users'));
const Photos = lazy(() => import('./Photos'));

function App() {
  const { post, error } = useSelector(appSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost())
  }, [dispatch, fetchPost]) 

  return (
    <div className="App">
      <div>
        <Link to="/home" > Home </Link>
        <Link to="/users" > Users Module </Link>
        <Link to="/photos" > Photos Module </Link>
      </div>

      { post && (
        <>
          <b> fetched post from root saga: </b>
          {post.title}
        </>
      )}
      { error && (
        <div> Failed to fetch post </div>
      )}

      <Suspense fallback="loading module....">
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
