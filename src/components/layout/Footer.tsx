import { Link } from 'react-router-dom';
import { Car, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">AutoInventory</span>
            </div>
            <p className="text-neutral-400 text-sm">
              The premier platform for car inventory management, connecting dealers and buyers
              in a seamless automotive marketplace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-medium mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link to="/dealers" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Find Dealers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h6 className="text-lg font-medium mb-4">For Users</h6>
            <ul className="space-y-2">
              <li>
                <Link to="/register/buyer" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Register as Buyer
                </Link>
              </li>
              <li>
                <Link to="/register/dealer" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Register as Dealer
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="text-lg font-medium mb-4">Contact Us</h6>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-2 shrink-0 mt-0.5" />
                <span className="text-neutral-400">
                  123 Auto Drive, Car City, 10001, USA
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-2 shrink-0" />
                <span className="text-neutral-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-2 shrink-0" />
                <span className="text-neutral-400">info@autoinventory.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              &copy; {currentYear} AutoInventory. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-neutral-400 hover:text-primary-400 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-neutral-400 hover:text-primary-400 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-neutral-400 hover:text-primary-400 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;