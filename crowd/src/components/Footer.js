import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      fetch('http://localhost:4000/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        setEmail(''); // Clear the input after subscribing
      })
      .catch(error => {
        alert('Error subscribing. Please try again later.');
        console.error('Error:', error);
      });
    } else {
      alert('Please enter a valid email');
    }
  };

  return (
    <footer className="footer">
      <div className="subscribe-section">
        <h3>Subscribe to our Newsletter</h3>
        <div className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{width:'700px', borderRadius:'10px'}}
          />
          <button style={{borderRadius:'10px',color:'black'}} onClick={handleSubscribe}>Subscribe</button>
        </div>
      </div>

     

      {/* Social Media Icons */}
      <div className="social-media-icons">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
        <FaYoutube />
      </div>
    </footer>
  );
};

export default Footer;
