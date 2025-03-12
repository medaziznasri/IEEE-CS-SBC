import React from 'react';
import '../styles/About.css';
import image from "../assets/images/d.png";

function About() {
 
  return (
    <div className="about-container">
      <div className="about">
       
          <div className="about-image">
            <img src={image} alt="" />
        </div>
        <div className="para">
          <span className="myName"> WHO ARE WE ?</span>
          <p>
          The IEEE Computational Intelligence Society (CIS) Student Branch Chapter at ISIMA is committed to driving advancements in the field of computational intelligence, encompassing cutting-edge areas such as artificial intelligence, neural networks, evolutionary computation, and beyond. 
            <br />
            <br />
            Through organizing conferences, workshops, and seminars, as well as publishing research in leading journals, the CIS ISIMA SBC aims to foster innovation and facilitate knowledge exchange among students, researchers, and industry professionals. 
            <br />
            <br />By promoting collaboration and providing a platform for learning and growth, the chapter empowers its members to contribute to the ever-evolving landscape of computational intelligence, shaping the future of technology and its applications for the betterment of society.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
