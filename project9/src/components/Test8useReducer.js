import React, { useReducer } from 'react'

// 초기값
const initialState = { color: 'tomato' } // 이번엔 객체로 초기값 설정함.

// 리듀서 함수
const reducer = (state, action) => {
  // 'tomato' 가 state 에 전달
  switch (action.type) {
    case 'CHANGE_COLOR':
      // 초기값이 객체이니까 리턴 해줄때도 아래와 같이 객체로 값은 전달해야한다.
      return {}
    default:
      return state
  }
}

const Test6useReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h2 style={{ color: state.color }}>컬러 : {state.color}</h2>
      <p>
        {/* dispatch({ type: CHANGE_COLOR, color: 'red' }) */}
        {/* dispatch({ type: CHANGE_COLOR, color: 'green' }) */}
        {/* dispatch({ type: CHANGE_COLOR, color: 'blue' }) */}
        {/* dispatch({ type: CHANGE_COLOR, color: 'pink' }) */}
        <button>red - RED</button>
        <button>green - GREEN</button>
        <button>green - BLUE</button>
        <button>green - PINK</button>
      </p>
    </div>
  )
}

export default Test6useReducer
/* 
 useReducer
 https://ko.reactjs.org/docs/hooks-reference.html#usereducer
 옛날에는 리덕스가 필수였었지만,
 요즘은 더 좋은게 나왔기 때문에 작업시 선택적인 부분을 작업해볼 예정.
 유지보수를 위해서 배워야함.
 
 
 
 
useState의 대체 함수입니다. 
(state, action) => newState의 형태로 
reducer를 받고 dispatch 메서드와 짝의 형태로 
현재 state를 반환합니다. 

또한 useReducer는 자세한 업데이트를 트리거 하는 컴포넌트의 성능을
 최적화할 수 있게 하는데, 이것은 콜백 대신 dispatch를 전달 
 할 수 있기 때문입니다.






0. 초기값
const initialState = 초기값;
예시 ) 
const initialState = {count: 0};




1. 상태 분리
// function  함수명(state, action) {
const 함수명(state, action) {
  switch (action.type) {
    case '액션명':
      return 값;
    default:
      state
  }
}

2. 리듀서

const [state, dispatch] = useReducer(함수상태분리, 초기값);
const [state, dispatch] = useReducer(reducer, initialState);
* dispatch : 액션 전달자


dispatch 가 1. 상태 분리에 있는 action에 절달됨.


3. 액션 선언

dispatch()  ->  함수
dispatch(객체)  -> 함수
dispatch({ type: '액션명' })     -> 반드시 타입이 존재 해야한다.
dispatch({ type: '액션명', 사용자정의키 : 값 }) 
dispatch({ type: '액션명', 사용자정의키 : 값, 키 : 값 }) 

action.type
action.사용자정의키
action.키


* type : 별명 = 액션명
* 액션명 : 한글 가능, 영문 가능(대문자, 소문자 섞어서 가능)  
-> 실제로 작업할때는 소문자보다는 대문자 '상수형'으로 써야 액션인지 인지하기 쉽다.











===============



별칭을 따로 생각해둬야한다.

*/
