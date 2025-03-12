import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import EventsPage from './components/EventsPage';
import ContactUs from './components/ContactUs';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import { useState, useEffect } from "react";


const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeEnabled = document.body.classList.contains("dark-mode");
    setIsDarkMode(darkModeEnabled);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.body.className = newMode ? "dark-mode" : "light-mode";
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactUs />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;