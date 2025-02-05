import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Crowdsource</h1>
         <h2> Let's Contribute</h2>
      </header>

      <div className="home-content">
        <p>Welcome to Crowdsource, a platform built on the power of collaboration!</p>
        <p>
          In a world that constantly evolves, the most impactful solutions emerge when diverse ideas
          come together. Here, you’re not just a contributor; you're part of a community of innovators, 
          creators, and change-makers working towards meaningful progress.
        </p>
        <p>
          Whether it's contributing knowledge, lending skills, or sharing unique perspectives, every 
          effort counts. Together, we can bridge gaps, solve problems, and bring bold ideas to life.
        </p>
        <p>
          Join hands with others who share a vision for a better future, and let's co-create projects 
          that drive real change. Welcome to the journey of collaborative growth!
        </p>
      </div>
    </div>
  );
};

export default Home;
