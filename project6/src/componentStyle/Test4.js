import React from 'react';
import './Test4.css';
import styles from './Test4.module.css';

const Test4 = () => {
  return (
    <>
      <div className="box">Test4</div>
      <div className={styles.box}>Test4</div>
    </>
  );
};

export default Test4;
/* 

Adding a CSS Modules Stylesheet
https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

* CSS (SCSS, SASS)
1. style.css 메인/서브 모두 작업 -> 리액트에서는 제일 안좋은 방법이다. asset에 css를 다 넣는 방법은 좋지 않다.

2. 컴포넌트별로 todos.js / todos.css / todos.module.css -> 좋지만 이것도 관리가 잘 안된다.

3. 폴더 / 컴포넌트, CSS -> 제일 추천
todos폴더 Todos.js, todos.module.css  -> 이런식으로 넣는게 제일 편하다.




*/
