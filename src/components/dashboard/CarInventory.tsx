import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Plus, Grid2X2, List, Search, MapPin, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockCars } from '../../data/mockData';
import { CarType } from '../../types';

interface CarInventoryProps {
  isDealer?: boolean;
}

const CarInventory = ({ isDealer = false }: CarInventoryProps) => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter the cars array based on the role and search term
  const filteredCars = mockCars.filter(car => {
    // For dealers, only show their own cars
    if (isDealer) {
      // In a real app, this would filter by the logged-in dealer's ID
      return car.dealerId === 'dealer-1';
    }
    
    // For all users, filter by search term if provided
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return (
        car.make.toLowerCase().includes(term) ||
        car.model.toLowerCase().includes(term) ||
        car.dealerName.toLowerCase().includes(term) ||
        car.dealerLocation.toLowerCase().includes(term)
      );
    }
    
    return true;
  });
  
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  
  const addNewCar = () => {
    alert('Add new car functionality would open a form in a real app');
  };

  // Format price in USD
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Format mileage with commas
  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-US').format(mileage);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center">
          <h2 className="text-2xl font-semibold text-neutral-800">
            {isDealer ? 'Your Inventory' : 'Available Cars'}
          </h2>
          <span className="ml-2 bg-neutral-200 text-neutral-600 text-sm py-1 px-2 rounded-full">
            {filteredCars.length}
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <Search className="h-4 w-4 text-neutral-400" />
            </div>
            <input
              type="text"
              placeholder="Search cars..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="input pl-10 w-full sm:w-64"
            />
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={toggleFilter}
              className="btn-secondary flex items-center"
            >
              <Filter className="h-4 w-4 mr-1" />
              Filter
            </button>
            
            <div className="flex rounded-md shadow-sm">
              <button
                onClick={() => setView('grid')}
                className={`p-2 rounded-l-md border ${
                  view === 'grid'
                    ? 'bg-primary-500 text-white border-primary-500'
                    : 'bg-white text-neutral-600 border-neutral-300'
                }`}
              >
                <Grid2X2 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setView('list')}
                className={`p-2 rounded-r-md border ${
                  view === 'list'
                    ? 'bg-primary-500 text-white border-primary-500'
                    : 'bg-white text-neutral-600 border-neutral-300'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
            
            {isDealer && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={addNewCar}
                className="btn-primary flex items-center"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Car
              </motion.button>
            )}
          </div>
        </div>
      </div>
      
      {/* Filter panel */}
      {isFilterOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white p-4 rounded-lg shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Price Range
              </label>
              <div className="flex items-center space-x-2">
                <input type="number" placeholder="Min" className="input" />
                <span>-</span>
                <input type="number" placeholder="Max" className="input" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Year
              </label>
              <div className="flex items-center space-x-2">
                <input type="number" placeholder="From" className="input" />
                <span>-</span>
                <input type="number" placeholder="To" className="input" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Make
              </label>
              <select className="select">
                <option value="">All Makes</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Ford">Ford</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">
                Body Type
              </label>
              <select className="select">
                <option value="">All Types</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Truck">Truck</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-end mt-4 space-x-3">
            <button className="btn-secondary">Reset</button>
            <button className="btn-primary">Apply Filters</button>
          </div>
        </motion.div>
      )}
      
      {filteredCars.length > 0 ? (
        view === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car: CarType, index: number) => (
              <Link
                key={car.id}
                to={`/cars/${car.id}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="relative h-48">
                    {car.isFeatured && (
                      <div className="absolute top-0 left-0 bg-accent-500 text-white text-xs font-semibold px-3 py-1 z-10">
                        Featured
                      </div>
                    )}
                    <img
                      src={car.mainImage}
                      alt={`${car.year} ${car.make} ${car.model}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-neutral-800">
                        {car.year} {car.make} {car.model}
                      </h3>
                      <span className="text-lg font-bold text-primary-600">
                        {formatPrice(car.price)}
                      </span>
                    </div>
                    <div className="text-sm text-neutral-600 mb-2">
                      <div className="flex items-center mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {car.dealerLocation}
                      </div>
                      <div className="flex items-center">
                        <Gauge className="h-4 w-4 mr-1" />
                        {formatMileage(car.mileage)} miles
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
                        {car.transmission}
                      </span>
                      <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
                        {car.fuelType}
                      </span>
                      <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
                        {car.bodyType}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCars.map((car: CarType, index: number) => (
              <Link
                key={car.id}
                to={`/cars/${car.id}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="flex">
                    <div className="w-48 h-48 flex-shrink-0">
                      <img
                        src={car.mainImage}
                        alt={`${car.year} ${car.make} ${car.model}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-neutral-800">
                            {car.year} {car.make} {car.model}
                          </h3>
                          <p className="text-neutral-600">{car.dealerName}</p>
                        </div>
                        <span className="text-xl font-bold text-primary-600">
                          {formatPrice(car.price)}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-neutral-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          {car.dealerLocation}
                        </div>
                        <div className="flex items-center text-neutral-600">
                          <Gauge className="h-4 w-4 mr-2" />
                          {formatMileage(car.mileage)} miles
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full">
                          {car.transmission}
                        </span>
                        <span className="text-sm bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full">
                          {car.fuelType}
                        </span>
                        <span className="text-sm bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full">
                          {car.bodyType}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )
      ) : (
        <div className="text-center py-10">
          <p className="text-neutral-600 text-lg">No cars match your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CarInventory;