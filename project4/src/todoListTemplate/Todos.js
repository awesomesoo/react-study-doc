import React, { useState } from 'react';
import TodoFrom from './TodoFrom';
import TodoList from './TodoList';
import './Todos.css';

const dataList = [
  { id: 1, text: '운동하기' },
  { id: 2, text: '친구만나기' },
  { id: 3, text: '퇴근하기' },
];

const Todos = () => {
  const [data, setData] = useState(dataList);
  return (
    <div className="Todos">
      <h1>할 일 기록하기</h1>
      <TodoFrom />
      <TodoList data={data} />
    </div>
  );
};

export default Todos;

// http://bse0.dothome.co.kr/week/4day-1/
