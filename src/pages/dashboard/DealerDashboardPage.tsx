import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import CarInventory from '../../components/dashboard/CarInventory';
import DealerStats from '../../components/dashboard/DealerStats';

const DealerDashboardPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'inventory'>('overview');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="bg-neutral-50 min-h-screen py-10">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-3xl font-bold text-neutral-900 mb-2"
          >
            Dealer Dashboard
          </motion.h1>
          <motion.p variants={itemVariants} className="text-neutral-600">
            Welcome, {user?.dealerInfo?.showroomName || user?.name}
          </motion.p>
        </motion.div>
        
        <div className="flex mb-6 border-b border-neutral-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 font-medium text-base ${
              activeTab === 'overview' 
                ? 'text-primary-600 border-b-2 border-primary-600' 
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-4 py-3 font-medium text-base ${
              activeTab === 'inventory' 
                ? 'text-primary-600 border-b-2 border-primary-600' 
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Inventory Management
          </button>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-lg shadow-sm p-6"
        >
          {activeTab === 'overview' ? (
            <DealerStats />
          ) : (
            <CarInventory isDealer={true} />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default DealerDashboardPage;