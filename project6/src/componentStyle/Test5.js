import React from 'react';
import './Test5.css';
import styles from './Test5.module.css';

const Test5 = () => {
  return (
    <div className="wrap">
      {/* 스타일 하나만 사용할 때 */}
      <div className="box">Test5</div>
      <div className="box">Test5</div>
      <div className={styles.box}>Test5</div>
      <div className={styles.box}>Test5</div>

      {/* 다중 클래스 사용할 때 */}
      <div className="size bg">Test5</div>
      <div className={`${styles.size} ${styles.bg}`}>Test5</div>
      <div className={`size ${styles.bg}`}>Test5</div>
      <div className={`${styles.size} bg`}>Test5</div>

      {/* 다중 클래스 배열 형식으로 사용할 때, 단 join(' ') 이 꼭 들어가야 함 */}
      <div className={[styles.size, styles.bg].join(' ')}>조인 공백 넣기</div>
      {/* 일반 CSS와 섞어서 쓸 때 */}
      <div className={['size', styles.bg].join(' ')}>조인 공백 넣기</div>
      <div className={[styles.size, 'bg'].join(' ')}>조인 공백 넣기</div>

      {/* 모듈 안에 기본 CSS 처럼 사용할 때 */}
      <div className="test">Test5</div>
    </div>
  );
};

export default Test5;
