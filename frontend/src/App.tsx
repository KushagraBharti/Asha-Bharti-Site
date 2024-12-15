// frontend/src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Coaching from './pages/Coaching';
import Books from './pages/Books';
import Blog from './pages/Blog';
import Workshops from './pages/Workshops';
import SchedulingAndContact from './pages/ScheduleContact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-light text-neutral-dark font-sans">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/books" element={<Books />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/schedule-and-contact" element={<SchedulingAndContact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
