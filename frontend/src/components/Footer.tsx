import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"; // Update the path to your logo

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Column 1: Logo */}
        <div className="flex flex-col items-center justify-center">
          <img src={Logo} alt="Asha Bharti Logo" className="h-auto w-auto" />
        </div>

        {/* Column 2: Newsletter and Discovery Call */}
        <div className="space-y-8">
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col md:flex-row items-center justify-center w-full max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full md:flex-grow px-4 py-2 rounded-l-md text-neutral-dark border-none focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-primary px-6 py-2 rounded-r-md font-medium hover:bg-primary-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Discovery Call */}
          <div>
            <h3 className="text-lg text-center font-semibold mb-4">Schedule a Call</h3>
            <Link
              to="/scheduling"
              className="bg-white flex text-primary items-center justify-center px-6 py-3 rounded-md font-medium text-center hover:bg-primary-light transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>

        {/* Column 3: Social Media, Phone, Email */}
        <div className="space-y-6">
          {/* Social Media */}
          <div>
            <h3 className="text-lg text-center font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-light hover:text-white transition-colors"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-light hover:text-white transition-colors"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a
                href="mailto:asha@example.com"
                className="text-neutral-light hover:text-white transition-colors"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-light hover:text-white transition-colors"
              >
                <i className="fab fa-medium text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-light hover:text-white transition-colors"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-light hover:text-white transition-colors"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <p className="text-sm text-center">Phone: +966 53 091 7452</p>
            <p className="text-sm text-center">Email: ashabharti@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
