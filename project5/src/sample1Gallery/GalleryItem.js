import React from 'react';

const GalleryItem = ({ item, onShow }) => {
  const { id, imgurl, title } = item;
  return (
    <li onClick={onShow}>
      <img src={imgurl} alt={title} />
    </li>
  );
};

export default GalleryItem;
