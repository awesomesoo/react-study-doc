import React, { useRef, useState } from 'react';
import './TodoFrom.css';

const TodoFrom = () => {
  const [data, setData] = useState('');
  const [text, setText] = useState('');
  const no = useRef(data.length + 1);
  const textRef = useRef(null);

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onAdd = (e) => {
    e.preventDefault();
    if (!text) return;
    setData([...data, { id: no.current++, text: text }]);
    setText('');
    textRef.current.focus();
  };

  return (
    <form onSubmit={onAdd} className="TodoForm">
      <input type="text" value={text} onChange={changeInput} ref={textRef} />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoFrom;
