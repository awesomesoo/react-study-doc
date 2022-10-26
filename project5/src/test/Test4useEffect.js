import React, { useEffect, useState } from 'react';

const Test4useEffect = () => {
  const [count, setCount] = useState(1);
  // 시간은 한번만 실행해야하는 것이다.
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('setInterval');
      // setCount(count + 1);
      setCount((state) => state + 1);

      return () => {
        clearInterval(timer);
      };
    }, 1000);
  }, []);

  return (
    <div>
      <h1>타이머 : {count}</h1>
    </div>
  );
};

export default Test4useEffect;

/* 
yarn build
*/
