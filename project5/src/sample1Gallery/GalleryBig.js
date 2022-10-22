import React from 'react';
import styled from 'styled-components';

const StyledGalleryBig = styled.div`
  width: 600px;
  height: 400px;
  position: relative;
  margin-bottom: 20px;

  h2 {
    position: absolute;
    left: 30px;
    top: 30px;
    font-size: 30px;
    color: #fff;
  }
`;

const GalleryBig = ({ cat }) => {
  const { id, imgurl, title } = cat;
  return (
    <StyledGalleryBig>
      <img src={imgurl} alt={title} />
      <h2>{title}</h2>
    </StyledGalleryBig>
  );
};

export default GalleryBig;
