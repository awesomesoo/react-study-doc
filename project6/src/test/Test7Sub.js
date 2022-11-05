import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  background-color: pink;
  padding: 20px 30px;
  margin: 25px;
  font-size: 25px;
`;

const Test7Sub = ({ msg, isShow, setIsShow }) => {
  return (
    <>
      <p>테스트 입니다.</p>
      {isShow && <StyledH2>{msg}</StyledH2>}
      {/* <h2 style={{}background-color: 'pink', padding: '20px 30px', margin: 25, font-size: 25;}> 메시지 출력</h2> */}
      {/* <StyledH2>메시지 출력 {msg}</StyledH2> */}
    </>
  );
};

export default Test7Sub;
