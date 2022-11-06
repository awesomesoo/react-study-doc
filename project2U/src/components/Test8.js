import React, { useState } from 'react';

const Test8 = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>숫자 : {count}</h2>
      <p>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
      </p>
    </>
  );
};

export default Test8;
