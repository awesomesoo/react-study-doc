import React from 'react';

const FriendList = () => {
  return (
    <ul>
      {data.map((item) => (
        <FriendItem/>
      ))}
    </ul>
  );
};

export default FriendList;
