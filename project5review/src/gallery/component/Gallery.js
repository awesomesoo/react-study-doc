import React from 'react';
import styled from 'styled-components';
import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';

const StyledGallery = styled.div`
  width: 600px;
  margin: 30px auto;
`;

const Gallery = () => {
  return (
    <div>
      <StyledGallery>
        <GalleryBig />
        <GalleryList />
      </StyledGallery>
    </div>
  );
};

export default Gallery;

/* 


*/