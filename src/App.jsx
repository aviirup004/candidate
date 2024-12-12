import React, { useState, useEffect } from 'react';
import './App.css';
import drdo from './drdo.jpg';

function App() {
  const [candidate, setCandidate] = useState({
    username: '',
    email: '',
    photo: '', // Start with an empty string
    cornerPhoto: drdo // Photo for the right corner
  });

  useEffect(() => {
    // Replace 'API_ENDPOINT' with your actual backend API endpoint
    fetch('http://localhost:5000/api/candidate')
      .then(response => response.json())
      .then(data => {
        setCandidate(prevState => ({
          ...prevState,
          username: data.username,
          email: data.email,
          photo: data.photo
        }));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="small-profile-pic">
          <img src={candidate.photo} alt="Candidate" />
        </div>
        <nav>
          <ul>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#profile">Practice Assessment</a></li>
            <li><a href="#profile">Practice Recruitment</a></li>
            <li><a href="#profile">Report an Issue</a></li>
          </ul>
        </nav>
        <button className="logout">Logout</button>
      </aside>
      <div className="content-area">
        <header className="header">
          <h1>Welcome, {candidate.username}</h1>
          <img src={candidate.cornerPhoto} alt="Corner" className="corner-photo" />
        </header>
        <section className="profile">
          <div className="profile-details">
            <img src={candidate.photo} alt="Candidate" className="profile-photo" />
            <p className="username">Username: {candidate.username}</p>
            <p className="email">Email: {candidate.email}</p>
          </div>
        </section>
        <img src={candidate.cornerPhoto} alt="Corner" className="corner-photo" />
      </div>
    </div>
  );
}

export default App;
