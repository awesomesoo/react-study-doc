import React, { useRef, useState } from 'react';
import './TodoFrom.css';

const TodoFrom = ({ onAdd }) => {
  const [text, setText] = useState('');
  const textRef = useRef(null);

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd();
  };
  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <input type="text" ref={textRef} value={text} onChange={changeInput} />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoFrom;
