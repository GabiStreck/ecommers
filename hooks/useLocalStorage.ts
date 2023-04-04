import { useEffect,useState } from 'react';

export type StoredValue<T> = T | null;

function useLocalStorage<T>(
  key: string,
  initialValue?: T
): [StoredValue<T>, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<StoredValue<T>>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue ?? null;
    } catch (error) {
      console.error(`Error getting "${key}" from localStorage: ${error}`);
      return initialValue ?? null;
    }
  });

  useEffect(() => {
    try {
      if (storedValue === null) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {
      console.error(`Error setting "${key}" in localStorage: ${error}`);
    }
  }, [key, storedValue]);

  const setValue = (value: T): void => {
    setStoredValue(value);
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
