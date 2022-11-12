import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test3 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      try {
        setData(res.data);
        setLoading(true);
        setError(null);
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>
          {item.id} / {item.title}
        </p>
      ))}
    </div>
  );
};

export default Test3;
