import { useRef } from 'react';

interface TextInputProps {
  initialValue: string;
}

/**
 * useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
 * @param param0 The initial value of the ref.
 * @returns {JSX.Element} The component.
 */
const UseRefDemo = ({ initialValue }: TextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <input ref={inputRef} type="text" defaultValue={initialValue} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
};

export default UseRefDemo;