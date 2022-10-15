import React, { useState } from 'react';
// import dataList from '../api/testDate';
import { testList } from '../assets/api/testDate';

const Test2 = () => {
  const [data, setData] = useState(testList);
  return (
    <div style={{ margin: 30 }}>
      <h2> 출력 연습, api</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} / {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test2;

// 1. 초기화면 세팅
/* 
import React, { useState } from 'react';

const Test2 = () => {
  const [data, setData] = useState([
    { id: 1, text: '오늘은 토요일입니다. 001' },
    { id: 2, text: '오늘은 토요일입니다. 002' },
    { id: 3, text: '오늘은 토요일입니다. 003' },
    { id: 4, text: '오늘은 토요일입니다. 004' },
    { id: 5, text: '오늘은 토요일입니다. 005' },
  ]);
  return (
    <div style={{ margin: 30 }}>
      <h2> 출력 연습, api</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} / {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test2;
*/

// 2. useState 데이타 리스트를 분리해주자
/* 
import React, { useState } from 'react';

const dataList = [
  { id: 1, text: '오늘은 토요일입니다. 001' },
  { id: 2, text: '오늘은 토요일입니다. 002' },
  { id: 3, text: '오늘은 토요일입니다. 003' },
  { id: 4, text: '오늘은 토요일입니다. 004' },
  { id: 5, text: '오늘은 토요일입니다. 005' },
];

const Test2 = () => {
  const [data, setData] = useState(dataList);
  return (
    <div style={{ margin: 30 }}>
      <h2> 출력 연습, api</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} / {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test2;
*/

// 3. testData.js에 배열을 분리한다. 그리고 이것을 불러와 준다.
// 3-1. testData.js에 배열을 분리한다.
/* 
const testList = [
  { id: 1, text: '오늘은 토요일입니다. 001' },
  { id: 2, text: '오늘은 토요일입니다. 002' },
  { id: 3, text: '오늘은 토요일입니다. 003' },
  { id: 4, text: '오늘은 토요일입니다. 004' },
  { id: 5, text: '오늘은 토요일입니다. 005' },
];

export default testList;
 */
// 3-1.이것을 불러와 준다.
/* 
import dataList from '../api/testDate';
*/

// 4. 데이터를 export import 하는 방식이 여러가지가 있다. testDate.js를 통해 확인하자
/* 
import React, { useState } from 'react';
// import dataList from '../api/testDate';
import { testList } from '../api/testDate';

const Test2 = () => {
  const [data, setData] = useState(testList);
  return (
    <div style={{ margin: 30 }}>
      <h2> 출력 연습, api</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id} / {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test2;
*/
/* 
export const testList = [
  { id: 1, text: '오늘은 토요일입니다. 001' },
  { id: 2, text: '오늘은 토요일입니다. 002' },
  { id: 3, text: '오늘은 토요일입니다. 003' },
  { id: 4, text: '오늘은 토요일입니다. 004' },
  { id: 5, text: '오늘은 토요일입니다. 005' },
];
*/
