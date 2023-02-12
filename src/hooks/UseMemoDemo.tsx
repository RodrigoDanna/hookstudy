import React, { useState, useMemo } from 'react';

interface Props {
  n: number;
}

/**
 * useMemo() is a hook that will only recompute the memoized value when one of the dependencies has changed.
 * @param param0 The props.
 * @returns {JSX.Element} The component.
 */
const UseMemoDemo: React.FC<Props> = ({ n }) => {
  const fibonacci = useMemo(() => {
    if (n <= 1) return n;
    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
    return curr;
  }, [n]);

  return (
    <div>
      <p>Passed: {n}</p>
      <p>Fibonacci: {fibonacci}</p>
    </div>
  );
};

export default UseMemoDemo;