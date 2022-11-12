import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test4 = () => {
  const [post, setPost] = useState({});

  useEffect(() => {}, []);
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
