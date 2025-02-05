import React, { useState } from 'react';
import './ProjectIdea.css';

const ProjectIdea = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    problemStatement: '',
    price: '',
    language: '',
    dateOfSubmission: '',
    advantages: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/project-ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Error:', result.error);
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <div className="project-idea-container">
      <h2>Submit Your Project Idea</h2>
      {submitted ? (
        <p className="success-message">Project idea submitted successfully!</p>
      ) : (
        <form className="project-idea-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Project Name</label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Problem Statement</label>
            <textarea
              name="problemStatement"
              value={formData.problemStatement}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Programming Language Required</label>
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Submission</label>
            <input
              type="date"
              name="dateOfSubmission"
              value={formData.dateOfSubmission}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Advantages</label>
            <textarea
              name="advantages"
              value={formData.advantages}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit Project Idea</button>
        </form>
      )}
    </div>
  );
};

export default ProjectIdea;
