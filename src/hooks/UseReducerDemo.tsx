import { useReducer } from 'react';

interface State {
  count: number;
}
  
interface Action {
  type: 'increment' | 'decrement';
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

/**
 * useReducer is a hook that is used for state management of complex logic
 * @returns {JSX.Element} The component.
 */
export default function UseReducerDemo (): JSX.Element {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}
