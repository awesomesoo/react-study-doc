import React from 'react';
import './Test3.css';

const Test3 = () => {
  return (
    // class가 아닌 className을 쓴다
    <div className="con-box">
      {/* 젠코딩 하는 법 */}
      {/* article*4>h3{타이틀$} */}
      {/* 위와 같이 쓰면 아래와 같이 나온다. */}
      <article>
        <h3>타이틀1</h3>
      </article>
      <article>
        <h3>타이틀2</h3>
      </article>
      <article>
        <h3>타이틀3</h3>
      </article>
      <article>
        <h3>타이틀4</h3>
      </article>
    </div>
  );
};

export default Test3;
