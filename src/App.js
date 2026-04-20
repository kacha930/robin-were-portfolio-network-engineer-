import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <img 
          src="/profile.jpg" 
          alt="Profile" 
          className="avatar"
        />
        <h1>Jane Doe</h1>
        <p className="tagline">Network Engineer</p>
        <div className="social-links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a Network Engineer passionate about designing secure, scalable network infrastructures.
          Experienced with routing, switching, firewall configuration, and network monitoring.
        </p>
      </section>

      <section className="projects">
        <h2>Network Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Enterprise Network Design</h3>
            <p>Designed VLAN segmentation, OSPF routing, and ACL implementation for 500+ users</p>
            <span className="tech">Cisco, OSPF, VLAN, ACL</span>
            <div className="project-links">
              <a href="https://github.com/YOUR_USERNAME/enterprise-network" target="_blank" rel="noopener noreferrer">
                GitHub →
              </a>
            </div>
          </div>
          
          <div className="project-card">
            <h3>Network Security Implementation</h3>
            <p>Configured firewall rules, VPN tunnels, and IDS/IPS monitoring</p>
            <span className="tech">pfSense, WireGuard, Snort</span>
            <div className="project-links">
              <a href="https://github.com/YOUR_USERNAME/network-security" target="_blank" rel="noopener noreferrer">
                GitHub →
              </a>
            </div>
          </div>
          
          <div className="project-card">
            <h3>Network Monitoring Dashboard</h3>
            <p>Built real-time monitoring with alerts for bandwidth and device status</p>
            <span className="tech">PRTG, Grafana, SNMP</span>
            <div className="project-links">
              <a href="https://github.com/YOUR_USERNAME/network-monitoring" target="_blank" rel="noopener noreferrer">
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Jane Doe. Network Engineer Portfolio</p>
      </footer>
    </div>
  );
}

export default App;