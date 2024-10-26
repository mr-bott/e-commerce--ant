import React from 'react';
import './categorygird.css';
import {Link}from "react-router-dom"

const CategoryGrid = () => {
  const categories = [
    {
      title: 'Antique Furniture',
      image: '/furniture.jpg'
    },
    {
      title: 'Antique Rugs & Carpets',
      image: '/rugs.jpg'
    },
    {
      title: 'Asian Antiques',
      image: '/asian.jpg'
    },
    {
      title: 'Silver Antiques',
      image: '/silver.jpg'
    },
    {
      title: 'Decorative Collectibles',
      image: '/decorative.jpg'
    },
    {
      title: 'Antique Furniture',
      image: '/furniture.jpg'
    },
    {
      title: 'Antique Rugs & Carpets',
      image: '/rugs.jpg'
    },
    {
      title: 'Asian Antiques',
      image: '/asian.jpg'
    },
    {
      title: 'Silver Antiques',
      image: '/silver.jpg'
    },
    {
      title: 'Decorative Collectibles',
      image: '/decorative.jpg'
    }
  ];

  return (
    <div className="category-section" id="shopbycategory">
      <h2>Shop by Category</h2>
      <Link to="/category" className='Link_style'>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.title} />
            <h3>{category.title}</h3>
          </div>
        ))}
      </div>
      </Link>
    </div>
  );
};

export default CategoryGrid;