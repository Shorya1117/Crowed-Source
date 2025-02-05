import React from 'react';
import './Navbar.css'; // Add your basic styles here
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import logo from './image/gathering.png'; // Your logo path

const Navbar = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" /> {/* Update with your logo path */}
      </div>

      {/* Buttons Section */}
      <div className="navbar-buttons">
        <button onClick={() => handleNavigation('/home')}>Home</button>
        <button onClick={() => handleNavigation('/document')}>Cross-Disciplinary Zones</button>
        <button onClick={() => handleNavigation('/explore')}>Explore Project</button>
        <button onClick={() => handleNavigation('/idea')}>Project Idea</button>
        <button onClick={() => handleNavigation('/faq')}>FAQ</button>
        <button onClick={() => handleNavigation('/contact')}>Contact</button>
        <button onClick={() => handleNavigation('/profile')}>Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
