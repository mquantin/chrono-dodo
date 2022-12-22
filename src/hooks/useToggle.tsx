// https://usehooks.com/useToggle/
import { useCallback, useState } from 'react';

type UseToggleType = [boolean, () => void];
export const useToggle = (initialState = false): UseToggleType => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = useCallback((): void => setState((state) => !state), []);
  return [state, toggle];
};
