import React, { useState } from "react";
import "./auth.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="lock-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        <h2>{isSignup ? "Create an account" : "Welcome back"}</h2>
        
        <form>
          {isSignup && (
            <div className="input-group">
              <label htmlFor="name">Full Name</label>
              <input id="name" type="text" placeholder="Enter your name" />
            </div>
          )}
          
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="Enter your email" />
          </div>
          
          {isSignup && (
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" placeholder="Choose a username" />
            </div>
          )}
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter your password" />
          </div>
          
          <button type="submit">{isSignup ? "Create Account" : "Log In"}</button>
        </form>

        <p className="toggle-text">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Log in" : "Sign up"}
          </span>
        </p>

        <button className="google-btn">
        <FontAwesomeIcon icon={faGoogle} className="google-icon" />
        Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Auth;
