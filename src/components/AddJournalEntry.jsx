import React, { useState } from 'react';
import '../styles/AddJournalEntry.css';

const AddJournalEntry = () => {
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:8080/api/journal-entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content, mood })
      });

      if (response.ok) {
        alert('Entry saved!');
        setContent('');
        setMood('');
      } else {
        alert('Failed to save entry');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="add-entry-container">
      <div className="add-entry-card">
        <h2>Add New Journal Entry</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            rows="6"
            placeholder="Write about your day..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <select value={mood} onChange={(e) => setMood(e.target.value)} required>
            <option value="">Select Mood</option>
            <option value="happy">😊 Happy</option>
            <option value="sad">😢 Sad</option>
            <option value="anxious">😟 Anxious</option>
          </select>
          <button type="submit" className="add-entry-button">Save Entry</button>
        </form>
      </div>
    </div>
  );
};

export default AddJournalEntry;
