import React, { useState } from 'react';
import ResourceListHook from './ResourceListHook';
import UserListHook from './UserListHook';

const AppHook = () => {
  const [resource, setResource] = useState('posts');
  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <UserListHook />
      <ResourceListHook resource={resource} />
    </div>
  );
};

export default AppHook;
