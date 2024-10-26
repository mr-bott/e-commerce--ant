import React from 'react';
import './productcard.css';
import {Link} from "react-router-dom"
const ProductCard = ({ product }) => {
  return (
    <Link to ="/product" className='Link_style' >
    <div className="product-card">
      {product.freeShipping && (
        <div className="free-shipping-badge">
          <span>FREE</span>
          <span>SHIPPING</span>
        </div>
      )}
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-price">
          ${product.price.min} to ${product.price.max}
        </div>
        <div className="product-shipping">
          {product.shipping === 0 
            ? 'Free shipping'
            : `$${product.shipping.toFixed(2)} shipping`
          }
        </div>
        {product.sponsored && (
          <div className="sponsored-tag">Sponsored</div>
        )}
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;