import { useState } from 'react';
import './Test12.css';

const dataList = [
  { id: 1, name: '김고은', age: 20, addr: '제주', done: true },
  { id: 2, name: '김다미', age: 30, addr: '울산', done: true },
  { id: 3, name: '유재석', age: 40, addr: '서울', done: false },
  { id: 4, name: '강호동', age: 50, addr: '경남', done: false },
  { id: 5, name: '송혜교', age: 60, addr: '전주', done: true },
];

const Test12 = () => {
  const [data, setData] = useState(dataList);

  return (
    <div>
      <table className="list">
        <caption>친구 리스트</caption>
        <colgroup>
          <col className="num" />
          <col className="name" />
          <col className="age" />
          <col className="addr" />
          <col className="consent" />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>나이</th>
            <th>주소</th>
            <th>동의여부</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}살</td>
              <td>{item.addr}</td>
              <td>{item.done ? '동의' : '비동의'}</td>
            </tr>
          ))}{' '}
        </tbody>
      </table>
    </div>
  );
};

export default Test12;
