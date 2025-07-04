import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <h2>AEZ</h2>
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#mission">Mission</a>
            <a href="#history">History</a>
            <a href="#philanthropy">Philanthropy</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">ALPHA EPSILON ZETA</h1>
          <p className="hero-subtitle">Berkeley's Premier Multidisciplinary Professional Fraternity</p>
          <div className="hero-buttons">
            <button className="btn-primary">JOIN US</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="who-we-are">
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            Alpha Epsilon Zeta (AEZ) is an undergraduate professional fraternity at the University of California, Berkeley. 
            AEZ distinguishes itself from traditional professional fraternities by embracing a multidisciplinary focus. 
            The brothers of AEZ come from a wide variety of majors, ranging from biology to business to engineering, 
            and each brother strives to be well-versed in all aspects of every academic discipline. We are dedicated 
            to promoting and fostering professionalism, brotherhood, unity, and tradition.
          </p>
          <p>
            Since its establishment in 2003, AEZ has grown substantially and currently has more than 200 active and 
            alumni brothers. AEZ's alumni have leveraged the skills gained during their time as actives to excel at 
            top firms such as Meta, Google, McKinsey, and Goldman Sachs and renowned graduate schools including 
            Stanford Medical School and Harvard Business School.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>92%</h3>
              <p><strong>Haas</strong><br />Acceptance Rate</p>
            </div>
            <div className="stat-item">
              <h3>$500M+</h3>
              <p><strong>Raised for Alumni</strong><br />Founded Startups</p>
            </div>
            <div className="stat-item">
              <h3>15</h3>
              <p><strong>Startups Founded</strong><br />by Alumni</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p><strong>Full-Time Job</strong><br />Placement Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies Section */}
      <section className="featured-companies">
        <div className="container">
          <div className="companies-grid">
            <div className="company-card">
              <h3>Spot & Margin</h3>
              <p>Paradigm Consulting</p>
              <button className="btn-learn-more">Learn more</button>
            </div>
            <div className="company-card">
              <h3>Derivatives</h3>
              <p><strong>Zenith Capital</strong></p>
              <button className="btn-learn-more">Learn more</button>
            </div>
            <div className="company-card">
              <h3>Derivatives</h3>
              <p>Innovate@Berkeley</p>
              <button className="btn-learn-more">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            Alpha Epsilon Zeta Fraternity Incorporated is dedicated to promoting and fostering professionalism, 
            brotherhood, unity, tradition, culture, and high moral values. Every brother of Alpha Epsilon Zeta 
            Fraternity Incorporated strives to live by the ideal man philosophy that entails excelling both 
            professionally and academically. Its goal is to create the largest network amongst professionals 
            and graduate schools. The founding Fathers believed in these ideals and came together in order to 
            establish an organization that would produce future leaders in our community.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="history">
        <div className="container">
          <h2>Our History</h2>
          <p>
            The groundwork for AEZ began in September, 2002 when Sundeep Chanana, Mohit Jain, Himanshu Shah, 
            and Manpreet Gill shared their ideas and unified their plan for establishing a professional South 
            Asian fraternity on UC Berkeley's campus. They envisioned a diverse organization that incorporated 
            students from different areas of study. On February 19th, 2003, the four founders officially 
            established Alpha Epsilon Zeta, a professional fraternity dedicated to improving each of its 
            brothers academically, professionally, and socially.
          </p>
        </div>
      </section>

      {/* Philanthropy Section */}
      <section id="philanthropy" className="philanthropy">
        <div className="container">
          <h2>Philanthropy</h2>
          <p>
            In addition to spending time on internal development efforts, Alpha Epsilon Zeta also places a 
            strong emphasis on giving back to the community. We frequently engage in philanthropic efforts 
            and community service events. In past years, AEZ has packaged food for those in the need at the 
            Alameda food bank. AEZ also regularly holds fundraisers to generate donations to charitable 
            organizations. A few of the causes we have donated towards include the Red Cross' earthquake 
            relief efforts, the Sankara Eye Foundation, and Indian Farmers. Community service allows the 
            brothers of AEZ to give back to communities that desperately need help and have served many 
            others, while also strengthening the bonds between active brothers.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>aezberkeley@gmail.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Alpha Epsilon Zeta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
