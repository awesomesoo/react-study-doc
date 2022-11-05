import React, { useEffect, useRef, useState } from 'react';

const EditUser = ({ current, onUpdate, setIsEdit }) => {
  const [user, setUser] = useState(current);
  const textRef = useRef(null);
  const { text, addr } = user;

  useEffect(() => {
    setUser(current);
  }, [current]);

  const changeInput = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !addr) return;
    onUpdate(user);
    setUser({ text: '', addr: '' });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>작은아씨들 출연진 수정</h2>
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
        <button type="submit">수정</button>
        <button type="submit" onClick={() => setIsEdit(false)}>
          취소
        </button>
      </p>
    </form>
  );
};

export default EditUser;

/* 2022.11.05

useEffect(() => {
    setUser(current);
  }, [current]);

setIsEdit 전달






*/
