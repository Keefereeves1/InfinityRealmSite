// src/components/Games.tsx

import React from 'react';
import './Games.css'; // Import the corresponding CSS file
import { FaSteam, FaGofore } from 'react-icons/fa'; // Import platform icons

const Games: React.FC = () => {
  return (
    <div className="games-container">
      {/* Page Header */}
      <h1 className="staff-header">Games by InfinityRealm</h1>

      {/* Game 1 */}
      <div className="game-card">
        {/* Optional Images Section */}
        <div className="game-images">
          <img src={require('./assets/THERAVADAGAME.png')} alt="Game 1 Image 1" /> 
         {/* } <img src={require('../assets/game1-img2.jpg')} alt="Game 1 Image 2" /> */}
        </div>
        {/* Title */}
        <h2 className="game-title">Theravada</h2>
        {/* Description */}
        <p className="game-description">
        "Theravada is an ambitious open-world RPG currently in its early stages of development, centered around the intriguing concept of traversing the dreams and psyches of others. While the full vision is still taking shape, the core idea blends immersive 3D third-person exploration with nostalgic 8-bit 2D segments for side quests and dimension-hopping adventures. Players step into the role of the Theravada, a guardian awakened to restore balance after a dark entity disrupts the dreamscape, embarking on missions that mix combat, spellcasting, and heartfelt storytelling. This passion project aims to deliver high-quality, affordable gameplay over the next few years, as the creator navigates the learning curve of game development. Although many details are yet to be finalized, with Theravada I hope for a unique blend of modern and retro elements, offering a glimpse into a world where dreams shape reality and heroes emerge from the shadows of their own stories.
        </p>
        {/* Button */}
        <button className="game-button in-development">In Development</button>
      </div>
      

      {/* Template for Released Games */}
      {/*
      <div className="game-card">
          <div className="game-images">
            { 
            // <img src={require('../assets/your-game-img1.jpg')} alt="Your Game Image 1" />
}
          </div>
        
          <h2 className="game-title">Your Game Title Here</h2>
          <p className="game-description">
            Your detailed game description goes here. Highlight key features, gameplay mechanics, and unique aspects.
          </p>
          <button className="game-button released">
            <FaSteam className="platform-icon" /> Buy on Steam
          </button>
          <button className="game-button released">
            <FaGofore className="platform-icon" /> Buy on GOG.com
          </button>
        </div>
    
      */}
    </div>
  );
};

export default Games;
