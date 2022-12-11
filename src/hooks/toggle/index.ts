import { useCallback, useState } from 'react';

const useToggle = (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState(initialState);

  const handleToggle = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  return [state, handleToggle];
};

export default useToggle;
