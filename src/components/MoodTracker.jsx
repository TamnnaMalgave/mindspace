import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import '../styles/MoodTracker.css';

const MoodTracker = () => {
  const [moodData, setMoodData] = useState([]);
  const [filter, setFilter] = useState('week');

  const dummyData = {
    week: [
      { date: 'Mon', mood: 5 },
      { date: 'Tue', mood: 7 },
      { date: 'Wed', mood: 6 },
      { date: 'Thu', mood: 4 },
      { date: 'Fri', mood: 8 },
      { date: 'Sat', mood: 7 },
      { date: 'Sun', mood: 6 },
    ],
    month: [
      { date: 'Week 1', mood: 6 },
      { date: 'Week 2', mood: 7 },
      { date: 'Week 3', mood: 5 },
      { date: 'Week 4', mood: 8 },
    ],
    year: [
      { date: 'Jan', mood: 6 },
      { date: 'Feb', mood: 5 },
      { date: 'Mar', mood: 7 },
      { date: 'Apr', mood: 8 },
      { date: 'May', mood: 6 },
      { date: 'Jun', mood: 7 },
      { date: 'Jul', mood: 6 },
      { date: 'Aug', mood: 5 },
      { date: 'Sep', mood: 7 },
      { date: 'Oct', mood: 6 },
      { date: 'Nov', mood: 7 },
      { date: 'Dec', mood: 8 },
    ],
  };

  const frequentMoods = [
    { mood: 'Happy', count: 10 },
    { mood: 'Sad', count: 4 },
    { mood: 'Neutral', count: 6 },
    { mood: 'Anxious', count: 2 },
  ];

  useEffect(() => {
    setMoodData(dummyData[filter]);
  }, [filter]);

  return (
    <div className="mood-container">
      <div className="mood-box">
        <h1 className="mood-title">Mood Tracker</h1>
        <p className="mood-subtitle">Visualize your mood trends</p>

        <div className="mood-filter">
          <label>Filter by:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="week">Last 7 days</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
          </select>
        </div>

        <h2>Mood Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={moodData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="mood" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>

        <h2>Most Frequent Moods</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={frequentMoods}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mood" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MoodTracker;
