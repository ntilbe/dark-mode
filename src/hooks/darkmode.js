import { useLocalStorage } from "./useLocalStorage";

export function useDarkmode(initialState) {
  const [mode, setMode] = useLocalStorage("darkmode", initialState);

  return [mode, setMode];
}