import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test4 = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [num, setNum] = useState(1);

  /*  URL 분리하기 전
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => setPost(res.data));
  }, []); */

  useEffect(() => {
    // const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    axios.get(url).then((res) => setPost(res.data));
  }, [num]);

  const onShow = () => {
    setNum(id);
  };

  return (
    <div>
      {/* 
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} /> 
      이렇게만 하면 바뀌지 않는다. -> 원래 성격이다. 그래서 useEffect 에  }, [ id ]); 로 업데이트 해주면 된다.
      */}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={onShow}>확인</button>
      <hr />
      <h3>
        {post.id} / {post.title}
      </h3>
    </div>
  );
};

export default Test4;
