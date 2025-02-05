// src/Collaboration.js

import React, { useState } from 'react';
import './Collaboration.css';

const Collaboration = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [requests, setRequests] = useState([
    {
      id: 1,
      title: 'Data Analyst Needed',
      description: 'Looking for a data analyst for my research project on climate change. Please apply if you have relevant experience!',
      status: 'Pending'
    },
    {
      id: 2,
      title: 'Graphic Designer Needed',
      description: 'Seeking a graphic designer to create visuals for our upcoming project presentation.',
      status: 'Accepted'
    },
    {
      id: 3,
      title: 'Web Developer Collaboration',
      description: 'Looking for a web developer to join our team for a new app development.',
      status: 'Rejected'
    }
  ]);

  const handlePostRequest = () => {
    const newRequest = {
      id: requests.length + 1,
      title,
      description,
      status: 'Pending'
    };
    setRequests([...requests, newRequest]);
    setTitle('');
    setDescription('');
    setSkills('');
    alert('Collaboration request posted!');
  };

  return (
    <div className="collaboration-container">
      <h2>Collaboration Requests Marketplace</h2>

      {/* Post a Collaboration Request Form */}
      <div className="post-request">
        <h3>Post a Collaboration Request</h3>
        <label>Request Title:</label>
        <input
          type="text"
          placeholder="Enter request title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          placeholder="Describe your collaboration needs..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Skills Needed:</label>
        <input
          type="text"
          placeholder="e.g., Data Analyst, Designer"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <button onClick={handlePostRequest}>Post Request</button>
      </div>

      {/* Incoming Collaboration Requests */}
      <div className="incoming-requests">
        <h3>Incoming Collaboration Requests</h3>
        {requests.map((request) => (
          <div key={request.id} className="request-card">
            <h4>{request.title}</h4>
            <p>{request.description}</p>
            <p><strong>Status:</strong> {request.status}</p>
            <button>
              {request.status === 'Pending' ? 'Apply' : request.status === 'Accepted' ? 'Contact' : 'Apply'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collaboration;
