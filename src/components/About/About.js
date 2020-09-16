import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './About.css'

export default function About() {
  return(
  <div>
    <Header />
    <Navbar />
    <div className='aboutSection'>
      <h2>TransActionary is a place where you can save all of your transactions. To get started, simply click "Sign In" above, and use the dummy data to log in and start creating transaction lists.</h2>

      <h4 className="name-sig">Created By George Brown</h4>
    </div>
  </div>
  )}