import React from 'react';

const BusinessItem = ({ item }) => {
  const { imgurl, kor, eng, des } = item; //구조분해할당
  return (
    <li>
      <a href="#">
        {/* //구조분해할당 */}
        {/* <div> 
          <img src={item.imgurl} alt={item.kor} />
        </div>
        <h3>
          {item.kor} <span>{item.eng}</span>
        </h3>
        <p>{item.des}</p> */}
        <div>
          <img src={imgurl} alt={kor} />
        </div>
        <h3>
          {kor} <span>{eng}</span>
        </h3>
        <p>{des}</p>
      </a>
    </li>
  );
};

export default BusinessItem;
