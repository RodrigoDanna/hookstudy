import React, { useState, useCallback } from 'react';

/**
 * useCallback() is a hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed.
 * @returns {JSX.Element} The component.
 */
export default function useCallbackDemo(): JSX.Element {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}