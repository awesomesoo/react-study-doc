import React from 'react';
import GalleryItem from './GalleryItem';
import './GalleryList.css';

const GalleryList = ({ data }) => {
  return (
    <ul className="GalleryList">
      {data.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default GalleryList;
