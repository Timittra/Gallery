import React from 'react';
import Carousel from '../Carousel/Carousel';
import GalleryMain from '../GalleryMain/GalleryMain';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className="container" style={{marginTop:'-100px', background:"white"}}>
            <h1>Top Category</h1>
             <Carousel/>
             <GalleryMain/>
        </div>
    );
};

export default Gallery;