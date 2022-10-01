import React, { useState } from 'react';

const Test3 = () => {
  const [userid, setUserid] = useState('');
  const [userpw, setUserpw] = useState('');

  const changeInput1 = (e) => {
    // setUserid(e.target.value);
    // 위의 것과 아래는 결과가 똑같다.
    const { value } = e.target;
    setUserid(value);
  };
  const changeInput2 = (e) => {
    // setUserpw(e.target.value);
    // 위의 것과 아래는 결과가 똑같다.
    const { value } = e.target;
    setUserpw(value);
  };
  const onReset = (e) => {
    setUserid('');
    setUserpw('');
    // 위의 두줄만 쓰면 h3에 있는 텍스트는 사라졌지만 , input 에 있는 벨류는 초기화되지 않았다.
  };
  return (
    <div>
      {/* 폼에 관련된 것은 onChange */}
      <input type="text" value={userid} onChange={changeInput1} />
      <input type="text" vlaue={userpw} onChange={changeInput2} />{' '}
      {/* value={userid},  vlaue={userpw} 를 써줘야 값을 넘겨줘서 초기화 된다. */}
      <button onClick={onReset}>초기화</button>
      <hr />
      <h3>아이디: {userid}</h3>
      <h3>비밀번호: {userpw}</h3>
    </div>
  );
};

export default Test3;
