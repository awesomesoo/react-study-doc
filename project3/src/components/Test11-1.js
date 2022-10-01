import React, { useState } from 'react';

const Test11 = () => {
  const [obj, setObj] = useState({
    userid: '',
    pw: '',
    email: '',
  });

  // const [userid, setUserid] = useState('');
  // const [pw, setPw] = useState('');
  // const [email, setEmail] = useState('');

  const changeInput1 = (e) => {
    const { value } = e.target;
    setObj({
      ...obj,
      userid: value,
    });
  };
  const changeInput2 = (e) => {
    const { value } = e.target;
    setObj({
      ...obj,
      pw: value,
    });
  };
  const changeInput3 = (e) => {
    const { value } = e.target;
    setObj({
      ...obj,
      email: value,
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
      <input type="text" value={obj.userid} onChange={changeInput1} />
      <br />
      <input type="text" value={obj.pw} onChange={changeInput2} />
      <br />
      <input type="text" value={obj.email} onChange={changeInput3} />
      <br />
      <button onClick={onReset}>초기화</button>
      <hr />
      <h3>아이디 : {obj.userid}</h3>
      <h3>비번: {obj.pw}</h3>
      <h3>이메일 : {obj.email}</h3>
    </>
  );
};

export default Test11;
/* 
폼이 매우 많을 때, 처리하는 법
*/
