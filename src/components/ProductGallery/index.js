import React, { useState } from 'react';
import './productgallery.css';

 const ProductGallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="gallery-container">
      <div className="thumbnail-list">
        {images.map((img, index) => (
          <div 
            key={index}
            className={`thumbnail ${currentImage === index ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
          >
            <img src={img} alt={`Product view ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="main-image">
        <button 
          className="nav-button prev" 
          onClick={() => setCurrentImage(prev => prev > 0 ? prev - 1 : images.length - 1)}
        >
          ‹
        </button>
        <img src={images[currentImage]} alt="Product main view" />
        <button 
          className="nav-button next"
          onClick={() => setCurrentImage(prev => prev < images.length - 1 ? prev + 1 : 0)}
        >
          ›
        </button>
      </div>
    </div>
  );
};
export default ProductGallery