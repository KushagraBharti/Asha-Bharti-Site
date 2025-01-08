// frontend/src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.svg";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <div className="flex-shrink-0">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="Asha Bharti Logo" className="h-18 w-auto" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="text-neutral-dark hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="text-neutral-dark hover:text-primary transition-colors">About</Link>
          <Link to="/coaching" className="text-neutral-dark hover:text-primary transition-colors">Coaching</Link>
          <Link to="/books" className="text-neutral-dark hover:text-primary transition-colors">My Books</Link>
          <Link to="/blog" className="text-neutral-dark hover:text-primary transition-colors">My Blog</Link>
          <Link to="/workshops" className="text-neutral-dark hover:text-primary transition-colors">Workshops</Link>
          <Link to="/schedule-and-contact" className="text-neutral-dark hover:text-primary transition-colors">Reach Us</Link>
        </div>
        {/* Add a button or menu icon for mobile view later */}
      </nav>
    </header>
  );
};

export default Navbar;
