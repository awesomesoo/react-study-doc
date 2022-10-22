import React, { useState } from 'react';
import styled from 'styled-components';
import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';

const StyledGallery = styled.div`
  width: 600px;
  margin: 30px auto;
`;

const dataList = [
  { id: 1, imgurl: './images/cat0.jpg', title: '고양이0', isClass: true },
  { id: 2, imgurl: './images/cat1.jpg', title: '고양이1', isClass: false },
  { id: 3, imgurl: './images/cat2.jpg', title: '고양이2', isClass: false },
  { id: 4, imgurl: './images/cat3.jpg', title: '고양이3', isClass: false },
  { id: 5, imgurl: './images/cat4.jpg', title: '고양이4', isClass: false },
  { id: 6, imgurl: './images/cat5.jpg', title: '고양이5', isClass: false },
  { id: 7, imgurl: './images/cat6.jpg', title: '고양이6', isClass: false },
];

const Gallery = () => {
  const [data, setData] = useState(dataList);
  const [cat, setCat] = useState(data[0]); // dataList[0] 으로 써도 됨.

  const onShow = (id) => {
    // setCat(data[3]); // data index가 3인 이미지가 보여짐. 따라서 클릭했을 때 아이디를 넘겨주면
    // alert(id); // 클릭한 것에 아이디가 나옴
    // setCat(data[id - 1]);
    // mdn find
    // filter랑 비교하면 좋다.
    setCat(data.find((item) => item.id === id));
    // 클릭한 것에 isClass를 바꿔주자
    // setData(data.map((item) => (item.id === id ? {} : item)));
    // findIndex
    setData(
      // data.map((item) => (item.id === id ? { ...item, isClass: true } : item))
      // data.map((item) => (item.id === id ? { ...item, isClass: true } : { ...item, isClass: false }))
      data.map((item) => (item.id === id ? { ...item, isClass: true } : { ...item, isClass: false }))
    );
  };

  return (
    <StyledGallery>
      <GalleryBig cat={cat} />
      <GalleryList data={data} onShow={onShow} />
    </StyledGallery>
  );
};

export default Gallery;
