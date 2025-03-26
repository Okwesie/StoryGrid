import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import ReactFullpage from "@fullpage/react-fullpage";
import "./landing.css";

const slides = [
  {
    title: "Welcome to StoryGrid",
    description: "Your new social media platform for sharing stories, connecting, and exploring.",
    image: "/images/IMG_20230620_105519_994.jpg",
    color: "#071E22"
  },
  {
    title: "Connect with Friends",
    description: "Meet new people, share experiences, and stay connected.",
    image: "/images/connect.jpg",
    color: "#00ACC1"
  },
  {
    title: "Explore New Content",
    description: "Discover trending posts, stories, and creators from around the world.",
    image: "/images/explore.jpg",
    color: "#FFC107"
  },
  {
    title: "Share Your Stories",
    description: "Post your moments and engage with a vibrant community.",
    image: "/images/share.jpg",
    color: "#071E22"
  },
];

const LandingPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.fullpage_api) {
        window.fullpage_api.moveSlideRight();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (origin, destination) => {
    if (destination) {
      setActiveSlide(destination.index);
    }
  };

  return (
    <ReactFullpage
      navigation
      scrollingSpeed={1000}
      controlArrows={false}
      slidesNavigation={true}
      slidesNavPosition="bottom"
      onSlideLeave={(section, origin, destination) => handleSlideChange(origin, destination)}
      afterSlideLoad={(section, origin, destination) => handleSlideChange(origin, destination)}
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section">
            {slides.map((slide, index) => (
              <div className="slide" key={index} data-slide-color={slide.color}>
                <div className="content-container">
                  <div className="text-section">
                    <div className="text-content">
                      <h1>{slide.title}</h1>
                      <p>{slide.description}</p>
                      <div className="cta-buttons">
                        <button className="primary-btn" onClick={() => navigate("/auth")}>
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="image-section">
                    <div className="image-wrapper">
                      <img src={slide.image} alt={slide.title} />
                    </div>
                  </div>
                </div>

                <div className="slide-number">
                  <span>{index + 1}</span>
                  <span className="total">/ {slides.length}</span>
                </div>
              </div>
            ))}
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default LandingPage;
