import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import LinkedInLogo from './icons/LI-In-Bug.png'; // LinkedIn logo
import SteamLogo from './icons/Steam_icon_logo.svg.png'; // Steam logo
import XLogo from './icons/logo-black.png'; // X.com logo
import DiscordLogo from './icons/discord.png'; // Discord logo

const DiscoverMore: React.FC = () => {
    return (
        <>
            <div className="community">
                <h2>Connect with Our Community</h2>
                <div className="logos">
                    <a
                        href="https://www.linkedin.com/company/your-company"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={LinkedInLogo} alt="LinkedIn" />
                    </a>
                    <a
                        href="https://store.steampowered.com/developer/yourcompany"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={SteamLogo} alt="Steam" />
                    </a>
                    {/*<a
                        href="https://x.com/yourcompany"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={XLogo} alt="X.com" />
                    </a> */}
                    <a
                        href="https://discord.gg/yourcompany"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={DiscordLogo} alt="Discord" />
                    </a>
                </div>
            </div>

            {/* About Section */}
            <div className="about">
                <h2>About Us</h2>
                <p>
                    We are an indie game studio passionate about creating immersive and
                    unforgettable gaming experiences. Owned by{' '}
                    <a
                        href="https://data-ject.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Data-Ject Solutions
                    </a>
                </p>
            </div>
            <div>
            <Link to="/" className="button-link">
          <button className="home-back-button" >back to home</button>
        </Link>
            </div>
        </>
    );
};

export default DiscoverMore;