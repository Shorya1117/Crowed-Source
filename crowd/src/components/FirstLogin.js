import React, { useState } from 'react';
import './FirstLogin.css';

const FirstLogin = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Array of sample credentials
  const sampleCredentials = [
    { email: 'gursneh123@gmail.com', password: 'gursneh123' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' },
    // Add more credentials here as needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if entered credentials match any sample credentials
    const isValidUser = sampleCredentials.some(
      (cred) => cred.email === formData.email && cred.password === formData.password
    );

    if (isValidUser) {
      setSubmitted(true);
      onLogin(); // Call onLogin to close modal and show main page
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="first-login-overlay">
      <div className="first-login-container">
        <h2>Welcome! Please Log In</h2>
        {submitted ? (
          <p className="success-message">Login successful!</p>
        ) : (
          <form onSubmit={handleSubmit} className="first-login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="login-btn">Login</button>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default FirstLogin;
