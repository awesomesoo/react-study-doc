import React, { useState } from 'react';

const Test11 = () => {
  const [obj, setObj] = useState({
    userid: '',
    pw: '',
    email: '',
  });
  // 구조분해
  const { userid, pw, email } = obj;
  // obj.pw    나     obj['pw]  를 쓰면 되는데 첫번째 꺼를 많이 쓴다. 결과는 같음

  const changeInput = (e) => {
    const { value, name } = e.target;
    setObj({
      ...obj,
      [name]: value, // input에 있는 name 값을 가져오겠다
      // ['userid']: value,
    });
  };

  const onReset = () => {
    setObj({
      userid: '',
      pw: '',
      email: '',
    });
  };

  return (
    <>
      <h5>폼이 매우 많을 때, 처리하는 법</h5>
      <input type="text" value={userid} onChange={changeInput} name="userid" />
      <br />
      <input type="text" value={pw} onChange={changeInput} name="pw" />
      <br />
      <input type="text" value={email} onChange={changeInput} name="email" />
      <br />
      <button onClick={onReset}>초기화</button>
      <hr />
      <h3>아이디 : {userid}</h3>
      <h3>비번: {pw}</h3>
      <h3>이메일 : {email}</h3>
    </>
  );
};

export default Test11;
/* 
폼이 매우 많을 때, 처리하는 법
*/
