import React from 'react';
import './Test5.css';
import styles from './Test5.module.css';

const Test5 = () => {
  return (
    <>
      <div className="box">Test5</div>
      <div className={styles.box}>Test5</div>
    </>
  );
};

export default Test5;
