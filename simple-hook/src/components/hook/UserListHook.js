import React from 'react';
import useResources from './useResources';

const UserListHook = () => {
  const users = useResources('users');
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.slice(0, 5).map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserListHook;
