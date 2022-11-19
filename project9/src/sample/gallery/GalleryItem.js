import React from 'react';
import { GalleryItemBox } from '../styled/galleryStyle';
 
const GalleryItem = ({item}) => {
    const { likes ,views,downloads,  user, tags, webformatURL } = item 
    const tagList  = tags.split(',')
    return (
        <GalleryItemBox>
            <img src={webformatURL} alt="" />
            <h3> {user} </h3>
            <ul>
                <li>조회수 : { views } </li>
                <li>다운로드 : { downloads } </li>
                <li>좋아요 : {likes } </li>
            </ul>
            <p>
               { tagList.map( tag => 
               <span key={ tag }>#{tag.trim()}</span>)}
            </p>
        </GalleryItemBox>
    );
};

export default GalleryItem;