import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CarCard from './CarCard';
import { featuredCars } from '../../data/mockData';

const FeaturedCars = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 4;
  const totalPages = Math.ceil(featuredCars.length / carsPerPage);
  
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  
  const startIndex = currentPage * carsPerPage;
  const displayedCars = featuredCars.slice(startIndex, startIndex + carsPerPage);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <motion.div 
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-3">Featured Vehicles</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">
            Discover our handpicked selection of premium vehicles available for purchase.
          </p>
        </motion.div>
        
        <div className="relative">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {displayedCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </motion.div>
          
          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={handlePrevPage}
              className="p-2 rounded-full bg-white shadow-md text-neutral-600 hover:text-primary-500 transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-1">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === idx ? 'bg-primary-500 w-4' : 'bg-neutral-300'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNextPage}
              className="p-2 rounded-full bg-white shadow-md text-neutral-600 hover:text-primary-500 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;