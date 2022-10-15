import React, { useRef, useState } from 'react';

const Test7 = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const no = useRef(data.length + 1);
  const textRef = useRef(null);

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onAdd = (e) => {
    // 새로고침 기본기능 차단
    e.preventDefault();
    // if (text.length === 0) {
    //   return;
    // }
    // 밖으로 빠질수 있게.
    if (!text) return; //!text 값이 존재하지 않거나 false일 떄.

    setData([...data, { id: no.current++, text: text }]);
    setText('');
    textRef.current.focus();
  };

  return (
    <div>
      {/* <p>
        <input type="text" value={text} onChange={changeInput} ref={textRef} />
        <button onClick={onAdd}>
          추가
        </button>
      </p> */}
      <form onSubmit={onAdd}>
        <input type="text" value={text} onChange={changeInput} ref={textRef} />
        <button type="submit">추가</button>
      </form>

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

export default Test7;
/* 
const textRef = useRef(null);
textRef.current.focus();
<input type="text" ref={textRef} />
*/

/* 
form 태그의 특징

(e) => {
  e.preventDefault();
  if (text.length === 0) {
    return;
  }
onSubmit={onAdd}
*/
