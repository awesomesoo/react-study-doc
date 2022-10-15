import React, { useRef, useState } from 'react';
import TodoFrom from './TodoFrom';
import TodoList from './TodoList';
import './Todos.css';

const dataList = [
  { id: 1, text: '운동하기', isChk: false }, // 이름 맘대로 해도 됨. isChk
  { id: 2, text: '친구만나기', isChk: true },
  { id: 3, text: '퇴근하기', isChk: false },
];

const Todos = () => {
  const [data, setData] = useState(dataList);
  const no = useRef(data.length + 1);

  // 삭제
  const onDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // 추가
  const onAdd = (text) => {
    setData([...data, { id: no.current++, text, isChk: false }]);
  };

  // 수정
  const onMod = () => {
    
  };

  return (
    <div className="Todos">
      <h1>할 일 기록하기</h1>
      <TodoFrom onAdd={onAdd} data={data} />
      <TodoList data={data} onDel={onDel} onMod={onMod} />
    </div>
  );
};

export default Todos;
// 완성 화면
// http://bse0.dothome.co.kr/week/4day-1/
