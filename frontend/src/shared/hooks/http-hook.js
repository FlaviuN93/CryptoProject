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

        console.log('333333', data);
        if (!response.ok) {
          setError(data);
          setIsLoading(false);
          throw new Error(data);
        } else {
          setError();
          setIsLoading(false);
          return data;
        }
      } catch (err) {
        setIsLoading(false);
      }
    },
    []
  );

  return { isLoading, error, sendRequest };
};
