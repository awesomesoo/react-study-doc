import React from 'react';
import testimg0 from '../assets/img/m0.jpg';
import testimg1 from '../assets/img/m1.jpg';
import testimg2 from '../assets/img/m2.jpg';

const Test3 = () => {
  return (
    <div>
      {/* src 안에 이미지를 넣을 경우 */}
      <h2>이미지 처리하기</h2>
      <img src={testimg0} alt="" />
      <img src={testimg1} alt="" />
      <img src={testimg2} alt="" />

      {/* public 안에 이미지를 넣을 경우 */}
      <img src="./images/cat0.jpg" alt="" />
      <img src="./images/cat1.jpg" alt="" />
      <img src="./images/cat2.jpg" alt="" />
    </div>
  );
};

export default Test3;
/* 
- src 안에 이미지를 넣을 경우
 import 참조변수 from '이미지경로'      // 참조변수는 넣어도 되고 안넣어도 되지만 넣어서 사용하는걸 추천

 - public 안에 이미지를 넣을 경우
  index.html - 첫페이지
  html 처럼 불러 올 수 있다.
  img src = './images/이미지'

*/
