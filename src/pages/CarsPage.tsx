import { useState } from 'react';
import { motion } from 'framer-motion';
import SearchFilters from '../components/car/SearchFilters';
import CarInventory from '../components/dashboard/CarInventory';

const CarsPage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Available Cars</h1>
          <p className="text-neutral-600 max-w-2xl">
            Browse our extensive collection of quality vehicles. Use the filters to find your perfect match.
          </p>
        </motion.div>

        <div className="mb-8">
          <SearchFilters />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <CarInventory isDealer={false} />
        </motion.div>
      </div>
    </div>
  );
};

export default CarsPage;