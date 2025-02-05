import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Collaboration from './components/Collaboration';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Explore from './components/Explore';
import Modal from './components/Modal';
import Profile from './components/Profile';
import ProjectIdea from './components/ProjectIdea';
import Ps from './components/Ps';
import Home from './components/Home';
import FirstLogin from './components/FirstLogin';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  // Fetch user data from the backend API
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form Data:', formData);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Router>
        {!isLoggedIn ? (
          <FirstLogin onLogin={handleLogin} /> // Show FirstLogin if not logged in
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/collab" element={<Collaboration />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/document" element={<Ps />} />
              <Route path="/idea" element={<ProjectIdea />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/explore" element={<Explore openModal={openModal} />} />
              
              {/* User List Route */}
              <Route
                path="/users"
                element={
                  <div>
                    <h1>User List</h1>
                    <ul>
                      {users.length > 0 ? (
                        users.map(user => (
                          <li key={user.id}>{user.name} - {user.email}</li>
                        ))
                      ) : (
                        <p>No users found.</p>
                      )}
                    </ul>
                  </div>
                }
              />
            </Routes>
            <Footer />
          </>
        )}
      </Router>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          onSubmit={handleFormSubmit}
          project={selectedProject}
        />
      )}
    </div>
  );
}

export default App;
