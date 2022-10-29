import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';
import dataList from '../../api/catData';

const StyledGallery = styled.div`
  width: 600px;
  margin: 30px auto;
`;

const Gallery = () => {
  const [data, setData] = useState(dataList);
  const [cat, setCat] = useState(data[0]);

  const onShow = (id) => {
    setCat(data.find((item) => (item.id = id)));
    setData(
      data.map((item) =>
        item.id === id
          ? { ...item, isClass: true }
          : { ...item, isClass: false },
      ),
    );
  };

  return (
    <div>
      <StyledGallery>
        <GalleryBig cat={cat} />
        <GalleryList data={data} onShow={onShow} />
      </StyledGallery>
    </div>
  );
};

export default Gallery;

/* 
갤러리를 만들 컴포넌트 준비
Gallery : 큰 틀
GalleryBig : 이미지 크게 보기
GalleryList : 이미지 리스트
GalleryItem : 이미지 리스트 아이템

useState 사용하여 api 가져오기.
GalleryList 에 data 보내주기.
GalleryList 에서 data 파라미터로 가져오기.
ul안에 li를 .map( item => () key={} )으로 불러오기.

GalleryItem 내용 넣기
item 가져오기.
GalleryItem을 클릭 했을 때 클릭한 데이터의 isClass가 true 이면 on 아니면 클래스 없음<div className=""></div>

Gallery 에 onShow 함수 작성.
GalleryList 에 onShow 가져오기
GalleryList 에서 onShow 불러오기
*/
