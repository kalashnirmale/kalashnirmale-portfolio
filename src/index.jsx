import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Tailwind CSS file for global styles
import App from './App';  // Importing the main App component

// This is the root element where the React app will be injected
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component into the root div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
