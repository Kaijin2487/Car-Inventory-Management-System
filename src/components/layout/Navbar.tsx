import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dealers', path: '/dealers' },
    { name: 'Cars', path: '/cars' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold text-neutral-900">AutoInventory</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    pathname === link.path
                      ? 'text-primary-500 border-b-2 border-primary-500'
                      : 'text-neutral-600 hover:text-primary-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-neutral-600 mr-2" />
                  <span className="text-sm font-medium text-neutral-700">{user?.name}</span>
                </div>
                <Link
                  to={user?.role === 'dealer' ? '/dealer/dashboard' : '/buyer/dashboard'}
                  className="btn-primary"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center text-neutral-600 hover:text-accent-500"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="btn-outline">
                  Login
                </Link>
                <Link to="/register/buyer" className="btn-primary">
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-neutral-600 hover:text-primary-500"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`text-base font-medium py-2 ${
                  pathname === link.path
                    ? 'text-primary-500'
                    : 'text-neutral-600 hover:text-primary-500'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-neutral-200">
              {isAuthenticated ? (
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-neutral-600 mr-2" />
                    <span className="text-sm font-medium text-neutral-700">{user?.name}</span>
                  </div>
                  <Link
                    to={user?.role === 'dealer' ? '/dealer/dashboard' : '/buyer/dashboard'}
                    onClick={closeMenu}
                    className="btn-primary w-full text-center"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                    className="flex items-center text-neutral-600 hover:text-accent-500"
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-3">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="btn-outline w-full text-center"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register/buyer"
                    onClick={closeMenu}
                    className="btn-primary w-full text-center"
                  >
                    Register as Buyer
                  </Link>
                  <Link
                    to="/register/dealer"
                    onClick={closeMenu}
                    className="btn-accent w-full text-center"
                  >
                    Register as Dealer
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;