import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <header className="hero">
        <img 
          src="https://via.placeholder.com/120" 
          alt="Profile" 
          className="avatar"
        />
        <h1>Jane Doe</h1>
        <p className="tagline">Frontend Developer & UI Enthusiast</p>
        <div className="social-links">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer who loves building simple, beautiful web experiences.
          Currently focused on React and modern JavaScript.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Weather App</h3>
            <p>Real-time weather data using OpenWeather API</p>
            <span className="tech">React, API</span>
          </div>
          <div className="project-card">
            <h3>Task Manager</h3>
            <p>Simple to-do app with local storage</p>
            <span className="tech">React Hooks</span>
          </div>
          <div className="project-card">
            <h3>Portfolio Site</h3>
            <p>This very portfolio — minimal & responsive</p>
            <span className="tech">React, CSS</span>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2025 Jane Doe. Built with React</p>
      </footer>
    </div>
  );
}

export default App;