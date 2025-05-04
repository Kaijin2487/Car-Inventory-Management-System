import { motion } from 'framer-motion';
import DealerSpotlights from '../components/dealer/DealerSpotlights';
import { mockDealers } from '../data/mockData';
import { MapPin, Phone, Mail, Star, ExternalLink } from 'lucide-react';

const DealersPage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Our Trusted Dealers</h1>
          <p className="text-neutral-600 max-w-2xl">
            Connect with our network of verified car dealers offering quality vehicles and exceptional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockDealers.map((dealer) => (
            <motion.div
              key={dealer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="h-48 bg-neutral-200 relative overflow-hidden">
                <img
                  src={dealer.logo}
                  alt={dealer.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center">
                  <Star className="h-4 w-4 text-warning-500 fill-current" />
                  <span className="ml-1 text-sm font-medium">{dealer.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{dealer.name}</h3>
                <p className="text-neutral-600 text-sm mb-4">{dealer.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-neutral-600">
                    <MapPin className="h-4 w-4 text-neutral-400 mr-2" />
                    <span className="text-sm">{dealer.address}, {dealer.city}</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <Phone className="h-4 w-4 text-neutral-400 mr-2" />
                    <span className="text-sm">{dealer.phone}</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <Mail className="h-4 w-4 text-neutral-400 mr-2" />
                    <span className="text-sm">{dealer.email}</span>
                  </div>
                </div>

                <button className="btn-primary w-full flex items-center justify-center">
                  View Inventory
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealersPage;