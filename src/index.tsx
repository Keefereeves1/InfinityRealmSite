import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import App from './App'; // Import your main App component
import './index.css'; // Import your global CSS
import { FaInfinity } from 'react-icons/fa'; // Infinity icon
// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root')!); // Use non-null assertion to satisfy TypeScript
root.render(
  <React.StrictMode>
    <App />  Infinity<FaInfinity size={20} />Realm
  </React.StrictMode>
);
