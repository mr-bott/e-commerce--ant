// AntiqueSellPage.jsx
import React, { useState } from 'react';
import './antiuesellpage.css';

const AntiqueSellPage = () => {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);

    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviewImages([...previewImages, ...newPreviews]);
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = previewImages.filter((_, i) => i !== index);
    setImages(newImages);
    setPreviewImages(newPreviews);
  };

  return (
    <div className="sell-page">
      <div className="sell-container">
        <h1>List Your Antique</h1>
        
        <form className="antique-form">
          <div className="form-section">
            <h2>Basic Information</h2>
            <div className="form-group">
              <label>Item Title</label>
              <input 
                type="text" 
                placeholder="e.g., 19th Century Victorian Mahogany Dresser"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select className="form-input">
                <option value="">Select Category</option>
                <option value="furniture">Furniture</option>
                <option value="jewelry">Jewelry</option>
                <option value="art">Fine Art</option>
                <option value="porcelain">Porcelain & Pottery</option>
                <option value="silver">Silver</option>
                <option value="clocks">Clocks & Watches</option>
                <option value="textiles">Textiles & Tapestries</option>
                <option value="books">Rare Books</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Price (USD)</label>
                <input 
                  type="number" 
                  placeholder="0.00"
                  className="form-input"
                />
              </div>
              <div className="form-group half">
                <label>Year/Period</label>
                <input 
                  type="text" 
                  placeholder="e.g., Circa 1850"
                  className="form-input"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Detailed Description</h2>
            <div className="form-group">
              <label>Item Description</label>
              <textarea 
                className="form-input"
                rows="6"
                placeholder="Describe your antique in detail including condition, history, provenance, and any notable features..."
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Condition</label>
                <select className="form-input">
                  <option value="">Select Condition</option>
                  <option value="mint">Mint - Perfect Condition</option>
                  <option value="excellent">Excellent - Minor Wear</option>
                  <option value="good">Good - Some Signs of Age</option>
                  <option value="fair">Fair - Visible Wear</option>
                  <option value="poor">Poor - Needs Restoration</option>
                </select>
              </div>
              <div className="form-group half">
                <label>Authentication Status</label>
                <select className="form-input">
                  <option value="">Select Status</option>
                  <option value="certified">Certified Authentic</option>
                  <option value="expert">Expert Verified</option>
                  <option value="pending">Pending Verification</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Images</h2>
            <div className="image-upload-container">
              <div className="image-upload">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="upload-label">
                  <span>+ Add Images</span>
                  <small>Upload up to 10 high-quality images</small>
                </label>
              </div>
              
              <div className="image-preview-grid">
                {previewImages.map((preview, index) => (
                  <div key={index} className="image-preview">
                    <img src={preview} alt={`Preview ${index + 1}`} />
                    <button 
                      type="button" 
                      className="remove-image"
                      onClick={() => removeImage(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Seller Information</h2>
            <div className="form-row">
              <div className="form-group half">
                <label>Name</label>
                <input 
                  type="text"
                  className="form-input"
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group half">
                <label>Phone</label>
                <input 
                  type="tel"
                  className="form-input"
                  placeholder="Your contact number"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Professional Credentials</label>
              <textarea 
                className="form-input"
                rows="3"
                placeholder="List any relevant certifications, years of experience, or professional memberships..."
              ></textarea>
            </div>
          </div>

          <div className="form-section">
            <h2>Shipping & Handling</h2>
            <div className="form-group">
              <label>Shipping Method</label>
              <select className="form-input">
                <option value="">Select Shipping Method</option>
                <option value="white-glove">White Glove Service</option>
                <option value="insured">Fully Insured Shipping</option>
                <option value="local">Local Pickup Only</option>
                <option value="custom">Custom Arrangement</option>
              </select>
            </div>

            <div className="form-group">
              <label>Special Handling Instructions</label>
              <textarea 
                className="form-input"
                rows="3"
                placeholder="Describe any special handling requirements or shipping restrictions..."
              ></textarea>
            </div>
          </div>

          <div className="button-group">
            <button type="submit" className="submit-button">List Item</button>
            <button type="button" className="save-draft">Save as Draft</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AntiqueSellPage;