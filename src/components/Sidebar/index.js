import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  const categories = [
    'Architectural & Garden',
    'Asian Antiques',
    'Ethnographic',
    'Furniture',
    'Incunabula',
    'Manuscripts',
    'Maps, Atlases & Globes',
    'Maritime'
  ];

  return (
    <div className="sidebar">
      <h2>Shop by Category</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <a href={`#${category.toLowerCase()}`}>{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;