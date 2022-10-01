import React from 'react';
import BusinessItem from './BusinessItem';

const BusinessList = ({ data }) => {
  return (
    <ul className="list">
      {data.map((item) => (
        <BusinessItem key={item.id} item={item} />
      ))}
      {/* 블록을 불러와 블록의 개수만큼 BusinessItem을 반복 출력해라.라는 뜻 */}
      {/* 단순히 출력만 할게 아니기 때문에 인덱스를 쓰지 않고 객체형으로 많이 쓰기 떄문에
       현재 값의 id가 들어가게 해주자.*/}
      {/* item={item} */}
    </ul>
  );
};

export default BusinessList;
