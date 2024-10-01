// Home.tsx
import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <h1>InfinityRealm</h1>
        <p>Crafting unique gaming experiences for everyone</p>
        <Link to="/discover-more" className="button-link">
          <button className="hero-button" >Join Our Community</button>
        </Link>
      </div>
      
      </div>
  );
};

export default Home;
