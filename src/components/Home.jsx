import '../styles/Home.css';

import About from './About'
import Team from './Team'
import Counter from './Counter'
import FindUs from './FindUs'
import VisionAndGoals from './VisionAndGoals'
import HeroSection from './HeroSection'


function Home() {
  // Remove the activeImage state and images array
  
  return (
    <div className="home_container">
      <div className="welcoming">
        <HeroSection />
      </div>
      <div className="team_container">
        <Team />
      </div>

      <About></About>
      
      <VisionAndGoals />
      
      <div className="statics_container">
        <h2 className="section-title">Our Community in Numbers</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>Members</h3>
            <span className="counter-value"><Counter end={21} suffix="+" /></span>
          </div>
          <div className="stat-item">
            <h3>Events</h3>
            <span className="counter-value"><Counter end={15} suffix="+" /></span>
          </div>
          <div className="stat-item">
            <h3>Projects</h3>
            <span className="counter-value"><Counter end={8} /></span>
          </div>
          <div className="stat-item years">
            <h3>Years</h3>
            <span className="counter-value"><Counter end={2} /></span>
          </div>
        </div>
      </div>
      
      {/* Image Showcase section removed */}
      
      <FindUs />
    </div>
  )
}

export default Home