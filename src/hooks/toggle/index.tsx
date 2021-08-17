import { useCallback, useState } from 'react';

const useToggle = (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState(initialState);

  const handleToggle = useCallback(() => {
    setState((state) => !state);
  }, []);

  return [state, handleToggle];
};

export default useToggle;
