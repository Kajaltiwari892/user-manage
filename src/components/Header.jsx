import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Product', path: '/product' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <>
      {/* Feature Announcement Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm text-center py-2"
      >
        <span className="animate-pulse">✨</span> New Feature Released!{' '}
        <a href="/features" className="font-medium underline hover:text-purple-100">
          Explore Now →
        </a>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2 group"
            >
             
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent hover:text-purple-700 transition-colors">
                CitySlicka
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative group text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1"
                  >
                    {link.name}
                    {link.name === 'Features' && (
                      <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-medium ml-2">
                        New
                      </span>
                    )}
                  </motion.span>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Auth Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-4"
            >
              <div className="hidden md:flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className="relative group px-4 py-2"
                >
                  <span className="text-purple-600 group-hover:text-indigo-700 transition-colors font-medium">
                    <motion.span whileHover={{ scale: 1.05 }}>
                      Login
                    </motion.span>
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-600 group-hover:w-full transition-all duration-300" />
                </Link>
                
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-purple-200"
                >
                 SignUp
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-purple-600 p-2 rounded-lg hover:bg-purple-50 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute w-full bg-white shadow-lg"
          >
            <div className="px-4 pt-2 pb-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t pt-4">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block mx-4 mt-2 px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Header;