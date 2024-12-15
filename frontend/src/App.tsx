import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importing page components
import Home from './pages/Home';
import About from './pages/About';
import Coaching from './pages/Coaching';
import Books from './pages/Books';
import Blog from './pages/Blog';
import Workshops from './pages/Workshops';
import Scheduling from './pages/Scheduling';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/books" element={<Books />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
