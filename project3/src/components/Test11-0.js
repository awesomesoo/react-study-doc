/* 
처음 상태 복붙.
*/
import React, { useState } from 'react';

const Test11UserId = () => {
  const [userid, setUserid] = useState('');
  const [pw, setPw] = useState('');
  const [email, setEmail] = useState('');

  const changeInput1 = (e) => {
    const { value } = e.target;
    setUserid(value);
  };
  const changeInput2 = (e) => {
    const { value } = e.target;
    setPw(value);
  };
  const changeInput3 = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onReset = () => {
    setUserid('');
    setPw('');
    setEmail('');
  };

  return (
    <>
      <h5>폼이 매우 많을 때, 처리하는 법</h5>
      <input type="text" value={userid} onChange={changeInput1} />
      <br />
      <input type="text" value={pw} onChange={changeInput2} />
      <br />
      <input type="text" value={email} onChange={changeInput3} />
      <br />
      <button onClick={onReset}>초기화</button>
      <hr />
      <h3>아이디 : {userid}</h3>
      <h3>비번: {pw}</h3>
      <h3>이메일 : {email}</h3>
    </>
  );
};

export default Test11UserId;
/* 
폼이 매우 많을 때, 처리하는 법
*/
