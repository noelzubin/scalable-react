import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersSelector } from './reducers' 
import { fetchUsers } from './actions';
import withDynamicLoader from '../withDynamicModule';
import usersModule from './usersModule';

const Users = () => {
  const { users, loading, error } = useSelector(usersSelector);
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <hr/>
      {loading && 'loading...'}
      {error && 'failed to fetch users'}
      {users && (
        <ul>
          {users.map(u => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default withDynamicLoader(Users, usersModule);