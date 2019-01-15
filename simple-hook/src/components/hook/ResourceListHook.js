import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceListClass = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(
    () => {
      requestResources(resource);
    },
    [resource]
  );

  const requestResources = async (resource) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };

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
