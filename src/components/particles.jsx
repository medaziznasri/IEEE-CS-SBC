import PropTypes from "prop-types"; // Import PropTypes
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ isDarkMode }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
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
          value: isDarkMode ? "#00f3ff" : "#0066ff", // Updated colors for both modes
        },
        links: {
          color: isDarkMode ? "#00f3ff" : "#0066ff", // Matching link colors 
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
