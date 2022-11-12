import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test4 = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  /*  URL 분리하기 전
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => setPost(res.data));
  }, []); */

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    axios.get(url).then((res) => setPost(res.data));
  }, []);

  return (
    <div>
      <input type="text" />
      <hr />
      <h3>
        {post.id} / {post.title}
      </h3>
    </div>
  );
};

export default Test4;
