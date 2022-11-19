import React, { useState } from 'react';
import { GallerySearchBox } from '../styled/galleryStyle';



const GallerySearch = ({ onSearch }) => {
    const [ text, setText ] = useState('')
    const onSubmit  = (e) => {
        e.preventDefault() 
        if( !text ) return 
        onSearch( text )
    }    
    return (
        <GallerySearchBox onSubmit={onSubmit}>
            <input type="text" value={text} onChange={ e => setText( e.target.value )} />
            <button type="submit">검색</button>
        </GallerySearchBox>
    );
};

export default GallerySearch;