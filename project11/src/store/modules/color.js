// js 파일 (여기에는 컴포넌트 명령어가 못 들어감)

// =============================================
// 1. 액션 생성하기
// 통상적으로 액션명 앞에 파일명을 써준다. (프로젝트가 클 경우 다른 액션과 헷갈리수 있어서, 다른거라고 알려주기 위해서)
// const 액션상수 = '파일명/액션명'
const RED = 'color/RED'
const GREEN = 'color/GREEN'
const BLUE = 'color/BLUE'
const PINK = 'color/PINK'

// =============================================
// 2. 액션 담은 함수 내보내기
// dispatch({type: AAA}) -> dispatch( aaa() )
// dispatch({type: AAA , 값}) -> dispatch( aaa(값) )
export const red = () => ({ type: RED })
export const green = () => ({ type: GREEN })
export const blue = () => ({ type: BLUE })
export const pink = () => ({ type: PINK })

// =============================================
// 3. 리듀서 함수 초기값
const initialState = { color: 'hotpink' }

// =============================================
// 4. 리듀서 함수 만들기
// 꼭 ( state = initialState, action ) 를 적어야 한다.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RED:
      return { color: 'red' }
    case GREEN:
      return { color: 'green' }
    case BLUE:
      return { color: 'blue' }
    case PINK:
      return { color: 'pink' }
    default:
      return state
  }
}

// =============================================
// 5. 리듀서 함수 내보내기
export default reducer
