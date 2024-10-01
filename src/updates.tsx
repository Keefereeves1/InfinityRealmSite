// src/components/Updates.tsx

import React from 'react';
import './Updates.css'; // Import the corresponding CSS file
import Slider from 'react-slick'; // Import Slider from react-slick
import 'slick-carousel/slick/slick.css'; // Import slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme CSS
import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const Updates: React.FC = () => {
  const width = useWindowWidth();

  return (
    
    <div className="updates-container">
       <h1 className="updates-header">Updates and Blog</h1>
      {/* Update 1 */}
      <div className="update-card">
        <h1 className="update-title">UPDATE #1</h1>
        {/* Optional Images Section */}
        {width < 768 ? (
          <Slider {...carouselSettings} className="update-carousel">
            <div>
              <img src={require('./assets/DreamOne.png')} alt="Update 1 Image 1" />
            </div>
            <div>
              <img src={require('./assets/Dream2.png')} alt="Update 1 Image 2" />
            </div>
            <div>
              <img src={require('./assets/Dream3.jpeg')} alt="Update 1 Image 3" />
            </div>
            <div>
              <img src={require('./assets/THERAVADA.png')} alt="Update 1 Image 4" />
            </div>
          </Slider>
        ) : (
          <div className="update-images">
            <img src={require('./assets/DreamOne.png')} alt="Update 1 Image 1" />
            <img src={require('./assets/Dream2.png')} alt="Update 1 Image 2" />
            <img src={require('./assets/Dream3.jpeg')} alt="Update 1 Image 3" />
            <img src={require('./assets/THERAVADA.png')} alt="Update 1 Image 4" />
          </div>
        )}
        {/* Title */}
        <h1 className="update-title">Just Started Developing <br /> Theravada</h1>
        {/* Content */}
        <p className="update-content">
          This is probably one of my most fun and anticipated ideas that im finally bringing to life, I'm hoping to make it 3D, and it should take a couple of years to develop, as I want it to be high-quality and affordable. I'm planning on making it open-world and an RPG, and it switches from 3d third person RPG, to 8-bit 2D game aspects during times like side-quests or entering other dimensions of the world. This game is a passion project, and I'm hoping to learn a lot about game development along the way. I have never developed a game before, and this site and my game progress are going to be quiet. I won't tell anyone online about it until I have made enough progress to know I can easily finish it. While I'm learning the ins and outs of game development, I'm not going to tell people about it because I don't want to build any hype (if it manages to build hype :P) and disappoint people with a game that is never going to come out.
          <br />
          <br />
          But if you found the site! then you are the first in the know about the game development. This game is called The Theravada. It's an open-world RPG where you can travel into people's minds and go on missions. Some of it will be open-world, and some of it will be 2D, such as platform aspects, but mainly in 3D as you explore, combat, cast spells, follow storylines and side quests, and traverse people's psyches and dreams as a wizard called the Dream-Weaver. I still haven't decided all the gameplay/gamestyle, so at this point, I'm going to start developing and see where it goes!
        
          <br />
          -Keefe  
        </p>
        {/* Date/Time Stamp */}
        <div className="update-date">September 30th, 2024</div>
      </div>
     
      {/* Template for New Updates */}
      {/*
        <div className="update-card">
          <div className="update-images">
            <img src={require('../assets/your-image1.jpg')} alt="Update Image 1" />
            <!-- Add more images as needed -->
          </div>
          <h1 className="update-title">Your Update Title Here</h1>
          <p className="update-content">
            Your detailed update content goes here. Discuss game progress, new features, or upcoming releases.
          </p>
          <div className="update-date">Your Date Here</div>
        </div>
      */}
    </div>
  );
};

export default Updates;
