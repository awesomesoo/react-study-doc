import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  return (
    <ul className="TodoList">
      <TodoItem />
    </ul>
  );
};

export default TodoList;
