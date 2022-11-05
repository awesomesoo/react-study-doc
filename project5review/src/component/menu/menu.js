import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const StyledMenu = styled.div`
  z-index: 10;
  .dim {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    transition: all 1s;
  }
`;

const StyledMenuButton = styled.div`
  z-index: 11;
  position: relative;
  width: 50px;
  height: 44px;
  margin-right: 70px;
  margin-bottom: 50px;
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
  background-color: #fff;
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

const StyledMenuList = styled.div`
  position: fixed;
  left: -40%;

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
    <StyledMenu>
      {/* <button onClick={toggleMenu}>메뉴 {menu ? '접기' : '펼치기'}</button> */}
      <StyledMenuButton onClick={toggleMenu} className={menu ? 'active' : ''}>
        <span></span>
        <span></span>
        <span></span>
      </StyledMenuButton>
      <StyledMenuList className={menu ? 'on' : ''}>
        <ul>
          <li>메뉴입니다</li>
          <li>메뉴입니다</li>
          <li>메뉴입니다</li>
        </ul>
      </StyledMenuList>
      {menu ? <div className="dim"></div> : ''}
    </StyledMenu>
  );
};

export default SimpleApp;
