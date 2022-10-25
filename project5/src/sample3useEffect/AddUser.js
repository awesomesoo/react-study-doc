import React, { useRef, useState } from 'react';

const AddUser = ({ onAdd }) => {
  const [user, setUser] = useState({ text: '', addr: '' });
  const textRef = useRef(null);
  const { text, addr } = user;

  const changeInput = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 기능 차단.
    if (!text || !addr) return; // 인풋이 하나라도 빈 값이면 안된다는 의미.
    onAdd(user); // 추가를 해준다.
    setUser({ text: '', addr: '' }); // 인풋을 빈값으로 만들자.
    textRef.current.focus(); // 포커스하겠다.
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>작은아씨들 출연진 추가</h2>
      <p>
        <label>이름</label>
        <input
          type="text"
          name="text"
          value={text}
          onChange={changeInput}
          ref={textRef}
        />
      </p>
      <p>
        <label>주소</label>
        <input type="text" name="addr" value={addr} onChange={changeInput} />
      </p>
      <p>
        <button type="submit">추가</button>
      </p>
    </form>
  );
};

export default AddUser;
