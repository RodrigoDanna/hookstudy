import { useState } from "react";

/**
 * useState() is a hook that allows you to add state to functional components.
 * @return {JSX.Element} The component.
 */
export default function UseStateDemo(): JSX.Element {
	const [count, setCount] = useState(0);
	
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
			<button onClick={() => setCount(0)}>Reset</button>
		</div>
	);
}