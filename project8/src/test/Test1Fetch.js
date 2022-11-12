import React, { useState } from 'react';
import { useEffect } from 'react';

const Test1Fetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      {data.map((item) => {
        <p key={item.id}> / {item.title}</p>;
      })}
    </div>
  );
};

export default Test1Fetch;
/* 
비동기 통신의 데이터를 가져와서 보여주기


*/
