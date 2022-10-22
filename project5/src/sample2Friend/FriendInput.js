import React from 'react';

const FriendInput = () => {
  return (
    <form className="formadd">
      <p>
        <label htmlFor="">이름</label>
        <input type="text" />
      </p>
      <p>
        <label htmlFor="">나이</label>
        <input type="text" />
      </p>
      <p>
        <label htmlFor="">사진</label>
        <input type="text" />
      </p>
      <p>
        <label htmlFor="">추가</label>
        <input type="text" />
      </p>
    </form>
  );
};

export default FriendInput;
