import { useImperativeHandle, forwardRef, Ref, useState, useRef } from 'react';

interface ToggleHandle {
  toggle: () => void;
  getState: () => boolean;
}

const Toggle = forwardRef<ToggleHandle, {}>((props, ref) => {
  const [isOn, setIsOn] = useState(false);

  useImperativeHandle(ref, () => ({
    toggle: () => setIsOn(prevState => !prevState),
    getState: () => isOn,
  }));

  return <div>{isOn ? 'ON' : 'OFF'}</div>;
});

const UseImperativeHandleDemo = () => {
  const toggleRef = useRef<ToggleHandle>(null);

  const handleToggle = () => {
    if (toggleRef.current) {
      toggleRef.current.toggle();
    }
  };

  const handleGetState = () => {
    if (toggleRef.current) {
      alert(toggleRef.current.getState());
    }
  };

  return (
    <>
      <Toggle ref={toggleRef} />
      <button onClick={handleToggle}>Toggle</button>
      <button onClick={handleGetState}>Get State</button>
    </>
  );
};

export default UseImperativeHandleDemo;