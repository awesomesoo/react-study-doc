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
      setLoading(false); // 데이터가 들어오는게 다 끝나면 false로 변경한다.
    };
    getData();
  }, []);

  // 로딩처리, 에러처리, 데이터 null 처리
  if (loading) return <h2>로딩중...</h2>;
  if (error) return <h2>에러 메시지</h2>;
  if (!data) return null;

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

/*
 * try catch는 백엔드단에서 많이 사용한다.
 */
