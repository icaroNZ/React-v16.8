import { useEffect, useState } from 'react';
import axios from 'axios';
const useResources = (resource) => {
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

  return resources;
};

export default useResources;
