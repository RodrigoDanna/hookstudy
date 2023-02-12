import './App.scss';
import Card from './common/card/Card';
import UseContextDemo from './hooks/UseContextDemo';
import UseEffectDemo from './hooks/UseEffectDemo';
import UseStateDemo from './hooks/UseStateDemo';

import { createContext, useContext, useState } from 'react';
import UseReducerDemo from './hooks/UseReducerDemo';
import UseCallbackDemo from './hooks/UseCallbackDemo';
import UseMemoDemo from './hooks/UseMemoDemo';
import UseRefDemo from './hooks/UseRefDemo';
import UseImperativeHandleDemo from './hooks/UseImperativeHandleDemo';
import UseLayoutEffectDemo from './hooks/UseLayoutEffectDemo';
import FetchDemo from './fetch/FetchDemo';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {}
});

function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App">
        <Card title="useState">
          <UseStateDemo />
        </Card>

        <Card title="useEffect">
          <UseEffectDemo />
        </Card>

        <Card title="useContext">
          <UseContextDemo />
        </Card>

        <Card title="useReducer">
          <UseReducerDemo />
        </Card>

        <Card title="useCallback">
          <UseCallbackDemo />
        </Card>

        <Card title="useMemo">
          <UseMemoDemo n={8} />
        </Card>

        <Card title="useRef">
          <UseRefDemo initialValue={'initial value'} />
        </Card>

        <Card title="useImperativeHandle">
          <UseImperativeHandleDemo />
        </Card>

        <Card title="useLayoutEffect">
          <UseLayoutEffectDemo />
        </Card>

        <Card title="fetch">
          <FetchDemo />
        </Card>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
