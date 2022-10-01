import React, { useState } from 'react';
import Step1 from './Step1';
import './style.css';

const Main = () => {
  // 1. 총 8개의 객체를 선언해준다.
  const [obj, setObj] = useState({
    username: '',
    age: '',
    addr: '',
    tel: '',
    job: '',
    email: '',
    gender: '',
    inter: '',
  });
  // 2. 구조분해 해준다.
  const { username, age, addr, tel, job, email, gender, inter } = obj;

  // 4. changeInput 함수를 생성한다.
  const changeInput = (e) => {
    const { value, name } = e.target;
    setObj({
      ...obj,
      [name]: value,
    });
  };

  return (
    <div className="wrap">
      {/* 3. username={username}
        age={age}
        addr={addr}
        tel={tel} 
        객체를 불러와준다. */}
      {/* 5. changeInput={changeInput} 불러온다. */}
      <Step1
        username={username}
        age={age}
        addr={addr}
        tel={tel}
        changeInput={changeInput}
      />
    </div>
  );
};

export default Main;
