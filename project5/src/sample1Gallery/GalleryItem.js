import React from 'react';

const GalleryItem = ({ item }) => {
  const { id, imgurl, title } = item;
  return (
    <li>
      <img src={imgurl} alt={title} />
    </li>
  );
};

export default GalleryItem;
