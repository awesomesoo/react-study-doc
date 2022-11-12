import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test1Fetch = () => {
  const [data, setData] = useState([]);

  /* 1.

fetch('https://jsonplaceholder.typicode.com/posts')
        .then(
            (res) =>
    console.log(res.json() ) 
    
    */

  /* 2.
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []); 
  
  */

  /* 3.

  useEffect(() => {
   axios.get(url)
   .then( 매개변수 => 매개변수.??)
  }, []); 
  
  */

  /* 3-1.

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => console.log(res));
  }, []); 

  */

  /* 3-2.

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => console.log(res.data)); // 데이터만 가져옴.
  }, []);

 */

  /* 3-3.

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setData(res.data)); // 데이터만 가져옴.
  }, []); 

  */

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
