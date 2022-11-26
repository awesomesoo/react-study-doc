// js 파일 (여기에는 컴포넌트 명령어가 못 들어감)

// 1. 액션 생성하기
const INCREMENT = 'count/INCREMENT' // const 액션상수 = '파일명/액션명'
const DECREMENT = 'count/DECREMENT'
const RESET = 'count/RESET'

// 2. 액션 담은 함수 내보내기
export const increment = () => ({
  type: INCREMENT,
})
export const decrement = () => ({
  type: DECREMENT,
})
export const reset = () => ({
  type: RESET,
})

// 3. 리듀서 함수 초기값
const initialState = { num: 0 }

// 4. 리듀서 함수 만들기
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { num: 1 }
    case DECREMENT:
      return { num: 5 }
    case RESET:
      return { num: 0 }
    default:
      return state
  }
}

// 5. 리듀서 함수 내보내기
export default reducer
