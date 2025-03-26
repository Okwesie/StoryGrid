import React from "react";
import { Link } from "react-router-dom";
import "./profile.css"; 
 // Make sure to create and style this CSS file

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Header with Navigation */}
      <header className="profile-header">
        <h1 className="logo">StoryGrid</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/post">Post</Link>
          <Link to="/notifications">Notifications</Link>
          <Link to="/profile" className="active">Profile</Link>
        </nav>
      </header>

      {/* Profile Info */}
      <div className="profile-box">
        <div className="profile-header-section">
          <img className="profile-pic" src="/images/profile.jpg" alt="Profile" />
          <div className="profile-info">
            <h2>Anna Kodji</h2>
            <p>@annakodji</p>
            <p>Software Developer | React Enthusiast</p>
            <div className="stats">
              <span><strong>150</strong> Posts</span>
              <span><strong>1.2K</strong> Followers</span>
              <span><strong>500</strong> Following</span>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <div className="posts-section">
        <div className="post">
          <img src="/images/strawberries.jpg" alt="Post" />
          <p>This is my first post on StoryGrid! ✨</p>
        </div>
        <div className="post">
          <img src="/images/travel.jpg" alt="Post" />
          <p>Exploring the world one photo at a time 📷</p>
        </div>
        <div className="post">
          <img src="/images/nature.jpg" alt="Post" />
          <p>Throwback to this amazing trip ✈️</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
