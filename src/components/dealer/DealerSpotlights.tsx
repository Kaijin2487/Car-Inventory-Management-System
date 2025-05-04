import { motion } from 'framer-motion';
import { Star, MapPin, Calendar, Phone } from 'lucide-react';
import { mockDealers } from '../../data/mockData';

const DealerSpotlights = () => {
  // Get top 3 dealers by rating
  const topDealers = [...mockDealers]
    .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    .slice(0, 3);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const dealerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-12 bg-neutral-50">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-3">Featured Dealers</h2>
          <p className="text-neutral-600 max-w-xl mx-auto">
            Connect with our top-rated dealerships offering exceptional service and quality vehicles.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {topDealers.map((dealer) => (
            <motion.div 
              key={dealer.id}
              variants={dealerVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="card p-6 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full w-16 h-16 overflow-hidden bg-neutral-200 flex-shrink-0">
                  <img 
                    src={dealer.logo} 
                    alt={dealer.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-neutral-800">{dealer.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-warning-500 fill-current" />
                    <span className="text-sm font-medium text-neutral-600 ml-1">{dealer.rating}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-neutral-600 mb-4 flex-grow">
                {dealer.description}
              </p>
              
              <div className="space-y-2 text-sm text-neutral-600 mb-4">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-neutral-400 mt-1 mr-2" />
                  <span>{dealer.address}, {dealer.city}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-neutral-400 mr-2" />
                  <span>{dealer.phone}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-neutral-400 mr-2" />
                  <span>Established {dealer.establishedYear}</span>
                </div>
              </div>
              
              <div className="mt-auto">
                <button className="btn-outline w-full">
                  View Inventory
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DealerSpotlights;