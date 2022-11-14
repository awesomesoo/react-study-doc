import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test4 = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [num, setNum] = useState(1);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    axios.get(url).then((res) => setPost(res.data));
  }, [num]);

  const onShow = () => {
    setNum(id);
  };

  return (
    <div>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={onShow}>확인</button>
      <hr />
      <h3>
        {post.id} / {post.title}
      </h3>
    </div>
  );
};

export default Test4;
