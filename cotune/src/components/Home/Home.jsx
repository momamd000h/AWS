// src/Home.jsx
import React from "react";
import "./Home.css"; // Ensure you import the CSS for styling

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to CoTune</h1>
      <p>Explore, Control, and Innovate with IoT!</p>
      <p>Discover our features and services:</p>
      <ul>
        <li>Tuning Guides</li>
        <li>Interactive Lessons</li>
        <li>Community Support</li>
      </ul>
      <div className="image-container">
        <img src="/pid.gif" className="pid" alt="PID" />
        <img src="/pendulum.gif" className="pendulum" alt="Inverted Pendulum" />
      </div>
    </div>
  );
};

export default Home;
