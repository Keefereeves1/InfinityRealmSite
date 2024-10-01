import React, { useEffect } from 'react'; // Import useEffect
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation
import Navbar from './Navbar';
import Home from './Home';
import Games from './games';
import Updates from './updates';
import Staff from './Staff';
import Contact from './Contact';
import DiscoverMore from './DiscoverMore';
import ReactGA from 'react-ga4';

// Initialize Google Analytics with your GA Tracking ID
ReactGA.initialize('G-TC4DHMN5BR');

// Custom hook to report page views
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
}

const App: React.FC = () => {
  // Use page tracking hook
  usePageTracking();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<Updates />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/discover-more" element={<DiscoverMore />} />
      </Routes>
    </Router>
  );
};

export default App;
