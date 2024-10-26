// Footer.jsx
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Buy</h3>
          <ul>
            <li><a href="#">Registration</a></li>
            <li><a href="#">eBay Money Back Guarantee</a></li>
            <li><a href="#">Bidding & buying help</a></li>
            <li><a href="#">Stores</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Sell</h3>
          <ul>
            <li><a href="#">Start selling</a></li>
            <li><a href="#">Learn to sell</a></li>
            <li><a href="#">Affiliates</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Stay connected</h3>
          <ul>
            <li><a href="#">eBay's Blogs</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About eBay</h3>
          <ul>
            <li><a href="#">Company info</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Government relations</a></li>
            <li><a href="#">Advertise with us</a></li>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Verified Rights Owner (VeRO) Program</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Help & Contact</h3>
          <ul>
            <li><a href="#">Seller Information Center</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        {/* <div className="footer-section">
          <h3>Community</h3>
          <ul>
            <li><a href="#">Announcements</a></li>
            <li><a href="#">Discussion boards</a></li>
            <li><a href="#">eBay Giving Works</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Tools & apps</h3>
          <ul>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Security center</a></li>
            <li><a href="#">Site map</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>eBay Sites</h3>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;