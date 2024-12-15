import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: '1rem', background: '#f5f5f5', borderTop: '1px solid #ccc', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Asha Bharti. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
