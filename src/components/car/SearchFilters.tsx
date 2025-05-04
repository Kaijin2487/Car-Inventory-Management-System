import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchFilters = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    minYear: '',
    maxYear: '',
    bodyType: '',
  });
  
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    
    // Add all non-empty filters to query params
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        queryParams.append(key, value);
      }
    });
    
    // Navigate to search results
    navigate(`/cars?${queryParams.toString()}`);
  };
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
  const expandVariants = {
    collapsed: { height: "auto" },
    expanded: { height: "auto" }
  };
  
  const bodyTypes = [
    'All Types', 'Sedan', 'SUV', 'Truck', 'Coupe', 
    'Hatchback', 'Convertible', 'Wagon', 'Van'
  ];

  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <form onSubmit={handleSearch}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-neutral-800">Find Your Perfect Car</h3>
            <button
              type="button"
              onClick={toggleExpanded}
              className="flex items-center text-primary-500 text-sm font-medium hover:text-primary-600"
            >
              <Filter className="h-4 w-4 mr-1" />
              {isExpanded ? "Less Filters" : "More Filters"}
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="keyword" className="block text-sm font-medium text-neutral-700 mb-1">
                Search by Keyword
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-neutral-400" />
                </div>
                <input
                  type="text"
                  name="keyword"
                  id="keyword"
                  value={filters.keyword}
                  onChange={handleFilterChange}
                  className="input pl-10"
                  placeholder="Make, model, or keyword..."
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-neutral-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="input"
                placeholder="City, state, or zip..."
              />
            </div>
            
            <div>
              <label htmlFor="bodyType" className="block text-sm font-medium text-neutral-700 mb-1">
                Vehicle Type
              </label>
              <select
                name="bodyType"
                id="bodyType"
                value={filters.bodyType}
                onChange={handleFilterChange}
                className="select"
              >
                {bodyTypes.map((type) => (
                  <option key={type} value={type === 'All Types' ? '' : type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
          
          <motion.div
            variants={expandVariants}
            initial="collapsed"
            animate={isExpanded ? "expanded" : "collapsed"}
            className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${isExpanded ? 'block' : 'hidden'}`}
          >
            <div>
              <label htmlFor="minPrice" className="block text-sm font-medium text-neutral-700 mb-1">
                Min Price
              </label>
              <input
                type="number"
                name="minPrice"
                id="minPrice"
                value={filters.minPrice}
                onChange={handleFilterChange}
                className="input"
                placeholder="Min $"
                min="0"
              />
            </div>
            
            <div>
              <label htmlFor="maxPrice" className="block text-sm font-medium text-neutral-700 mb-1">
                Max Price
              </label>
              <input
                type="number"
                name="maxPrice"
                id="maxPrice"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                className="input"
                placeholder="Max $"
                min="0"
              />
            </div>
            
            <div>
              <label htmlFor="minYear" className="block text-sm font-medium text-neutral-700 mb-1">
                Min Year
              </label>
              <input
                type="number"
                name="minYear"
                id="minYear"
                value={filters.minYear}
                onChange={handleFilterChange}
                className="input"
                placeholder="From Year"
                min="1900"
                max={new Date().getFullYear()}
              />
            </div>
            
            <div>
              <label htmlFor="maxYear" className="block text-sm font-medium text-neutral-700 mb-1">
                Max Year
              </label>
              <input
                type="number"
                name="maxYear"
                id="maxYear"
                value={filters.maxYear}
                onChange={handleFilterChange}
                className="input"
                placeholder="To Year"
                min="1900"
                max={new Date().getFullYear()}
              />
            </div>
          </motion.div>
          
          <div className="mt-6 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-primary py-3 px-8 flex items-center"
            >
              <Search className="h-5 w-5 mr-2" />
              Search Vehicles
              <ArrowRight className="h-4 w-4 ml-2" />
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default SearchFilters;