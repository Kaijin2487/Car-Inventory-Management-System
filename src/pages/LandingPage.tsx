import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Users, Car, Clock } from 'lucide-react';
import SearchFilters from '../components/car/SearchFilters';
import FeaturedCars from '../components/car/FeaturedCars';
import DealerSpotlights from '../components/dealer/DealerSpotlights';

const LandingPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 opacity-90 z-0"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        ></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center text-white max-w-3xl mx-auto"
          >
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Find Your Perfect Car, <br />Simplified
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl opacity-90 mb-10"
            >
              Connect with trusted dealers and find your dream car with our powerful search tools and verified listings.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/register/buyer" className="btn bg-accent-500 hover:bg-accent-600 text-white font-medium px-6 py-3 text-lg">
                Register as Buyer
              </Link>
              <Link to="/register/dealer" className="btn bg-white hover:bg-neutral-100 text-primary-700 font-medium px-6 py-3 text-lg">
                Register as Dealer
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="container-custom relative z-10 -mb-24 mt-12">
          <SearchFilters />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white mt-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Why Choose AutoInventory</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              We connect buyers and sellers in a trusted marketplace with tools to make the car buying process simple and transparent.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Trusted Dealers</h3>
              <p className="text-neutral-600">
                All dealers are verified to ensure you're working with legitimate businesses.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-accent-100 p-4 rounded-full mb-4">
                <Car className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Extensive Inventory</h3>
              <p className="text-neutral-600">
                Browse thousands of vehicles with detailed specifications and high-quality photos.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-success-100 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Direct Communication</h3>
              <p className="text-neutral-600">
                Connect directly with dealers to ask questions and schedule test drives.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-warning-100 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-warning-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Real-Time Updates</h3>
              <p className="text-neutral-600">
                Receive notifications about price drops and new listings that match your criteria.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Cars Section */}
      <FeaturedCars />
      
      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">How It Works</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our platform makes it easy to find, evaluate, and purchase your next car in a few simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pb-8"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary-100 text-primary-600 font-bold rounded-full h-16 w-16 flex items-center justify-center text-2xl">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3 text-center">
                Create Your Account
              </h3>
              <p className="text-neutral-600 text-center">
                Sign up as a buyer to browse listings or as a dealer to showcase your inventory.
              </p>
              
              {/* Right arrow for desktop */}
              <div className="hidden md:block absolute right-0 top-1/3 transform translate-x-1/2">
                <ChevronRight className="h-8 w-8 text-neutral-300" />
              </div>
              
              {/* Down arrow for mobile */}
              <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-90">
                <ChevronRight className="h-8 w-8 text-neutral-300" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative pb-8"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary-100 text-primary-600 font-bold rounded-full h-16 w-16 flex items-center justify-center text-2xl">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3 text-center">
                Search & Filter
              </h3>
              <p className="text-neutral-600 text-center">
                Use our powerful search tools to find vehicles that match your exact specifications.
              </p>
              
              {/* Right arrow for desktop */}
              <div className="hidden md:block absolute right-0 top-1/3 transform translate-x-1/2">
                <ChevronRight className="h-8 w-8 text-neutral-300" />
              </div>
              
              {/* Down arrow for mobile */}
              <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-90">
                <ChevronRight className="h-8 w-8 text-neutral-300" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary-100 text-primary-600 font-bold rounded-full h-16 w-16 flex items-center justify-center text-2xl">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-3 text-center">
                Connect & Purchase
              </h3>
              <p className="text-neutral-600 text-center">
                Contact dealers directly, schedule test drives, and complete your purchase with confidence.
              </p>
            </motion.div>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/register/buyer" className="btn-primary inline-flex items-center">
              Get Started Now
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Dealer Spotlights Section */}
      <DealerSpotlights />
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Car?</h2>
            <p className="text-lg opacity-90 mb-8">
              Join thousands of satisfied customers who have found their dream cars through our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/register/buyer" className="btn bg-white hover:bg-neutral-100 text-primary-700 font-medium px-6 py-3">
                Register as Buyer
              </Link>
              <Link to="/register/dealer" className="btn bg-accent-500 hover:bg-accent-600 text-white font-medium px-6 py-3">
                Register as Dealer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;