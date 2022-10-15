import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({ data }) => {
  return (
    <ul className="TodoList">
      {data.map((item) => (
        <TodoItem key={item.id}>
          {item.id} / {item.text}
        </TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
