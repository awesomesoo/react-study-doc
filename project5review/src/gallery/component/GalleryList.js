import React from 'react';
import styled from 'styled-components';
import GalleryItem from './GalleryItem';

const StyledGalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
    width: 100px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 5px;
    background: #dcdcdc;
  }
  li.on {
    background: red;
  }
  li img {
    width: 100px;
    vertical-align: top;
  }
`;

const GalleryList = ({ data, onShow }) => {
  return (
    <StyledGalleryList>
      {data.map((item) => (
        <GalleryItem key={item.id} item={item} onShow={onShow} />
      ))}
    </StyledGalleryList>
  );
};

export default GalleryList;
