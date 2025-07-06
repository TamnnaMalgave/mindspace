import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // or correct path if different

const Header = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <header className="header">
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/add-entry">Add Entry</Link>

        {/* ✅ Show Mood Tracker only if logged in */}
        {isLoggedIn && <Link to="/mood-tracker">Mood Tracker</Link>}

        {/* ✅ Show Login only if NOT logged in */}
        {!isLoggedIn && <Link to="/login">Login</Link>}

        {/* ✅ Logout link */}
        {isLoggedIn && (
          <button
            onClick={() => {
              localStorage.removeItem('token');
              window.location.href = '/'; // refresh to update Header
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#fff',
              marginLeft: '1rem',
            }}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
  