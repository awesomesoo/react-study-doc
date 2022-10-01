import React, { useState } from 'react';

const Test6 = () => {
  const [isChk, setIschk] = useState(true);
  const changeInput = (e) => {
    const { checked } = e.target;
    setIschk(checked);
  };
  return (
    <div
      style={{
        margin: 30,
        fontSize: 20,
        textDecoration: isChk ? 'line-through' : 'none',
        color: 'tomato',
      }}
    >
      <input
        type="checkbox"
        name="chk1"
        checked={isChk}
        onChange={changeInput}
      />
      {/* checked={isChk}  는 useState(true); 니까 트루 */}
      <span style={{ marginLeft: 15, fontSize: 18 }}>
        오늘은 토요일 입니다.
      </span>
    </div>
  );
};

export default Test6;
