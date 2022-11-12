import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test4 = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get('').then((res) => setPost(res.data));
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
