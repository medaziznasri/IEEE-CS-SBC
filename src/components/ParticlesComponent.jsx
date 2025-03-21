import PropTypes from "prop-types"; // Import PropTypes
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
import { loadSlim } from "@tsparticles/slim";
import '../styles/ParticlesComponent.css';

const ParticlesComponent = ({ isDarkMode }) => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false // Disable fullscreen to contain within parent
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 50, // Reduced for navbar scale
            duration: 15,
          },
          grab: {
            distance: 50, // Reduced for navbar scale
          },
        },
      },
      particles: {
        color: {
          value: isDarkMode ? "#fbe1ba" : "#ff6d00", // Updated to match theme colors
        },
        links: {
          color: isDarkMode ? "#fbe1ba" : "#ff6d00", // Updated to match theme colors
          distance: 45, 
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.6, // Adjusted speed
          straight: true,
        },
        number: {
          density: {
            enable: false,
            area: 550, // Further decreased for higher concentration
          },
          value: 10, // Increased number of particles
        },
        opacity: {
          value: 0.7, // Adjusted opacity
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 }, // Adjusted size variation
        },
      },
      detectRetina: true,
    }),
    [isDarkMode]
  );

  return <Particles id="particles" options={options} className="navbar-particles" />;
};

// Add prop types
ParticlesComponent.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default ParticlesComponent;
