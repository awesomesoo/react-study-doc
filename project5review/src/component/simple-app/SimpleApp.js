import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const StyledMenuButton = styled.div`
  position: relative;
  width: 50px;
  height: 44px;
  margin-right: 70px;
  margin-bottom: 50px;
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
  span {
    display: inline-block;
    transition: all 0.4s;
    box-sizing: border-box;
  }

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: blue;
    border-radius: 4px;
  }

  span:nth-of-type(1) {
    top: 0;
  }

  span:nth-of-type(2) {
    top: 20px;
  }

  span:nth-of-type(3) {
    bottom: 0;
  }

  /* type-01 */
  /* 중앙 라인이 고정된 자리에서 투명하게 사라지며 상하라인 회전하며 엑스자 만들기 */
  &.active span:nth-of-type(1) {
    transform: translateY(20px) rotate(-45deg);
  }

  &.active span:nth-of-type(2) {
    opacity: 0;
  }

  &.active span:nth-of-type(3) {
    transform: translateY(-20px) rotate(45deg);
  }
`;

const StyledMenu = styled.div`
  position: fixed;
  left: -40%;
  z-index: 10;
  width: 40%;
  height: 100%;
  background-color: pink;
  transition: all 0.3s;
  ul {
    li {
      display: block;
    }
  }
  &.on {
    left: 0;
  }
`;

const SimpleApp = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      {/* <button onClick={toggleMenu}>메뉴 {menu ? '접기' : '펼치기'}</button> */}
      <StyledMenuButton onClick={toggleMenu} className={menu ? 'active' : ''}>
        <span></span>
        <span></span>
        <span></span>
      </StyledMenuButton>
      <StyledMenu className={menu ? 'on' : ''}>
        <ul>
          <li>메뉴입니다</li>
          <li>메뉴입니다</li>
          <li>메뉴입니다</li>
        </ul>
      </StyledMenu>
      <div className="content">컨텐츠</div>
    </>
  );
};

export default SimpleApp;
