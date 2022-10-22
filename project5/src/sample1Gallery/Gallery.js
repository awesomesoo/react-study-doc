import React, { useState } from 'react';
import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';
import './Gallery.css';

const dataList = [
  { id: 1, imgurl: './images/cat0.jpg', title: '고양이0' },
  { id: 2, imgurl: './images/cat1.jpg', title: '고양이1' },
  { id: 3, imgurl: './images/cat2.jpg', title: '고양이2' },
  { id: 4, imgurl: './images/cat3.jpg', title: '고양이3' },
  { id: 5, imgurl: './images/cat4.jpg', title: '고양이4' },
  { id: 6, imgurl: './images/cat5.jpg', title: '고양이5' },
  { id: 7, imgurl: './images/cat6.jpg', title: '고양이6' },
];

const Gallery = () => {
  const [data, setData] = useState(dataList);
  const [cat, setCat] = useState(data[0]); // dataList[0] 으로 써도 됨.
  const onShow = () => {};
  return (
    <div className="Gallery">
      <GalleryBig cat={cat} />
      <GalleryList data={data} />
    </div>
  );
};

export default Gallery;
