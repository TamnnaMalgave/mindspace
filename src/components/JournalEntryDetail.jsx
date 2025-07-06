import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/JournalEntryDetail.css';

const MOCK_ENTRY = {
  id: 1,
  date: '2025-06-19',
  content: 'Today was a great day! I took a long walk and felt peaceful.',
  mood: 'happy',
  imageUrl: null,
};

const JournalEntryDetail = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    setEntry(MOCK_ENTRY);
  }, [id]);

  if (!entry) return <div>Loading...</div>;

  return (
    <div className="entry-detail-container">
      <div className="entry-detail-card">
        <h2>Journal Entry - {entry.date}</h2>
        <p><strong>Mood:</strong> {entry.mood}</p>
        <p>{entry.content}</p>
        {entry.imageUrl && (
          <img src={entry.imageUrl} alt="Attached" />
        )}
        <div className="entry-detail-actions">
          <button className="entry-detail-button">Edit</button>
          <button className="entry-detail-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default JournalEntryDetail;
