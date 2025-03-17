import React from 'react';
import '../styles/About.css';
import image from "../assets/images/aboutUs.jpg";

function About() {
 
  return (
    <div className="about-container">
      <div className="about">
       
          <div className="about-image">
            <img src={image} alt="IEEE Computer Society ISIMA" />
        </div>
        <div className="para">
          <h2 className="section-title">WHO ARE WE?</h2>
          <div className="about-content">
            <p>
              The IEEE Computer Society (CS) Student Branch Chapter at ISIMA is dedicated to advancing the theory, practice, and application of computer and information processing science and technology. We serve as a hub for students passionate about computing technologies and their practical applications.
            </p>
            <p>
              Through organizing technical workshops, coding competitions, industry talks, and collaborative projects, our chapter provides an environment where students can enhance their technical skills and professional development in the computing field.
            </p>
            <p>
              By connecting members with industry professionals, academic researchers, and the global IEEE CS community, we create opportunities for networking, mentorship, and career growth. The IEEE CS ISIMA Chapter is committed to fostering innovation and excellence in computing, preparing the next generation of technology leaders to address real-world challenges through computing solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
