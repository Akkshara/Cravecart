import React ,{useState}from "react";
import NavTry from "../components/NavTry";
import LoginModal from "../screens/LoginModal";

import "./HeroSection.css";

const HeroSection = ({ searchQuery, handleChange }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const closeModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div className="hero-section">
      <NavTry onLoginClick={handleLoginClick} />
      {showLoginModal && <LoginModal closeModal={closeModal} />}
      <div className="hero-content">
        <h1>CraveCart</h1>
        <input type="text" placeholder="Search for food..." className="search-bar" value={searchQuery}
                onChange={handleChange}/>
      </div>
    </div>
  );
};

export default HeroSection;
