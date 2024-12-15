import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: '1rem', background: '#fff', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/about" style={{ marginRight: '1rem' }}>About</Link>
      <Link to="/coaching" style={{ marginRight: '1rem' }}>Coaching</Link>
      <Link to="/books" style={{ marginRight: '1rem' }}>My Books</Link>
      <Link to="/blog" style={{ marginRight: '1rem' }}>My Blog</Link>
      <Link to="/workshops" style={{ marginRight: '1rem' }}>Workshops</Link>
      <Link to="/scheduling" style={{ marginRight: '1rem' }}>Schedule a Call</Link>
      <Link to="/contact" style={{ marginRight: '1rem' }}>Contact</Link>
    </nav>
  );
};

export default Navbar;
