import "./productheader.css"
const ProductHeader = ({ title, seller, stats }) => {
    return (
      <div className="product-header">
        <div className="sales-badge">
          {stats.recentSales} SOLD IN LAST 24 HOURS
        </div>
        <div className="header-actions">
          <button className="share-button">↗</button>
          <button className="like-button">♡ {stats.likes}</button>
        </div>
        <h1 className="product-title">{title}</h1>
        <div className="seller-info">
          <img src={seller.avatar} alt="" className="seller-avatar" />
          <a href={seller.storeUrl} className="seller-name">{seller.name}</a>
          <span className="seller-rating">{seller.rating}% positive</span>
          <div className="seller-links">
            <a href={seller.itemsUrl}>Seller's other items</a>
            <a href={seller.contactUrl}>Contact seller</a>
          </div>
        </div>
      </div>
    );
  };
  export default ProductHeader
  