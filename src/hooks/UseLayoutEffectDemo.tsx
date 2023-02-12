import { useLayoutEffect, useState } from 'react';

/**
 * useLayoutEffect is similar to useEffect, but it fires synchronously after all DOM mutations.
 * @returns {JSX.Element} The component.
 */
const UseLayoutEffectDemo = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <div>
      {`Window dimensions: ${dimensions.width}x${dimensions.height}`}
    </div>
  );
};

export default UseLayoutEffectDemo;