import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import Context from '../../Context';
import TokenService from '../../services/token-service';

export default class Navbar extends React.Component {
  static contextType = Context;

  render() {
  return (
  <nav className='navBar'>
      <ul className="nav-list">
        <li>
          <Link to='/' className="nav-link">Home</Link>
        </li>
        <li>
          {TokenService.hasAuthToken() ? (
          <Link to="/signout" className="nav-link">Sign Out</Link>) : (
          <Link to="/signin" className="nav-link">Sign In</Link> )}
        </li>
        <li>
          <Link to='/about' className="nav-link">About</Link>
        </li>
      </ul>
    </nav>
  );
}
}

    