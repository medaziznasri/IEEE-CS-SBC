import React from 'react';
import profile1 from '../assets/images/rayen.JPG';
import profile2 from '../assets/images/maryem.JPG';
import profile3 from '../assets/images/amir.JPG';
import profile4 from '../assets/images/yessin.JPG';
import profile5 from '../assets/images/dali.JPG';
import profile6 from '../assets/images/aya.JPG';
import profile7 from '../assets/images/sabra.jpeg';
import '../styles/Team.css';

function Team() {
  return (
    <div>
      <div className="team_container">
        <h2 className="committee"><span>Meet the Executive Committee</span></h2>            
        <div className="team">
          <div className="img1">
            <img src={profile1} alt="Mohamed Rayen Ourabi" />
            <div className="contact-overlay">
              
              <a className="contact-item" href="mailto:rayen.ourabi@ieee.org">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px">
                    <path d="M12.042 23.648C4.229 23.648 0 18.772 0 12.477 0 5.75 4.762.352 13.276.352 19.49.352 24 4.39 24 9.953c0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141C13.495.724 2.521 2.513 2.521 12.308c0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zM9.698 9.343c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z"></path>
                  </svg>
                </span>
                <div className="contact-text">rayen.ourabi@ieee.org</div>
              </a>
              
              <a className="contact-item linkedin-item" href="https://www.linkedin.com/in/rayen-ourabi-404501341/" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16">
                    <g id="surface1">
                      <path d="M 3.320312 2.332031 C 3.320312 3.253906 2.578125 4 1.667969 4 C 0.753906 4 0.0117188 3.253906 0.0117188 2.332031 C 0.0117188 1.414062 0.753906 0.667969 1.667969 0.667969 C 2.578125 0.667969 3.320312 1.414062 3.320312 2.332031 Z M 3.332031 5.332031 L 0 5.332031 L 0 16 L 3.332031 16 Z M 8.65625 5.332031 L 5.34375 5.332031 L 5.34375 16 L 8.65625 16 L 8.65625 10.402344 C 8.65625 7.289062 12.675781 7.03125 12.675781 10.402344 L 12.675781 16 L 16 16 L 16 9.246094 C 16 3.992188 10.050781 4.183594 8.65625 6.769531 Z M 8.65625 5.332031 " style={{ fill: 'rgb(0, 0, 0)' }}></path>
                    </g>
                  </svg>
                </span>
                <span className="contact-text">mohamed-rayen-ourabi</span>
              </a>

              <a className="contact-item facebook-item" href="https://www.facebook.com/profile.php?id=100066572354253" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" style={{ fill: 'rgb(0, 0, 0)' }}></path>
                  </svg>
                </span>
                <span className="contact-text">rayen.ourabi</span>
              </a>
              
              <a className="contact-item instagram-item" href="https://www.instagram.com/ourabi456/" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" style={{ fill: 'rgb(0, 0, 0)' }}></path>
                  </svg>
                </span>
                <span className="contact-text">rayen.ourabi</span>
              </a>
            </div>
            <div className="board"> <h1>Mohamed Rayen <br /> Ourabi</h1>
            <p>Chairman</p></div>
           
          </div>
          
          <div className="img1">
            <img src={profile2} alt="Maryem Mbarek" />
            <div className="contact-overlay">
              
              <a className="contact-item" href="mailto:maryem@ieee.org">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px">
                    <path d="M12.042 23.648C4.229 23.648 0 18.772 0 12.477 0 5.75 4.762.352 13.276.352 19.49.352 24 4.39 24 9.953c0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141C13.495.724 2.521 2.513 2.521 12.308c0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zM9.698 9.343c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z"></path>
                  </svg>
                </span>
                <div className="contact-text">maryem@ieee.org</div>
              </a>
              
              <a className="contact-item linkedin-item" href="https://www.linkedin.com/in/maryem-mbarek" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16">
                    <g id="surface1">
                      <path d="M 3.320312 2.332031 C 3.320312 3.253906 2.578125 4 1.667969 4 C 0.753906 4 0.0117188 3.253906 0.0117188 2.332031 C 0.0117188 1.414062 0.753906 0.667969 1.667969 0.667969 C 2.578125 0.667969 3.320312 1.414062 3.320312 2.332031 Z M 3.332031 5.332031 L 0 5.332031 L 0 16 L 3.332031 16 Z M 8.65625 5.332031 L 5.34375 5.332031 L 5.34375 16 L 8.65625 16 L 8.65625 10.402344 C 8.65625 7.289062 12.675781 7.03125 12.675781 10.402344 L 12.675781 16 L 16 16 L 16 9.246094 C 16 3.992188 10.050781 4.183594 8.65625 6.769531 Z M 8.65625 5.332031 " style={{ fill: 'rgb(0, 0, 0)' }}></path>
                    </g>
                  </svg>
                </span>
                <span className="contact-text">maryem-mbarek</span>
              </a>

              <a className="contact-item facebook-item" href="https://www.facebook.com/maryem.mbarek.121" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" style={{ fill: 'rgb(0, 0, 0)' }}></path>
                  </svg>
                </span>
                <span className="contact-text">maryem.mbarek</span>
              </a>
              
              <a className="contact-item instagram-item" href="https://www.instagram.com/maryem.mbarek/" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" style={{ fill: 'rgb(0, 0, 0)' }}></path>
                  </svg>
                </span>
                <span className="contact-text">maryem.mbarek</span>
              </a>
            </div>
            <div className="board">
            <h1>Maryem Mbarek</h1>
            <p>Vice-Chair</p>
            </div>
            
          </div>
          
          <div className="img1">
            <img src={profile7} alt="Sabra Ben Fadhel" />
            <div className="contact-overlay">
              
              <a className="contact-item" href="mailto:sabra.benfadhel@ieee.org">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px">
                    <path d="M12.042 23.648C4.229 23.648 0 18.772 0 12.477 0 5.75 4.762.352 13.276.352 19.49.352 24 4.39 24 9.953c0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141C13.495.724 2.521 2.513 2.521 12.308c0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zM9.698 9.343c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z"></path>
                  </svg>
                </span>
                <div className="contact-text">sabra@ieee.org</div>
              </a>
              
              <a className="contact-item linkedin-item" href="https://www.linkedin.com/in/ben-fadhel-sabra-75030829a/" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16">
                    <g id="surface1">
                      <path d="M 3.320312 2.332031 C 3.320312 3.253906 2.578125 4 1.667969 4 C 0.753906 4 0.0117188 3.253906 0.0117188 2.332031 C 0.0117188 1.414062 0.753906 0.667969 1.667969 0.667969 C 2.578125 0.667969 3.320312 1.414062 3.320312 2.332031 Z M 3.332031 5.332031 L 0 5.332031 L 0 16 L 3.332031 16 Z M 8.65625 5.332031 L 5.34375 5.332031 L 5.34375 16 L 8.65625 16 L 8.65625 10.402344 C 8.65625 7.289062 12.675781 7.03125 12.675781 10.402344 L 12.675781 16 L 16 16 L 16 9.246094 C 16 3.992188 10.050781 4.183594 8.65625 6.769531 Z M 8.65625 5.332031 " style={{ fill: 'rgb(0, 0, 0)' }}></path>
                    </g>
                  </svg>
                </span>
                <span className="contact-text">sabra fadhel</span>
              </a>

              <a className="contact-item facebook-item" href="https://www.facebook.com/profile.php?id=100079018811939" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" style={{ fill: 'rgb(0, 0, 0)' }}></path>
                  </svg>
                </span>
                <span className="contact-text">sabra.benfadhel</span>
              </a>
              
              <a className="contact-item instagram-item" href="https://www.instagram.com/sabra_benfadhel/" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" style={{ fill: 'rgb(0, 0, 0)' }}></path>
                  </svg>
                </span>
                <span className="contact-text">sabra.benfadhel</span>
              </a>
            </div>
            <div className="board"><h1>Sabra Ben Fadhel</h1>
            <p>HR Manager</p></div>
            
          </div>
          
          <div className="img1">
            <img src={profile4} alt="Ahmed Yassine Romdhan" />
            <div className="contact-overlay">
              
              <a className="contact-item" href="mailto:yassine.romdhane@ieee.org">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px">
                    <path d="M12.042 23.648C4.229 23.648 0 18.772 0 12.477 0 5.75 4.762.352 13.276.352 19.49.352 24 4.39 24 9.953c0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141C13.495.724 2.521 2.513 2.521 12.308c0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zM9.698 9.343c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z"></path>
                  </svg>
                </span>
                <div className="contact-text">yassine.romdhane@ieee.org</div>
              </a>
              
              <a className="contact-item linkedin-item" href="https://www.linkedin.com/in/ahmed-yassine-romdhane-04b022333/" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16">
                    <g id="surface1">
                      <path d="M 3.320312 2.332031 C 3.320312 3.253906 2.578125 4 1.667969 4 C 0.753906 4 0.0117188 3.253906 0.0117188 2.332031 C 0.0117188 1.414062 0.753906 0.667969 1.667969 0.667969 C 2.578125 0.667969 3.320312 1.414062 3.320312 2.332031 Z M 3.332031 5.332031 L 0 5.332031 L 0 16 L 3.332031 16 Z M 8.65625 5.332031 L 5.34375 5.332031 L 5.34375 16 L 8.65625 16 L 8.65625 10.402344 C 8.65625 7.289062 12.675781 7.03125 12.675781 10.402344 L 12.675781 16 L 16 16 L 16 9.246094 C 16 3.992188 10.050781 4.183594 8.65625 6.769531 Z M 8.65625 5.332031 " style={{ fill: 'rgb(0, 0, 0)' }}></path>
                    </g>
                  </svg>
                </span>
                <span className="contact-text">ahmed yassine romdhan</span>
              </a>

              <a className="contact-item facebook-item" href="https://www.facebook.com/ahmedyassine.romdhan" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" style={{ fill: 'rgb(0, 0, 0)' }}></path>
                  </svg>
                </span>
                <span className="contact-text">ahmedyassine.romdhan</span>
              </a>
              
              <a className="contact-item instagram-item" href="https://www.instagram.com/ysn_romdhane1/" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" style={{ fill: 'rgb(0, 0, 0)' }}></path>
                  </svg>
                </span>
                <span className="contact-text">ahmedyassine.romdhan</span>
              </a>
            </div>
            <div className="board"> <h1>Ahmed Yassine<br />Romdhan</h1>
            <p>Webmaster</p></div>
           
          </div>
          
        </div>
        
        <div className="team">
        <div className="img1">
            <img src={profile3} alt="Amir Toumi" />
            <div className="contact-overlay">
              
              <a className="contact-item" href="mailto:amir.toumi@ieee.org">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px">
                    <path d="M12.042 23.648C4.229 23.648 0 18.772 0 12.477 0 5.75 4.762.352 13.276.352 19.49.352 24 4.39 24 9.953c0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141C13.495.724 2.521 2.513 2.521 12.308c0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zM9.698 9.343c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z"></path>
                  </svg>
                </span>
                <div className="contact-text">amir.toumi@ieee.org</div>
              </a>
              
              <a className="contact-item linkedin-item" href="https://www.linkedin.com/in/amir-toumi-b95108337/" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16">
                    <g id="surface1">
                      <path d="M 3.320312 2.332031 C 3.320312 3.253906 2.578125 4 1.667969 4 C 0.753906 4 0.0117188 3.253906 0.0117188 2.332031 C 0.0117188 1.414062 0.753906 0.667969 1.667969 0.667969 C 2.578125 0.667969 3.320312 1.414062 3.320312 2.332031 Z M 3.332031 5.332031 L 0 5.332031 L 0 16 L 3.332031 16 Z M 8.65625 5.332031 L 5.34375 5.332031 L 5.34375 16 L 8.65625 16 L 8.65625 10.402344 C 8.65625 7.289062 12.675781 7.03125 12.675781 10.402344 L 12.675781 16 L 16 16 L 16 9.246094 C 16 3.992188 10.050781 4.183594 8.65625 6.769531 Z M 8.65625 5.332031 " style={{ fill: 'rgb(0, 0, 0)' }}></path>
                    </g>
                  </svg>
                </span>
                <span className="contact-text">amir toumi</span>
              </a>

              <a className="contact-item facebook-item" href="https://www.facebook.com/amir.toumi.359" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" style={{ fill: 'rgb(0, 0, 0)' }}></path>
                  </svg>
                </span>
                <span className="contact-text">amir.toumi</span>
              </a>
              
              <a className="contact-item instagram-item" href="https://www.instagram.com/amir._.toumi/" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" style={{ fill: 'rgb(0, 0, 0)' }}></path>
                  </svg>
                </span>
                <span className="contact-text">amir.toumi</span>
              </a>
            </div>
            <div className="board"><h1>Amir Toumi</h1>
            <p>Treasurer</p></div>
            
          </div>
          <div className="img1">
            <img src={profile5} alt="Dali Kamessi" />
            <div className="contact-overlay">
              
              <a className="contact-item" href="mailto:dali.kamessi@ieee.org">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px">
                    <path d="M12.042 23.648C4.229 23.648 0 18.772 0 12.477 0 5.75 4.762.352 13.276.352 19.49.352 24 4.39 24 9.953c0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141C13.495.724 2.521 2.513 2.521 12.308c0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zM9.698 9.343c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z"></path>
                  </svg>
                </span>
                <div className="contact-text">dali.kamessi@ieee.org</div>
              </a>
              
              <a className="contact-item linkedin-item" href="https://www.linkedin.com/in/mohamed-ali-kamassi-437308355/" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16">
                    <g id="surface1">
                      <path d="M 3.320312 2.332031 C 3.320312 3.253906 2.578125 4 1.667969 4 C 0.753906 4 0.0117188 3.253906 0.0117188 2.332031 C 0.0117188 1.414062 0.753906 0.667969 1.667969 0.667969 C 2.578125 0.667969 3.320312 1.414062 3.320312 2.332031 Z M 3.332031 5.332031 L 0 5.332031 L 0 16 L 3.332031 16 Z M 8.65625 5.332031 L 5.34375 5.332031 L 5.34375 16 L 8.65625 16 L 8.65625 10.402344 C 8.65625 7.289062 12.675781 7.03125 12.675781 10.402344 L 12.675781 16 L 16 16 L 16 9.246094 C 16 3.992188 10.050781 4.183594 8.65625 6.769531 Z M 8.65625 5.332031 " style={{ fill: 'rgb(0, 0, 0)' }}></path>
                    </g>
                  </svg>
                </span>
                <span className="contact-text">dali kamessi</span>
              </a>

              <a className="contact-item facebook-item" href="https://www.facebook.com/profile.php?id=100085124143365" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" style={{ fill: 'rgb(0, 0, 0)' }}></path>
                  </svg>
                </span>
                <span className="contact-text">dali.kamessi</span>
              </a>
              
              <a className="contact-item instagram-item" href="https://www.instagram.com/dalikamassi/" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" style={{ fill: 'rgb(0, 0, 0)' }}></path>
                  </svg>
                </span>
                <span className="contact-text">dali.kamessi</span>
              </a>
            </div>
            <div className="board">
            <h1>Dali Kamessi</h1>
            <p>General Secretary</p>
            </div>
            
          </div>
          
          <div className="img1">
            <img src={profile6} alt="Aya Chokri" />
            <div className="contact-overlay">
              
              <a className="contact-item" href="mailto:aya.chokri@ieee.org
">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px">
                    <path d="M12.042 23.648C4.229 23.648 0 18.772 0 12.477 0 5.75 4.762.352 13.276.352 19.49.352 24 4.39 24 9.953c0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141C13.495.724 2.521 2.513 2.521 12.308c0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zM9.698 9.343c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z"></path>
                  </svg>
                </span>
                <div className="contact-text">aya.chokri@ieee.org
                </div>
              </a>
              
              <a className="contact-item linkedin-item" href="https://www.linkedin.com/in/aya-chokri-97190033a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16">
                    <g id="surface1">
                      <path d="M 3.320312 2.332031 C 3.320312 3.253906 2.578125 4 1.667969 4 C 0.753906 4 0.0117188 3.253906 0.0117188 2.332031 C 0.0117188 1.414062 0.753906 0.667969 1.667969 0.667969 C 2.578125 0.667969 3.320312 1.414062 3.320312 2.332031 Z M 3.332031 5.332031 L 0 5.332031 L 0 16 L 3.332031 16 Z M 8.65625 5.332031 L 5.34375 5.332031 L 5.34375 16 L 8.65625 16 L 8.65625 10.402344 C 8.65625 7.289062 12.675781 7.03125 12.675781 10.402344 L 12.675781 16 L 16 16 L 16 9.246094 C 16 3.992188 10.050781 4.183594 8.65625 6.769531 Z M 8.65625 5.332031 " style={{ fill: 'rgb(0, 0, 0)' }}></path>
                    </g>
                  </svg>
                </span>
                <span className="contact-text">Aya chokri</span>
              </a>

              <a className="contact-item facebook-item" href="https://www.facebook.com/aya.chokri.505" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" style={{ fill: 'rgb(0, 0, 0)' }}></path>
                  </svg>
                </span>
                <span className="contact-text">aya.chokri</span>
              </a>
              
              <a className="contact-item instagram-item" href="https://www.instagram.com/aya_chokrii" target="_blank" rel="noopener noreferrer">
                <span className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" style={{ fill: 'rgb(0, 0, 0)' }}></path>
                  </svg>
                </span>
                <span className="contact-text">aya.chokri</span>
              </a>
            </div>
            <div className="board"> <h1>Aya Chokri</h1>
            <p>Logistics Manager</p></div>
           
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default Team
