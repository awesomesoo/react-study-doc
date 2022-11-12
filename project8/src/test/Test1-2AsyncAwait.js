import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test1Fetch = () => {
  const [data, setData] = useState([]);

  /* 
  // 1-1. fetch

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => console.log(res.json())
    }, []); 
    */

  /* 
  // 1-2
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []); 
  */

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

  /* 2-4.
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setData(res.data)); // 데이터만 가져옴.
  }, []); 
  */

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
        <p key={item.id}>
          {item.id} / {item.title}
        </p>;
      })}
    </div>
  );
};

export default Test1Fetch;
/* 
비동기 통신의 데이터를 가져와서 보여주기


*/
