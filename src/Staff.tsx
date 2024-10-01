// src/components/Staff.tsx

import React from 'react';
import './Staff.css'; // Import the corresponding CSS file
import { FaEnvelope, FaSteam, FaGofore } from 'react-icons/fa'; // Import icons
import { FaInfinity } from 'react-icons/fa'; // Infinity icon
const Staff: React.FC = () => {
  return (
    <div className="staff-container">
     
      {/* Page Header */}
      <h1 className="staff-header">The Team</h1>
      

      {/* Staff Member 1 */}
      <div className="staff-card">
        {/* Profile Picture */}
        <div className="staff-image">
          <img src={require('./assets/keefesprofilepic.jpg')} alt="Keefe Reeves" loading="lazy" />
        </div>

        {/* Name */}
        <h2 className="staff-name">Keefe Reeves</h2>

        {/* Description */}
        <p className="staff-description">
          Hi! I'm Keefe Reeves, Founder of Infinity Realm Game Studios, I'm from Halifax Nova-Scotia, a small province in Canada, I'm new to game development and currently working on my first game as a passion project.
          I've always wanted to create a game since i began programming, and it's exciting to bring my vision to life. Besides game development, I own a
          cyber security start-up called <a href="https://www.data-ject.com" target="_blank" rel="noopener noreferrer">Data-Ject Solutions</a>.
          My interests include Deep Learning, Back-end Programming, Cyber-Security, Physics, Video Games, Dogs, Cats, and Web-Development.
        </p>

        {/* Social Links */}
        <div className="staff-links">
          <a href="mailto:reeveskeefe@example.com" className="staff-link" aria-label="Email Keefe Reeves">
            <FaEnvelope /> reeveskeefe@gmail.com
          </a>
        </div>
      </div>

      <li className="infinity-realm2">
           Infinity <FaInfinity size={20} /> Realm
          </li>

      {/* Template for New Staff Members */}
      {/*
        <div className="staff-card">
          <div className="staff-image">
            <img src={require('../assets/your-profile.jpg')} alt="Your Name" loading="lazy" />
          </div>
          <h2 className="staff-name">Your Name Here</h2>
          <p className="staff-description">
            Your detailed description goes here. Include your background, role, interests, and any relevant links.
          </p>
          <div className="staff-links">
            <a href="mailto:your-email@example.com" className="staff-link" aria-label="Email Your Name">
              <FaEnvelope /> your-email@example.com
            </a>
           
          </div>
        </div>
      */}
    </div>
  );
};

export default Staff;
