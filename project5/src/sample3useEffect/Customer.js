import React, { useRef, useState } from 'react';
import ListUser from './ListUser';
import AddUser from './AddUser';
import EditUser from './EditUser';
import './style.css';

const dataList = [
  { id: 1, text: '김고은', addr: '서울' },
  { id: 2, text: '남지현', addr: '제주' },
  { id: 3, text: '위하준', addr: '울산' },
  { id: 4, text: '박지후', addr: '부산' },
  { id: 5, text: '강준', addr: '서울' },
  { id: 6, text: '엄지원', addr: '부산' },
];

const Customer = () => {
  const [data, setData] = useState(dataList);
  const [isEdit, setIsEdit] = useState(false);
  const [current, setCurrent] = useState({});

  const no = useRef(data.length + 1);

  // 삭제
  const onDel = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // 추가
  const onAdd = (user) => {
    user.id = no.current++;
    setData([...data, user]);
  };

  // 수정
  const onEdit = (obj) => {
    // setIsEdit(false); // 추가 화면 나옴
    setIsEdit(true); // 수정 화면 나옴
    setCurrent(obj);
  };

  const onUpdate = (obj) => {
    setData(data.map((item) => (item.id === obj.id ? {} : item)));
    setIsEdit(false);
  };

  return (
    <div className="Customer">
      {isEdit ? (
        <EditUser current={current} onUpdate={onUpdate} setIsEdit={setIsEdit} />
      ) : (
        <AddUser onAdd={onAdd} />
      )}
      <ListUser data={data} onDel={onDel} onEdit={onEdit} />
    </div>
  );
};

export default Customer;

/* 
Customer 생성
ListUser 생성
ItemUser 생성

Customer 에서 ListUser 불러오기
ListUser 에 데이터 넣어 전달

ListUser 에서 ItemUser 불러오기
ListUser 에서 .map() 사용해서 ItemUser를 불러와 리스트의 아이템 보여주기

ItemUser 에서 구조분해 할당을 통해 item을 가져와서 보여주기

Customer 에서 삭제 기능 구현 후, ListUser 에 전달
ListUser 에 삭제 기능 넣어 ItemUser 전달
ItemUser 에 삭제 기능 넣어  onClick={() => onDel(id)

AddUser 생성 
Customer 에서 추가 기능 구현 후, AddUser 에 전달
AddUser 에서 


EditUser 생성
Customer 에서 
  const [isEdit, setIsEdit] = useState(false);
{isEdit ? <EditUser onEdit={onEdit} /> : <AddUser onAdd={onAdd} />}

ListUser 에서 onEdit 전달
ItemUser 에서 onClick={() => onEdit(item) 사용

???

 const [current, setCurrent] = useState({});

const { id, text, addr } = item;


ItemUser


EditUser   

const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !addr) return;
    onUpdate();
    setUser({ text: '', addr: '' });
  };


const onUpdate = () => {};


useEffect(() => {
    setUser(current);
  }, [current]);

setIsEdit 전달

 <button type="submit" onClick={() => setIsEdit(false)}>
          취소
        </button>





*/
