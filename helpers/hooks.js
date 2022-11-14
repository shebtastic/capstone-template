// taken from: https://github.com/pixelass/local-storage-next/blob/main/hooks/useLocalStorage.js

import { useCallback, useEffect, useState } from "react";

/**
 * A hook to use localStorage with SSR.
 *
 * Make sure that localStorage and state do not conflict with each other.
 * Only update the state if no initialState was read from localStorage.
 *
 * @param {string} key
 * @param {unknown} initialState
 * @returns {[unknown, function(value: unknown): void | function(fn: function(previousValue: unknown): void): void]}
 */
export function useLocalStorage(key, initialState) {
  // Set the desired initialState
  const [state, setState] = useState(initialState);

  // Provide a custom setter function that updates the state and writes to localStorage
  const setStateAndLocalStorage = useCallback(
    (callbackOrValue) => {
      setState((previousValue) => {
        // The value might be a callback with the previousValue
        const nextValue =
          typeof callbackOrValue === "function"
            ? callbackOrValue(previousValue)
            : callbackOrValue;
        // Set the localStorage here (inside the original setter)
        window.localStorage.setItem(key, JSON.stringify(nextValue));
        return nextValue;
      });
    },
    [key]
  );

  // Read the localStorage from the client
  useEffect(() => {
    const stored = window.localStorage.getItem(key);
    // When the stored value === null
    // Then the key does not exist, and we don't want to perform an update
    if (stored !== null) {
      setState(JSON.parse(stored));
    }
  }, [key]);

  return [state, setStateAndLocalStorage];
}
