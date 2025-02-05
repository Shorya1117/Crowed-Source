// src/Profile.js
import React, { useState, useEffect } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    dob: "",
    region: "",
    phone: "",
    email: "",
    bio: "",
    skills: "",
  });
  const [editMode, setEditMode] = useState({});
  const [completion, setCompletion] = useState(0);
  const [profileImage, setProfileImage] = useState(null);

  // Calculate profile completion percentage
  useEffect(() => {
    const totalFields = Object.keys(profile).length;
    const filledFields = Object.values(profile).filter((value) => value.trim() !== "").length;
    const newCompletion = Math.round((filledFields / totalFields) * 100);
    setCompletion(newCompletion);
  }, [profile]);

  const handleEdit = (field) => {
    setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e, field) => {
    setProfile((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignOut = () => {
    alert("You have signed out.");
  };

  return (
    <div className="profile-page">
      {/* Sidebar */}
      <aside className="profile-sidebar">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          id="profile-image-upload"
        />
        <label htmlFor="profile-image-upload">
          <img
            src={profileImage || "https://via.placeholder.com/100"}
            alt="Profile"
            className="profile-avatar"
            style={{ cursor: 'pointer' }}
          />
        </label>
        <h3>{profile.name || "Your Name"}</h3>
        <p>{profile.bio || "Add a short bio about yourself"}</p>
        <button className="sign-out-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="profile-main">
        <div className="progress-bar">
          <div className="progress" style={{ width: `${completion}%` }}></div>
          <span>{completion}% Completed</span>
        </div>

        <div className="profile-details">
          {Object.keys(profile).map((field) => (
            <div key={field} className="profile-item">
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              {editMode[field] ? (
                <input
                  type={field === "dob" ? "date" : "text"}
                  value={profile[field]}
                  onChange={(e) => handleChange(e, field)}
                  placeholder={`Enter your ${field}`}
                />
              ) : (
                <p>{profile[field] || `Add your ${field}`}</p>
              )}
              <FaPencilAlt
                className="edit-icon"
                onClick={() => handleEdit(field)}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Profile;
