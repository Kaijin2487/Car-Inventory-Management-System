import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Gauge, Users, Fuel, Car as CarIcon, Palette, Wine as Engine, DoorOpen, Check, MapPin, Phone, Mail, ArrowLeft } from 'lucide-react';
import { mockCars } from '../data/mockData';
import { CarType } from '../types';

const CarDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  
  // Find the car by ID
  const car = mockCars.find(car => car.id === id) as CarType;
  
  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-800 mb-4">Car Not Found</h2>
          <p className="text-neutral-600 mb-6">The car you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }
  
  // Format price in USD
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(car.price);
  
  // Format mileage with commas
  const formattedMileage = new Intl.NumberFormat('en-US').format(car.mileage);
  
  const toggleContactModal = () => {
    setContactModalOpen(!contactModalOpen);
  };
  
  return (
    <div className="min-h-screen bg-neutral-50 py-10">
      <div className="container-custom">
        <div className="mb-6">
          <Link to="/" className="flex items-center text-primary-600 hover:text-primary-700">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to listings
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Car details header */}
          <div className="p-6 border-b border-neutral-200">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">
                  {car.year} {car.make} {car.model}
                </h1>
                <div className="flex items-center mt-2 text-neutral-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{car.dealerLocation}</span>
                  <span className="mx-2">•</span>
                  <span>ID: {car.id.split('-')[1]}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-600">{formattedPrice}</div>
                <div className="text-sm text-neutral-500 mt-1">Listed on {new Date(car.listingDate).toLocaleDateString()}</div>
              </div>
            </div>
          </div>
          
          {/* Car images and details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <div className="md:col-span-2">
              <div className="mb-4 rounded-lg overflow-hidden bg-neutral-100 h-64 md:h-96">
                <motion.img 
                  src={car.images[activeImageIndex]} 
                  alt={`${car.year} ${car.make} ${car.model}`} 
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {car.images.map((image, index) => (
                  <div 
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-24 h-20 flex-shrink-0 rounded-md overflow-hidden cursor-pointer ${
                      activeImageIndex === index ? 'ring-2 ring-primary-500' : ''
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Thumbnail ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-neutral-800 mb-4">
                  Car Details
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center p-3 bg-neutral-50 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary-500 mb-2" />
                    <span className="text-sm text-neutral-500">Year</span>
                    <span className="font-medium">{car.year}</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-3 bg-neutral-50 rounded-lg">
                    <Gauge className="h-6 w-6 text-primary-500 mb-2" />
                    <span className="text-sm text-neutral-500">Mileage</span>
                    <span className="font-medium">{formattedMileage} mi</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-3 bg-neutral-50 rounded-lg">
                    <Fuel className="h-6 w-6 text-primary-500 mb-2" />
                    <span className="text-sm text-neutral-500">Fuel</span>
                    <span className="font-medium">{car.fuelType}</span>
                  </div>
                  
                  <div className="flex flex-col items-center p-3 bg-neutral-50 rounded-lg">
                    <Users className="h-6 w-6 text-primary-500 mb-2" />
                    <span className="text-sm text-neutral-500">Owners</span>
                    <span className="font-medium">{car.previousOwners}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                      Specifications
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center text-neutral-600">
                          <CarIcon className="h-4 w-4 mr-2 text-neutral-400" />
                          Body Type
                        </div>
                        <div className="font-medium">{car.bodyType}</div>
                      </div>
                      
                      <div className="flex justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center text-neutral-600">
                          <span className="inline-block w-4 mr-2 text-center text-neutral-400">A</span>
                          Transmission
                        </div>
                        <div className="font-medium">{car.transmission}</div>
                      </div>
                      
                      <div className="flex justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center text-neutral-600">
                          <Palette className="h-4 w-4 mr-2 text-neutral-400" />
                          Color
                        </div>
                        <div className="font-medium">{car.color}</div>
                      </div>
                      
                      <div className="flex justify-between py-2 border-b border-neutral-100">
                        <div className="flex items-center text-neutral-600">
                          <Engine className="h-4 w-4 mr-2 text-neutral-400" />
                          Engine
                        </div>
                        <div className="font-medium">{car.engineSize}</div>
                      </div>
                      
                      <div className="flex justify-between py-2">
                        <div className="flex items-center text-neutral-600">
                          <DoorOpen className="h-4 w-4 mr-2 text-neutral-400" />
                          Doors
                        </div>
                        <div className="font-medium">{car.doors}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                      Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                      {car.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <Check className="h-4 w-4 text-success-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-neutral-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                    Description
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {car.description}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-neutral-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">
                  Dealer Information
                </h3>
                
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-neutral-200 flex items-center justify-center overflow-hidden mr-3">
                    <img 
                      src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt={car.dealerName}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">{car.dealerName}</h4>
                    <p className="text-sm text-neutral-500">{car.dealerLocation}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-neutral-600">
                    <Phone className="h-4 w-4 mr-3 text-neutral-400" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <Mail className="h-4 w-4 mr-3 text-neutral-400" />
                    <span>contact@{car.dealerName.toLowerCase().replace(/\s+/g, '')}.com</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={toggleContactModal}
                    className="btn-primary w-full py-3"
                  >
                    Contact Dealer
                  </motion.button>
                  
                  <button className="btn-outline w-full py-3">
                    Schedule Test Drive
                  </button>
                  
                  <button className="btn-secondary w-full py-3">
                    Save to Favorites
                  </button>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-xs text-neutral-500">
                    Vehicle ID: {car.vin} • Last Updated: {new Date(car.listingDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Modal */}
      {contactModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" onClick={toggleContactModal}>
              <div className="absolute inset-0 bg-neutral-900 opacity-75"></div>
            </div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-neutral-900 mb-4">
                      Contact Dealer about {car.year} {car.make} {car.model}
                    </h3>
                    
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="input mt-1"
                          placeholder="John Smith"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="input mt-1"
                          placeholder="you@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="input mt-1"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="input mt-1"
                          placeholder="I'm interested in this car. Please contact me with more information."
                          defaultValue={`I'm interested in the ${car.year} ${car.make} ${car.model} (ID: ${car.id.split('-')[1]}). Please contact me with more information.`}
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={toggleContactModal}
                >
                  Send Message
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-neutral-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-neutral-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={toggleContactModal}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CarDetailsPage;