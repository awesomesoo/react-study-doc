import { combineReducers } from 'redux'
import color from './modules/color'
import count from './modules/count'
import changecolor from './modules/changecolor'

export default combineReducers({
  // 리듀서이름1,
  // 키 : 리듀서이름2,
  colorA: color, // colorA: color를 color 라고 써도 된다.
  count,
  changecolor,
})
/* 

3. 리듀서 합치기

  import { combineReducers } from 'redux';

  import 리듀서이름1 from './리듀서파일1'; 

  import 리듀서이름2 from './리듀서파일2'; 

  import 리듀서이름3 from './리듀서파일3'; 

  ​

  export default combineReducers({

  리듀서이름1, 

  키 : 리듀서이름2,

  키 : 리듀서이름3

  ​

  });

*/
