import React, { useRef, useState } from 'react';

const FriendInput = ({ onAdd }) => {
  //
  const [obj, setObj] = useState({
    name: '',
    age: '',
    image: '',
  });

  // 구조분해 할당
  const { name, age, image } = obj;

  const changeInput = (e) => {
    const { value, name } = e.target;
    setObj({
      ...obj,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // onAdd(name, age, image); // 아래와 같다
    onAdd(obj);
  };

  return (
    <form className="formadd" onSubmit={onSubmit}>
      <p>
        <label>이름</label>
        <input type="text" name="name" value={name} onChange={changeInput} />
      </p>
      <p>
        <label>나이</label>
        <input type="text" name="age" value={age} onChange={changeInput} />
      </p>
      <p>
        <label>사진</label>
        <input type="text" name="image" value={image} onChange={changeInput} />
      </p>
      <p>
        <button type="submit">추가</button>
      </p>
    </form>
  );
};

export default FriendInput;
