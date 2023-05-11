import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => (
  <div className="main-container">
    <h2>Bookstore</h2>
    <nav>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  </div>
);
export default Navbar;
