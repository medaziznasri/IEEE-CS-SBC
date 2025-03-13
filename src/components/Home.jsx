import '../styles/Home.css';
import img1 from '../assets/images/3.png'
import img2 from '../assets/images/480680851_576742675326860_8616305235929434779_n.jpg'
import img3 from '../assets/images/480819626_576742601993534_8874484697937364079_n.jpg'
import img4 from '../assets/images/480929479_576742651993529_2296792619438307059_n.jpg'
import img5 from '../assets/images/481023308_576742645326863_2279775723659549572_n.jpg'
import img6 from '../assets/images/481294564_576742685326859_1535771555974715359_n.jpg'
import img7 from '../assets/images/d.png'
import img8 from '../assets/images/IMG_6015.jpg'
import img9 from '../assets/images/IMG_7185.JPG'
import img10 from '../assets/images/IMG_7273.JPG'
import img11 from '../assets/images/aboutUs.jpg'
import welcomingvideo from '../assets/AQOK9ncphBdF-2h8ET4L5e344GuORnsjFmvVmHGFcu5QgLKfWaYqEAVr2nYm4TF0Mf07K9Giz66zybzY1QVvNj9E.mp4'
import Typewrite from './Typewrite'
import About from './About'
import Team from './Team'
import Counter from './Counter'
import FindUs from './FindUs'
import MemberOfMonth from './MemberOfMonth'
import VisionAndGoals from './VisionAndGoals'

function Home() {
  return (
    <div className="home_container">
      <div className="welcoming">
        <Typewrite />
      
      <video className='welcoming_video' autoPlay loop muted>
        <source src={welcomingvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <Team></Team>

      <About></About>
      
      {/* Add Vision and Goals section */}
      <VisionAndGoals />
      
      <div className="statics_container">
        <h2 className="section-title">Our Community in Numbers</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>Members</h3>
            <Counter end={21} suffix="+" />
          </div>
          <div className="stat-item">
            <h3>Events</h3>
           <span className='counter'><Counter end={15} suffix="+" /></span> 
          </div>
          <div className="stat-item">
            <h3>Projects</h3>
            <span className='counter'><Counter end={8} /></span>
          </div>
          <div className="stat-item years">
            <h3>Years</h3>
            <span className='counter'><Counter end={2} /></span>
            
          </div>
        </div>
      </div>

      <div className="image_marq">
        <div className="marquee-container">
          <div className="marquee-right">
            <div className="marquee-content">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img11} alt="" />
            </div>
          </div>
        </div>

        <div className="marquee-container">
          <div className="text-marquee">
            <div className="marquee-text-content">
              <span>Together, We Shape the Future &nbsp;</span>
              <span>Together, We Shape the Future &nbsp;</span>
              <span>Together, We Shape the Future &nbsp;</span>
              <span>Together, We Shape the Future &nbsp;</span>
              <span>Together, We Shape the Future &nbsp;</span>
              <span>Together, We Shape the Future </span>
            </div>
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-left">
            <div className="marquee-content">
              <img src={img6} alt="" />
              <img src={img7} alt="" />
              <img src={img8} alt="" />
              <img src={img9} alt="" />
               <img src={img11} alt="" />
              <img src={img10} alt="" />
              <img src={img6} alt="" />
              <img src={img7} alt="" />
              <img src={img8} alt="" />
              <img src={img9} alt="" />
              <img src={img10} alt="" />
            </div>
          </div>
        </div>
      </div>
      <MemberOfMonth />   
        <FindUs />
    
    </div>
  )
}

export default Home