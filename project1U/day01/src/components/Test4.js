import React from 'react';

const Test4 = () => {
  const done1 = true;
  const done2 = false;
  const done3 = undefined;

  return (
    <div>
      <p>{done1 === true ? <button>확인</button> : <button>취소</button>}</p>
      <p>{done1 && <button>출력</button>}</p>
      <p>{done2 || <strong>거짓결과</strong>}</p>
      <p>{done3 || <strong>조회된 데이터가 없습니다.</strong>}</p>
      {/* if문을 못쓰는데 어떻게 하냐면*/}

      <p></p>
      <p></p>
    </div>
  );
};

export default Test4;
/* 

조건이 여러개일때 (삼항연산자를 쓰기에는 너무 길어져서) 아래와 같이 쓴다

(조건1)&& (결과)
(조건2)&& (결과)
(조건3)&& (결과)
(조건4)&& (결과)

*/
