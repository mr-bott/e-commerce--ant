import React from 'react';
import './header.css';
import {Link}from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className='Link_style'>
      <div className="logo">
        <img src="/ebay-logo.png" alt="eBay" />
      </div>
      </Link>
      <div className="search-bar">
        <div className="category-dropdown">
          <a href="#shopbycategory"className='Link_style'> <span>Shop by category</span> </a>
        </div>
        <div className="search-input">
          <input type="text" placeholder="Search for anything" />
          {/* <select>
            <option>All Categories</option>
          </select> */}
        </div>
        <button className="search-button">Search</button>
      </div>
      <div className="header-actions">
      <Link to="/my_orders" className='Link_style'>  <span>MyOrders</span></Link> 
        <Link to="/seller" className='Link_style'>  <span>Sell</span></Link> 
       <Link to="/cart" className='Link_style'> <span className="cart-icon">🛒</span> </Link> 
       <Link to="/my_account" className='Link_style'> <span>MyAccount</span> </Link> 
      </div>
    </header>
  );
};

export default Header;