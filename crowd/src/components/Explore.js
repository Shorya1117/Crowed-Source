import React, { useState } from 'react';
import './Explore.css';
import Modal from './Modal'; // Import the Modal component

// Example project data with email
const projectsData = [
    {
      name: 'AI for Healthcare',
      problemStatement: 'Developing AI tools to help diagnose diseases.',
      price: '$50,000',
      language: 'Python, TensorFlow',
      dateOfCompletion: '2024-12-31',
      numberOfMembers: 5,
      advantages: 'Improved diagnostic speed, high accuracy.',
    },
    {
      name: 'Smart Traffic Management',
      problemStatement: 'Using IoT to optimize traffic flow in cities.',
      price: '$30,000',
      language: 'JavaScript, Node.js',
      dateOfCompletion: '2025-06-15',
      numberOfMembers: 3,
      advantages: 'Reduced traffic congestion, lower emissions.',
    },
    {
      name: 'Blockchain for Voting',
      problemStatement: 'Decentralized voting platform using blockchain technology.',
      price: '$25,000',
      language: 'Solidity, JavaScript',
      dateOfCompletion: '2025-01-01',
      numberOfMembers: 4,
      advantages: 'Increased transparency, security.',
    },
    {
      name: 'AI-Powered Farming',
      problemStatement: 'Using AI to optimize crop yields and reduce waste.',
      price: '$40,000',
      language: 'Python, TensorFlow, OpenCV',
      dateOfCompletion: '2025-05-20',
      numberOfMembers: 6,
      advantages: 'Improved crop yields, reduced waste.',
    },
    {
      name: 'Virtual Reality Education',
      problemStatement: 'Using VR technology to create immersive learning experiences.',
      price: '$60,000',
      language: 'Unity, C#',
      dateOfCompletion: '2024-11-10',
      numberOfMembers: 7,
      advantages: 'Engaging learning experience, better retention.',
      
    },
    {
      name: 'Robotics for Manufacturing',
      problemStatement: 'Developing robots to automate manufacturing processes.',
      price: '$70,000',
      language: 'C++, ROS',
      dateOfCompletion: '2025-03-30',
      numberOfMembers: 5,
      advantages: 'Increased efficiency, reduced labor costs.',
     
    },
    // Add more projects if necessary
  ];
const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state
  const [selectedProject, setSelectedProject] = useState(null); // Selected project state
  const itemsPerPage = 4;

  // Handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on search
  };

  // Filter projects based on search query
  const filteredProjects = projectsData.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.problemStatement.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get the current page's projects
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Open modal and set the selected project
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle form submission (just log the form data for now)
  const handleFormSubmit = (formData) => {
    console.log('Form Data:', formData);
    // Here you can send the data to a server, etc.
  };

  return (
    <div className="explore">
      {/* Search Engine */}
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search projects..."
          className="search-input"
        />
      </div>

      {/* Projects List */}
      <div className="projects-list">
        {currentProjects.length === 0 ? (
          <p>No projects found!</p>
        ) : (
          currentProjects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => openModal(project)} // Open modal on click
            >
              <h3>{project.name}</h3>
              <p><strong>Problem Statement:</strong> {project.problemStatement}</p>
              <p><strong>Price:</strong> {project.price}</p>
              <p><strong>Programming Language:</strong> {project.language}</p>
              <p><strong>Date of Completion:</strong> {project.dateOfCompletion}</p>
              <p><strong>Number of Members:</strong> {project.numberOfMembers}</p>
              <p><strong>Advantages:</strong> {project.advantages}</p>
            
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        onSubmit={handleFormSubmit}
        project={selectedProject}
      />
    </div>
  );
};

export default Explore;
