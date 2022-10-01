import React from 'react';
// 6. username, age, addr, tel, changeInput 를 props 해준다.
//11. onNext 추가
const Step1 = ({ username, age, addr, tel, changeInput, onNext }) => {
  return (
    <div>
      <h3>Step 1</h3>
      <p>
        <label>이름</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={changeInput}
        />
      </p>
      <p>
        <label>나이</label>
        <input type="text" name="age" value={age} onChange={changeInput} />
      </p>
      <p>
        <label>주소</label>
        <input type="text" name="addr" value={addr} onChange={changeInput} />
      </p>
      <p>
        <label>연락처</label>
        <input type="text" name="tel" value={tel} onChange={changeInput} />
      </p>
      <p>
        {/* 12. onNonClick={onNext}ext 추가 */}
        <button onClick={onNext}>다음</button>
      </p>
    </div>
  );
};

export default Step1;
