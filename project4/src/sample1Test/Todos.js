import React from 'react';
import TodoFrom from './TodoFrom';
import TodoList from './TodoList';
import './Todos.css';

const Todos = () => {
  return (
    <div className="Todos">
      <h1>할 일 기록하기</h1>
      <TodoFrom />
      <TodoList />
    </div>
  );
};

export default Todos;

// http://bse0.dothome.co.kr/week/4day-1/
