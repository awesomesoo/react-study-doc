import React, { useState } from 'react';

const Test1 = () => {
  const [count, setCount] = useState(0);
  //  const [count, setCount] = useState(초기값);

  const increment = () => {
    setCount(count + 1);
    //   count + 1 해주고 setCount 넘겨라
    console.log(count);
  };
  const decrement = () => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <div>
      <h2>{count}</h2>
      <p>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
      </p>
    </div>
  );
};

export default Test1;
