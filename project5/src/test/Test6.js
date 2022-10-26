import React, { useEffect, useState } from 'react';

const Test6 = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  const changeInput = (e) => {
    const { value } = e.target;
    setStep(Number(value));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // setCount((state) => state + 1);
      // 입력값 만큼
      setCount((state) => state + step);
    }, 1000);

    // 뒷정리
    return () => {
      clearInterval(timer);
      console.log('뒷정리');
    };
  }, [step]);
  // }, [바뀌는 대상]);
  // }, [step(=input)이 바뀔 때마다 바꿔주기]);

  return (
    <div>
      <p>
        <input type="text" value={step} onChange={changeInput} />
        <span>입력값만큼 1초 단위 증가하기</span>
      </p>
      <h2>결과 : {count}</h2>
    </div>
  );
};

export default Test6;
