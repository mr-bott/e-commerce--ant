import React from 'react';
import ProductCard from '../ProductCard';
import FilterBar from "../FilterBar"
import './productgrid.css';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: "NEW McDonalds Trump Shirt Trump 2024 Funny Trump PA Drive Thru Trump Vance 2024",
      price: { min: 21.99, max: 33.99 },
      shipping: 4.99,
      sponsored: true,
      freeShipping: true,
      image: "/trump-shirt-1.jpg"
    },
    {
      id: 2,
      title: "NEW Funny Trump McDonalds Shirt MAGA DONALDS Trump 2024 Shirt Trump PA Funny",
      price: { min: 21.99, max: 33.99 },
      shipping: 4.99,
      sponsored: true,
      freeShipping: true,
      image: "/trump-shirt-2.jpg"
    },
    {
      id: 3,
      title: "Mens Buttons Down Shirt Long Sleeve Western Cowboy Retro Printed Casual Shirts",
      price: { min: 4.49, max: 14.85 },
      shipping: 0,
      sponsored: true,
      freeShipping: true,
      image: "/western-shirt.jpg"
    },
    {
      id: 4,
      title: "Dodgers Shooting Ball Logo T-Shirt Los Angeles Baseball LA GLD06",
      price: { min: 10.90, max: 14.65 },
      shipping: 22.95,
      sponsored: true,
      image: "/dodgers-shirt.jpg"
    },
    {
      id: 1,
      title: "NEW McDonalds Trump Shirt Trump 2024 Funny Trump PA Drive Thru Trump Vance 2024",
      price: { min: 21.99, max: 33.99 },
      shipping: 4.99,
      sponsored: true,
      freeShipping: true,
      image: "/trump-shirt-1.jpg"
    },
    {
      id: 2,
      title: "NEW Funny Trump McDonalds Shirt MAGA DONALDS Trump 2024 Shirt Trump PA Funny",
      price: { min: 21.99, max: 33.99 },
      shipping: 4.99,
      sponsored: true,
      freeShipping: true,
      image: "/trump-shirt-2.jpg"
    },
    {
      id: 3,
      title: "Mens Buttons Down Shirt Long Sleeve Western Cowboy Retro Printed Casual Shirts",
      price: { min: 4.49, max: 14.85 },
      shipping: 0,
      sponsored: true,
      freeShipping: true,
      image: "/western-shirt.jpg"
    },
    {
      id: 4,
      title: "Dodgers Shooting Ball Logo T-Shirt Los Angeles Baseball LA GLD06",
      price: { min: 10.90, max: 14.65 },
      shipping: 22.95,
      sponsored: true,
      image: "/dodgers-shirt.jpg"
    }
  ];

  return (
    <>
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};

export default ProductGrid;