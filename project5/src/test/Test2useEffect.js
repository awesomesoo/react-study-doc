import React, { useEffect, useRef, useState } from 'react';

const Test2useEffect = () => {
  const [text, setText] = useState('');
  const textRef = useRef(null);

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  // 화면에 그려지고 난 후
  // 처음 실행될 때 포커스가 되게해주기 (딱 한 번만 실행해주기)
  // [] 대괄호가 들어가면 한 번만 실행이 된다.
  useEffect(() => {
    console.log('useEffect 사용');
    textRef.current.focus();
  }, []); // ★★★★★

  return (
    <div>
      <input type="text" value={text} onChange={changeInput} ref={textRef} />
    </div>
  );
};

export default Test2useEffect;
