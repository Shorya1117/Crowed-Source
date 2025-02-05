import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, closeModal, onSubmit, project }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, resume, skills, experience };
    onSubmit(formData);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>×</button>
        <h2>Send a Request</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email ID</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Resume</label>
            <input
              type="file"
              onChange={(e) => setResume(e.target.files[0])}
              accept=".pdf,.docx,.jpg,.png"
              required
            />
          </div>
          <div className="form-group">
            <label>Skills</label>
            <textarea
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Experience</label>
            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send Request</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
