import React from 'react';
import FriendItem from './FriendItem';

const FriendList = ({ data, onDel }) => {
  return (
    <ul>
      {data.map((item) => (
        // FriendItem 컴포넌트에 props로 item 에 전달
        <FriendItem key={item.id} item={item} onDel={onDel} />
      ))}
    </ul>
  );
};

export default FriendList;
