import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import CarInventory from '../../components/dashboard/CarInventory';

const BuyerDashboardPage = () => {
  const { user } = useAuth();
  
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
            Welcome, {user?.name}
          </motion.h1>
          <motion.p variants={itemVariants} className="text-neutral-600">
            Browse available cars and find your perfect match
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <CarInventory isDealer={false} />
        </motion.div>
      </div>
    </div>
  );
};

export default BuyerDashboardPage;