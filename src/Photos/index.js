import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { photosSelector } from './reducers' 
import { fetchPhotos } from './actions';
import withDynamicLoader from '../withDynamicModule';
import photosModule from './photosModule';
import './index.css';

const Photos = () => {
  const { photos, loading, error } = useSelector(photosSelector);
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(fetchPhotos())
  }, [])

  return (
    <div>
      <hr/>
      {loading && 'loading...'}
      {error && 'failed to fetch photos'}
      {photos && (
        <ul className="photos">
          {photos.slice(0, 20).map(i => (
            <img key={i.url} alt={i.title} src={i.url} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default withDynamicLoader(Photos, photosModule);