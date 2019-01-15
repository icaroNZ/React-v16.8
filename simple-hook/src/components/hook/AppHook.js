import React, { useState } from 'react';
import ResourceListHook from './ResourceListHook';

const AppHook = () => {
  const [resource, setResource] = useState('posts');
  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceListHook resource={resource} />
    </div>
  );
};

export default AppHook;
