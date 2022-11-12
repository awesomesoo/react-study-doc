import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test1AsyncAwait = () => {
  const [data, setData] = useState([]);

  /* 
  // 3 설명. async await
   useEffect(() => {
    const getData = async () => {};
    getData();
  }, []);
  */

  /* 
  // 3-1.
    useEffect(() => {
        const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setData(data);
        };
        getData();
    }, []);
  */

  // 3-2.
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(res.data);
    };
    getData();
  }, []);

  /* 
    try catch 도 찾아 공부하기.
  */

  return (
    <div>
      {data.map((item) => {
        <p key={item.id}> / {item.title}</p>;
      })}
    </div>
  );
};

export default Test1AsyncAwait;
/* 
비동기 통신의 데이터를 가져와서 보여주기


*/
