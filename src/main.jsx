import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import CSS with priority (ensure this matches your actual imports)
import './styles/base.css';
import './styles/NavBar.css';
// Import other CSS files as needed

// Create a function to mark the page as loaded after React hydration
function markAsLoaded() {
  document.documentElement.classList.add('page-loaded');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // After React has rendered the app, mark the page as loaded
  markAsLoaded
);
