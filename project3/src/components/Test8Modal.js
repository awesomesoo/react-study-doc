import React from 'react';
// 팝업의 내용
const Test8Modal = ({ hide }) => {
  return (
    <>
      {/* 배경을 눌러도 닫힘 */}
      <div className="bg" onClick={hide}></div>
      {/* 닫기 버튼 누르면 닫힘 */}
      <div className="popup">
        <h2>팝업</h2>
        <p className="closex" onClick={hide}>
          X
        </p>
      </div>
    </>
  );
};

export default Test8Modal;
// 부모컴포넌트에서 hide라는 함수를 받아서 사용하는 법
