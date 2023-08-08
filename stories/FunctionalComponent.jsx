import React, { useState } from 'react';

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>Functional Component</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default FunctionalComponent;
