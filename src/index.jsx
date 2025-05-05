import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Include your Tailwind or custom CSS
import App from './App'; // or Portfolio if that's your main component

const root = ReactDOM.createRoot(document.getElementById('root')); // Creates the root element
root.render(
  <React.StrictMode>
    <App /> {/* This can be <Portfolio /> if that's your main component */}
  </React.StrictMode>
);
