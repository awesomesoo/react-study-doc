import React, { useState } from 'react';

const Test1 = () => {
  // input이 두개니까 state도 2개, 혹은 객체화
  const [userid, setUserid] = useState('');
  const [userpw, setUserpw] = useState('');

  const changeInput1 = (e) => {
    const { value } = e.target;
    setUserid(value);
  };

  const changeInput2 = (e) => {
    const { value } = e.target;
    setUserpw(value);
  };

  return (
    <div>
      {/* input에 value값은 꼭 써주자! */}
      <input type="text" value={userid} onChange={changeInput1} />
      <input type="text" value={userpw} onChange={changeInput2} />
      <hr />
      {userid.length > 6 ? (
        <button>로그인</button>
      ) : (
        <button disabled>로그인</button>
      )}
      <br />
      <button disabled={userpw.length < 7}>로그인</button>
      {/* disabled={true}  === disabled */}
    </div>
  );
};

export default Test1;
