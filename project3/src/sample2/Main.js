import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import './style.css';

const Main = () => {
  // 7. step 단계를 제작하기 위해 선언해준다.
  const [step, setStep] = useState(1);

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

  // 9. onNext , onPrev 함수 생성
  const onNext = () => {
    setStep(step + 1);
  };
  const onPrev = () => {
    setStep(step - 1);
  };

  return (
    <div className="wrap">
      {/* 3. username={username}
        age={age}
        addr={addr}
        tel={tel} 
        객체를 불러와준다. */}
      {/* 5. changeInput={changeInput} 불러온다. */}

      {/* <Step1
        username={username}
        age={age}
        addr={addr}
        tel={tel}
        changeInput={changeInput}
      /> */}

      {/* 8. 
      <Step1
        username={username}
        age={age}
        addr={addr}
        tel={tel}
        changeInput={changeInput}
      />
      주석하고,
      아래와 같이 만든다.      
      */}
      {/* 10. onNext={onNext} 추가 */}

      {/* {step === 1 && (
        <Step1
          username={username}
          age={age}
          addr={addr}
          tel={tel}
          changeInput={changeInput}
          onNext={onNext}
        />
      )} */}
      {/* 12.위의 주석과 같다. 아래와 같이 obj={obj} 쓰면  username={username}
          age={age}
          addr={addr}
          tel={tel}
          을 쓰지 않아도 된다.
          */}
      {step === 1 && (
        <Step1 obj={obj} changeInput={changeInput} onNext={onNext} />
      )}
      {/* step2는 그냥 수정 안 */}
      {step === 2 && (
        <Step2
          job={job}
          email={email}
          gender={gender}
          inter={inter}
          changeInput={changeInput}
          onNext={onNext}
          onPrev={onPrev}
        />
      )}
      {step === 3 && (
        <Step3
          // obj={obj}
          {...obj}
          changeInput={changeInput}
          onNext={onNext}
          onPrev={onPrev}
        />
      )}
      {step === 4 && <Step4 username={username} />}
    </div>
  );
};

export default Main;
