import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const token = localStorage.getItem('token');

  return (
    <div className="home-container">
      <section className="hero">
        <h1 className="hero-title">Welcome to Mindspace</h1>
        <p className="hero-subtitle">
          Your personal mental health journal and wellness tracker.
        </p>
        <Link to="/login" className="cta-button">Get Started</Link>

        {token && (
          <Link to="/add-entry" className="cta-button" style={{ marginLeft: '15px' }}>
            Add New Entry
          </Link>
        )}
      </section>

      <section className="features">
        <h2>Why Mindspace?</h2>
        <div className="features-grid">
          <div className="feature-card card-1">
            <h3>Daily Journaling</h3>
            <p>Write your thoughts and moods in a safe space to reflect and grow.</p>
          </div>
          <div className="feature-card card-2">
            <h3>Mood Tracking</h3>
            <p>Visualize your mental wellness with trends and stats over time.</p>
          </div>
          <div className="feature-card card-3">
            <h3>Mindfulness Tools</h3>
            <p>Access guided prompts and reminders to stay grounded and present.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
