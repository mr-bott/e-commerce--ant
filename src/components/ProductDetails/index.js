import "./productdetails.css"
const ProductDetails = ({ price, condition, size, quantity }) => {
    return (
      <div className="product-details">
        <div className="price">US ${price}</div>
        <div className="condition">
          Condition: <span>{condition}</span>
        </div>
        <div className="size-selector">
          <select defaultValue={size}>
            <option value={size}>{size}</option>
          </select>
        </div>
        <div className="quantity-selector">
          <label>Quantity:</label>
          <input type="number" defaultValue={quantity} min="1" />
          <span className="stock-info">
            More than {quantity} available · {quantity} sold
          </span>
        </div>
        <div className="action-buttons">
          <button className="buy-now">Buy It Now</button>
          <button className="add-cart">Add to cart</button>
          <button className="add-watchlist">Add to watchlist</button>
        </div>
      </div>
    );
  };

  export default ProductDetails