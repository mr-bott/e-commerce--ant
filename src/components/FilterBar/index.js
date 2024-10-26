
import React, { useState } from 'react';
import './filterbar.css';

const FilterBar = () => {
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  return (
    <div className="listing-header">
      <div className="listing-options">
        <div>
        <div className="listing-tabs">
          <button className="tab">All Listings</button>
          <button className="tab">Auction</button>
          <button className="tab active">Buy It Now</button>
        </div>
        <div className="results-count">
          7,504,895 Results
        </div>
        </div>
      </div>

      <div className="filter-section">
        

        <div className="sort-section">
        <div className="sort-dropdown">
          <button 
            className="sort-button"
            onClick={() => setShowSortDropdown(!showSortDropdown)}
          >
            Best Match ▼
          </button>
          {showSortDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-item selected">Best Match</div>
              <div className="dropdown-item">Time: ending soonest</div>
              <div className="dropdown-item">Time: newly listed</div>
              <div className="dropdown-item">Price + Shipping: lowest first</div>
              <div className="dropdown-item">Price + Shipping: highest first</div>
              <div className="dropdown-item">Distance: nearest first</div>
            </div>
          )}
        </div>
       
      </div>
        
      </div>

      
    </div>
  );
};

export default FilterBar;