import React from 'react';
import Masonry from 'react-masonry-css'
import { GalleryListBox } from '../styled/galleryStyle';
import GalleryItem from './GalleryItem';


const GalleryList = ({ data }) => {
    return (
        <GalleryListBox>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {/* array of JSX items */}
                {
                    data.map( item => <GalleryItem key={ item.id} item={item} />)
                }
            </Masonry>
        </GalleryListBox>
    );
};

export default GalleryList;