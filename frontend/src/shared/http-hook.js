import { useState, useCallback } from 'react';

export const useHttpClient = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      try {
        setIsLoading(true);
        const response = await fetch(url, { method, headers, body });
        const data = await response.json();
        if (!response.ok) {
          setError(data);
          throw new Error(data);
        }
        setIsLoading(false);
        return data;
      } catch (err) {
        setIsLoading(false);
      }
    },
    []
  );

  return { isLoading, error, sendRequest };
};
