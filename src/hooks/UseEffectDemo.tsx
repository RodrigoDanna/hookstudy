import { useState, useEffect } from 'react';

/**
 * useEffect() is a hook that allows you to perform side effects in functional components.
 * @returns {JSX.Element} The component.
 */
export default function UseEffectDemo(): JSX.Element {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}