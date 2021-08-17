import { useCallback, useState } from 'react';

type useToggleProps = [boolean, () => void];

const useToggle = (initialState: boolean): useToggleProps => {
  const [state, setState] = useState(initialState);

  const handleToggle = useCallback(() => {
    setState((state) => !state);
  }, []);

  return [state, handleToggle];
};

export default useToggle;
