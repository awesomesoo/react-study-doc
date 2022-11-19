import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test1Axios = () => {
  const [data, setData] = useState([]);

  /* 
  // 2-1. axios
  useEffect(() => {
   axios.get(url)
   .then( 매개변수 => 매개변수.??)3  }, []); 
  */

  /* 
  // 2-2.
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => console.log(res));
  }, []); 

  */

  /* 
  // 2-3.
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => console.log(res.data)); // 데이터만 가져옴.
  }, []);

 */

  // 2-4.
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setData(res.data)); // 데이터만 가져옴.
  }, []);

  return (
    <div>
      {data.map((item) => {
        <p key={item.id}>
          {item.id} / {item.title}
        </p>;
      })}
    </div>
  );
};

export default Test1Axios;
/* 
비동기 통신의 데이터를 가져와서 보여주기

https://pixabay.com/api/docs/ 에서 개인 키 값 넣기.

*/
