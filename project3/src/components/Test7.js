import React, { useState } from 'react';
// 1. 체크박스 true 상자 보이고 숨기기 - 삼항, && 이용
// 2. false이면 보이기 true이면 숨기기
const Test7 = () => {
  const [isChek, setIsChek] = useState(false);
  const changeInput = (e) => {
    const { checked } = e.target;
    setIsChek(checked);
  };
  const css1 = {
    width: 100,
    height: 100,
    background: 'tomato',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 2,
    fontSize: 50,
  };
  return (
    <div style={{ margin: 20 }}>
      <input
        type="checkbox"
        name="chk1"
        checked={isChek}
        onChange={changeInput}
      />
      보이기 / 숨기기
      {isChek === true ? <div style={css1}>1</div> : <div style={css1}>2</div>}
    </div>
  );
};

export default Test7;
