import { useContext } from 'react';
import { ThemeContext } from '../App';

/**
 * useContext() is a hook that allows you to use context in functional components.
 * @returns {JSX.Element} The component.
 */
export default function UseContextDemo(): JSX.Element {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <p>The theme is {theme}.</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}