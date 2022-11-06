//실제로는 컴포넌트를 분리해서 만드는 것이좋지만 오늘은 상단에 적어봄

// 아래 3가지는 객체형 이기 떄문에 이렇게 쓸 수 있는거다라는 설명을 하기 위해서

const Bird = ({ name }) => {
  return (
    <>
      <h3>Bird 컴포넌트</h3>
      <h4>이름 : {name}</h4>
    </>
  );
};

const Cat = (props) => {
  // props = { name : '고양이' }
  // 비구조할당, 구조분해
  const { name } = props;
  return (
    <>
      <h3>Cat 컴포넌트</h3>
      <h4>이름 : {name}</h4>
      {/* <h4>이름 : {props.name}</h4> */}
      {/* props는 위위에와 같이 생략이 가능하다 */}
      {/* {props.name} 써도 되지만 props를 생략해서 구조분해 할당 할수 잇다. */}
    </>
  );
};

const Dog = (props) => {
  // const Dog = (props) => {
  // props = { name : '강아지' }
  // name 은 key 값으로 들어가게 됨
  return (
    <>
      <h3>Dog 컴포넌트</h3>
      <h4>이름 : {props.name}</h4>
    </>
  );
};

const Test2 = () => {
  return (
    <div>
      {/* 아래의 내용은 자식 컴포넌트가 된다.
          <Dog />
          <Cat />
       */}
      {/* 1. name="강아지" 변수 선언 */}
      <Dog name="강아지" />
      <hr />
      <Cat name="고양이" />
      <hr />
      <Bird name="시조새" />
    </div>
  );
};

export default Test2;
// Alt + shift + A  -> 여러줄 주석
/* 
React 컴포넌트의 단방향 데이터 흐름. ( 컴포넌트에 값을 전달  )

​

props 는 Properties 의 줄임말

​

부모 컴포넌트에서자식 컴포넌트에 값을 전달할때 

자식 컴포넌트에서 부모의 값을 받아올때 

​

JSX 문법에서 

컴포넌트를 작성할 때 컴포넌트에 속성을 지정할 수 있음 , 속성을 지정해주면 각 속성이 하나의 객체로 모여 컴포넌트를 정의한 함수의 첫 번째 파라미터로 전달

​
​

React 컴포넌트는 상위 컴포넌트에서 하위 컴포넌트로 데이터(props)가 흐릅니다. 하위 컴포넌트는 전달 받은 props를 읽기만 가능하고, 쓸 수 없습니다. (READONLY) 

<자식컴포넌트 props명 = "전달값" />
<자식컴포넌트 props명 = {state(상태값), 함수 , setState} />
<자식컴포넌트 변수 = 전달값 />

<XXX컴포넌트 변수 = 전달값 />
변수에 전달값을 담아서 XXX컴포넌트에 전달해라라는 뜻

전달값 = "문자", { 숫자 }, { 논리값 }
        {상태값}, {함수}, {set상태값}

props명 => 사용자정의 (한글, 영문, 숫자혼합)
//props명을 한글로 적어도 된다.

*/
