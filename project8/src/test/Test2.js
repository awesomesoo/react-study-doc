import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts') // 주소 잘못 쓰면 에러가 나게 됨.
      .then((res) => {
        setLoading(false);
        setData(res.data);
        setError(null);
      })
      .catch((error) => {
        setLoading(true);
        setData({});
        setError('주소 에러');
      });
  }, []);

  return (
    <div>
      {data && loading ? (
        <h2>로딩중...</h2>
      ) : (
        data.map((item) => (
          <p key={item.id}>
            {item.id} / {item.title}
          </p>
        ))
      )}
      <h3>{error ? error : null}</h3>
    </div>
  );
};

export default Test2;
