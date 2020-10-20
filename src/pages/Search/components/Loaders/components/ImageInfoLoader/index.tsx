import React from 'react';
import ImageLoader from '../../ImageLoader';
import InfoLoader from '../../InfoLoader';
import './styles.scss';

const ImageInfoLoader = () => {
    return (
        <div className="container">
            <div className="row">
                <ImageLoader />
                <InfoLoader />
            </div>
        </div>
    );
}

export default ImageInfoLoader;