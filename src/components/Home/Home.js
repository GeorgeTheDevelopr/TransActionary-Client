import React from 'react';
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar';
import './Home.css';

export default function Home() {
  return (  
  <div className="App">
    <Header className="App-header" />
    <Navbar />
    <div className="landing-msg-container">
      <h3 id="landing-msg">Welcome to TransActionary! Click Sign In to get started</h3>
    </div>
  </div>
  )
}