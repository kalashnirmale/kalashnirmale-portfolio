import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // This will include your global Tailwind CSS styles
import Portfolio from './Portfolio'; // Importing the main component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
