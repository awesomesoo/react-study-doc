import React from 'react';

const BusinessItem = ({ item }) => {
  return (
    <li>
      <a href="#">
        <div>
          <img src={item.imgurl} alt={item.kor} />
        </div>
        <h3>
          {item.kor} <span>{item.eng}</span>
        </h3>
        <p>{item.des}</p>
      </a>
    </li>
  );
};

export default BusinessItem;
