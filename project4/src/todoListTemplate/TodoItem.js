import React from 'react';

const TodoItem = ({ item }) => {
  return (
    <li>
      <span>✓</span>
      <em>{TodoItem.text}</em>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;
