import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <div className={styles['main-container']}>
    <h2 className={styles['text-logo']}>Bookstore CMS</h2>
    <nav className={styles['menu-container']}>
      <Link className={styles['books-link']} to="/">
        Books
      </Link>
      <Link className={styles['category-link']} to="/categories">
        Categories
      </Link>
    </nav>
    <div className={styles['navbar-icn-box']}>
      <ImUser />
    </div>
  </div>
);
export default Navbar;
