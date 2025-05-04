import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Gauge, Users } from 'lucide-react';
import { CarType } from '../../types';

interface CarCardProps {
  car: CarType;
  index: number;
}

const CarCard = ({ car, index }: CarCardProps) => {
  // Animation variants with staggered delay
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4,
        delay: index * 0.1 // Staggered animation
      }
    },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  // Format price in USD
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(car.price);

  // Format mileage with commas
  const formattedMileage = new Intl.NumberFormat('en-US').format(car.mileage);

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="card overflow-hidden"
    >
      <Link to={`/cars/${car.id}`} className="block">
        <div className="relative h-48 overflow-hidden bg-neutral-200">
          {car.isFeatured && (
            <div className="absolute top-0 left-0 bg-accent-500 text-white text-xs font-semibold px-3 py-1 z-10">
              Featured
            </div>
          )}
          <img 
            src={car.mainImage} 
            alt={`${car.year} ${car.make} ${car.model}`} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-neutral-800 line-clamp-1">
              {car.year} {car.make} {car.model}
            </h3>
            <span className="text-lg font-bold text-primary-600">
              {formattedPrice}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-y-2 mb-3">
            <div className="flex items-center text-sm text-neutral-600">
              <MapPin className="h-4 w-4 mr-1 text-neutral-400" />
              <span className="truncate">{car.dealerLocation}</span>
            </div>
            <div className="flex items-center text-sm text-neutral-600">
              <Calendar className="h-4 w-4 mr-1 text-neutral-400" />
              <span>{car.year}</span>
            </div>
            <div className="flex items-center text-sm text-neutral-600">
              <Gauge className="h-4 w-4 mr-1 text-neutral-400" />
              <span>{formattedMileage} mi</span>
            </div>
            <div className="flex items-center text-sm text-neutral-600">
              <Users className="h-4 w-4 mr-1 text-neutral-400" />
              <span>{car.previousOwners} {car.previousOwners === 1 ? 'Owner' : 'Owners'}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-3">
            <span className="inline-block bg-neutral-100 rounded-full px-2 py-1 text-xs font-medium text-neutral-600">
              {car.bodyType}
            </span>
            <span className="inline-block bg-neutral-100 rounded-full px-2 py-1 text-xs font-medium text-neutral-600">
              {car.transmission}
            </span>
            <span className="inline-block bg-neutral-100 rounded-full px-2 py-1 text-xs font-medium text-neutral-600">
              {car.fuelType}
            </span>
          </div>
          
          <div className="flex justify-between items-center pt-2 border-t border-neutral-200">
            <span className="text-sm text-neutral-500">
              {car.dealerName}
            </span>
            <motion.span 
              className="text-primary-500 text-sm font-medium"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              View Details →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CarCard;