import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Facebook, Twitter, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Car className="w-8 h-8 text-red-500" />
              <span className="ml-2 text-xl font-bold text-white">Street Racers</span>
            </div>
            <p className="text-gray-400">Experience the thrill of street racing in our collection of browser racing games.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/faq" className="hover:text-red-500">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-red-500">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-red-500">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 flex-grow"
              />
              <button className="bg-red-500 hover:bg-red-600 px-6 rounded-r-full transition-colors text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Street Racers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;