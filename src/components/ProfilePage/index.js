// ProfilePage.jsx
import React, { useState } from 'react';
import './profilepage.css';

const ProfilePage = () => {
  // Mock user data - in a real app this would come from an API/props
  const user = {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    joined: "January 2024",
    avatar: "/api/placeholder/150/150",
    orderCount: 12,
    wishlistCount: 5,
    address: "123 Main St, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    membershipLevel: "Gold",
    recentOrders: [
      { id: "ORD-123", date: "2024-03-15", status: "Delivered", amount: 129.99 },
      { id: "ORD-124", date: "2024-03-01", status: "Processing", amount: 79.50 },
    ]
  };

  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="profile-container">
      {/* Left Sidebar */}
      <div className="profile-sidebar">
        <div className="user-info">
          <img src={user.avatar} alt={user.name} className="user-avatar" />
          <h2 className="user-name">{user.name}</h2>
          <span className="membership-badge">{user.membershipLevel} Member</span>
          <p className="joined-date">Member since {user.joined}</p>
        </div>
        
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button 
            className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
          <button 
            className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {activeTab === 'profile' && (
          <div className="profile-details">
            <h1>Personal Information</h1>
            <div className="info-grid">
              <div className="info-item">
                <label>Full Name</label>
                <p>{user.name}</p>
              </div>
              <div className="info-item">
                <label>Email</label>
                <p>{user.email}</p>
              </div>
              <div className="info-item">
                <label>Phone</label>
                <p>{user.phone}</p>
              </div>
              <div className="info-item">
                <label>Address</label>
                <p>{user.address}</p>
              </div>
            </div>

            <div className="stats-container">
              <div className="stat-item">
                <h3>Orders</h3>
                <p>{user.orderCount}</p>
              </div>
              <div className="stat-item">
                <h3>Wishlist</h3>
                <p>{user.wishlistCount}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="orders-section">
            <h1>Recent Orders</h1>
            <div className="orders-list">
              {user.recentOrders.map(order => (
                <div key={order.id} className="order-item">
                  <div className="order-header">
                    <h3>Order #{order.id}</h3>
                    <span className={`order-status ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="order-details">
                    <p>Date: {order.date}</p>
                    <p>Amount: ${order.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="settings-section">
            <h1>Account Settings</h1>
            <div className="settings-form">
              <div className="form-group">
                <label>Email Notifications</label>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="form-group">
                <label>Newsletter Subscription</label>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="form-group">
                <label>Two-Factor Authentication</label>
                <input type="checkbox" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;