import React, { useState } from 'react';

const Test6 = () => {
  // 문제 : 초기값은 아래와 같이 설정하고 싶다.
  // {id:1, text:'홍길동'}
  const [data, setData] = useState([]);

  const names =
    '강호동,유재석,한지민,송혜교,전지현,이수근,김건우,김고은,최우식'.split(',');
  const onAdd = () => {
    const ran = Math.floor(Math.random() * names.length);
    setData([...data, { id: data.length + 1, text: names[ran] }]);
  };

  return (
    <div>
      <button onClick={onAdd}>추가</button>
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

export default Test6;

/* 
주의:
id: data.length 는 쓰면 안됨. 
이유:
id가 중복이 되기 때문에.
*/
