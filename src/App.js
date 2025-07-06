import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/AuthForm';
import AddJournalEntry from './components/AddJournalEntry';
import JournalEntryDetail from './components/JournalEntryDetail';
import MoodTracker from './components/MoodTracker'; // ✅

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-entry" element={<AddJournalEntry />} />
        <Route path="/entry/:id" element={<JournalEntryDetail />} />
        <Route path="/mood-tracker" element={<MoodTracker />} /> {/* ✅ */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
