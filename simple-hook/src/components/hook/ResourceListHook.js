import React from 'react';
import useResources from './useResources';

const ResourceListClass = ({ resource }) => {
  const resources = useResources(resource);

  return (
    <div>
      <h2>{resource}</h2>
      <ul>
        {resources.slice(0, 5).map((record) => (
          <li key={record.id}>{record.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceListClass;
