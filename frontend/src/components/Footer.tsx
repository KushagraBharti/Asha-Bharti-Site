// frontend/src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Asha Bharti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
