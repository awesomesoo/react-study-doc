import React from 'react';

const Test5 = () => {
  const click1 = () => {
    alert('test1');
  };

  const click2 = (num) => {
    alert(num);
  };

  return (
    <>
      <p>
        l<button onClick={click1}>이벤트 1</button>
      </p>
      <p>
        <button
          onClick={() => {
            console.log('여러줄1');
            console.log('여러줄2');
            console.log('여러줄3');
          }}
        >
          이벤트 2-1
        </button>
        <button onClick={() => console.log('한줄')}>이벤트 2-2</button>
      </p>
      <p>
        <button onClick={() => click2(100)}>이벤트 3</button>
        {/* 함수에 ()괄호를 붙이면 무조건 바로 실행(호출)이 되기 때문에 */}
        {/* <button onClick={click2(100)}>이벤트 3</button> */}

        {/* 해결하는 방법은 함수로 묶어준다. */}
        {/* <button onClick={() => click2(100)}>이벤트 3</button> */}
      </p>
    </>
  );
};

export default Test5;
