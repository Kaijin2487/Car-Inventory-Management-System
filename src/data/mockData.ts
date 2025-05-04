import { CarType } from '../types';

// Generate car images from public API
const generateCarImageUrl = (id: number): string => {
  return `https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800`;
};

// Alternative car images for variety
const carImageUrls = [
  'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800',
];

// Car models list for generating data
const carModels = [
  { make: 'Toyota', models: ['Camry', 'Corolla', 'RAV4', 'Highlander', 'Prius'] },
  { make: 'Honda', models: ['Civic', 'Accord', 'CR-V', 'Pilot', 'HR-V'] },
  { make: 'Ford', models: ['F-150', 'Escape', 'Explorer', 'Mustang', 'Edge'] },
  { make: 'Chevrolet', models: ['Silverado', 'Equinox', 'Malibu', 'Tahoe', 'Traverse'] },
  { make: 'BMW', models: ['3 Series', '5 Series', 'X3', 'X5', '7 Series'] },
  { make: 'Mercedes-Benz', models: ['C-Class', 'E-Class', 'GLC', 'GLE', 'S-Class'] },
  { make: 'Audi', models: ['A4', 'A6', 'Q5', 'Q7', 'A3'] },
  { make: 'Lexus', models: ['RX', 'ES', 'NX', 'IS', 'GX'] },
  { make: 'Hyundai', models: ['Tucson', 'Santa Fe', 'Elantra', 'Sonata', 'Kona'] },
  { make: 'Kia', models: ['Sportage', 'Sorento', 'Forte', 'Telluride', 'Soul'] },
];

// Car types (body styles)
const carTypes = ['Sedan', 'SUV', 'Truck', 'Coupe', 'Hatchback', 'Convertible', 'Wagon', 'Van'];

// Car colors
const carColors = ['Black', 'White', 'Silver', 'Gray', 'Red', 'Blue', 'Green', 'Brown', 'Yellow', 'Orange'];

// Cities for dealer locations
const cities = [
  'New York, NY',
  'Los Angeles, CA',
  'Chicago, IL',
  'Houston, TX',
  'Phoenix, AZ',
  'Philadelphia, PA',
  'San Antonio, TX',
  'San Diego, CA',
  'Dallas, TX',
  'San Jose, CA',
];

// Generate random dealers
export const mockDealers = Array(10).fill(null).map((_, index) => {
  return {
    id: `dealer-${index + 1}`,
    name: `${['Premium', 'Luxury', 'City', 'Metro', 'Elite', 'Capital', 'Golden', 'Silver', 'Diamond', 'Royal'][index]} Auto Mall`,
    email: `dealer${index + 1}@example.com`,
    phone: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
    address: `${Math.floor(Math.random() * 9000) + 1000} ${['Main', 'Broadway', 'First', 'Second', 'Park', 'Oak', 'Pine', 'Cedar', 'Maple', 'Elm'][index]} St`,
    city: cities[index],
    description: 'A trusted dealership providing quality vehicles and exceptional service to our customers for over 20 years.',
    rating: (Math.random() * 2 + 3).toFixed(1), // Rating between 3.0 and 5.0
    logo: `https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800`,
    establishedYear: Math.floor(Math.random() * 30) + 1990,
  };
});

// Generate random cars (10 cars per dealer)
export const mockCars: CarType[] = [];

mockDealers.forEach(dealer => {
  for (let i = 0; i < 10; i++) {
    const randomMakeIndex = Math.floor(Math.random() * carModels.length);
    const randomModelIndex = Math.floor(Math.random() * carModels[randomMakeIndex].models.length);
    const make = carModels[randomMakeIndex].make;
    const model = carModels[randomMakeIndex].models[randomModelIndex];
    const year = Math.floor(Math.random() * 20) + 2003; // Years between 2003 and 2023
    const price = Math.floor(Math.random() * 50000) + 10000; // Price between $10,000 and $60,000
    const mileage = Math.floor(Math.random() * 100000) + 5000; // Mileage between 5,000 and 105,000
    
    const carId = mockCars.length + 1;
    
    mockCars.push({
      id: `car-${carId}`,
      dealerId: dealer.id,
      dealerName: dealer.name,
      dealerLocation: dealer.city,
      make,
      model,
      year,
      price,
      mileage,
      transmission: Math.random() > 0.3 ? 'Automatic' : 'Manual',
      fuelType: ['Gasoline', 'Diesel', 'Hybrid', 'Electric'][Math.floor(Math.random() * 4)],
      bodyType: carTypes[Math.floor(Math.random() * carTypes.length)],
      color: carColors[Math.floor(Math.random() * carColors.length)],
      engineSize: `${(Math.random() * 4 + 1).toFixed(1)}L`,
      doors: [2, 4, 4, 4, 5][Math.floor(Math.random() * 5)],
      features: [
        'Bluetooth',
        'Navigation System',
        'Backup Camera',
        'Sunroof',
        'Leather Seats',
        'Heated Seats',
        'Keyless Entry',
        'Premium Sound',
        'Blind Spot Monitoring',
        'Lane Departure Warning'
      ].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 5) + 3),
      condition: ['Excellent', 'Good', 'Fair', 'Like New'][Math.floor(Math.random() * 4)],
      description: `This ${year} ${make} ${model} is in ${['excellent', 'great', 'good'][Math.floor(Math.random() * 3)]} condition with ${mileage.toLocaleString()} miles. It features a ${['powerful', 'reliable', 'efficient', 'responsive'][Math.floor(Math.random() * 4)]} engine and ${['spacious', 'comfortable', 'luxurious', 'well-appointed'][Math.floor(Math.random() * 4)]} interior. Perfect for ${['families', 'commuters', 'first-time buyers', 'professionals'][Math.floor(Math.random() * 4)]}.`,
      images: [
        carImageUrls[Math.floor(Math.random() * carImageUrls.length)],
        carImageUrls[Math.floor(Math.random() * carImageUrls.length)],
        carImageUrls[Math.floor(Math.random() * carImageUrls.length)]
      ],
      mainImage: carImageUrls[Math.floor(Math.random() * carImageUrls.length)],
      listingDate: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
      previousOwners: Math.floor(Math.random() * 3) + 1,
      vin: `${Math.random().toString(36).substring(2, 10).toUpperCase()}${Math.floor(Math.random() * 10000)}`,
      isFeatured: Math.random() > 0.8, // 20% chance of being featured
    });
  }
});

// Extract featured cars
export const featuredCars = mockCars.filter(car => car.isFeatured);

// Generate transaction data for dealers
export const mockTransactions = mockCars.slice(0, 30).map((car, index) => {
  const transactionDate = new Date(Date.now() - Math.floor(Math.random() * 180) * 24 * 60 * 60 * 1000);
  const buyerNames = [
    'John Smith', 'Emma Johnson', 'Michael Brown', 'Sophia Davis', 'William Miller',
    'Olivia Wilson', 'James Moore', 'Ava Taylor', 'Alexander Anderson', 'Charlotte Thomas'
  ];
  
  return {
    id: `transaction-${index + 1}`,
    carId: car.id,
    carDetails: {
      make: car.make,
      model: car.model,
      year: car.year,
      price: car.price
    },
    dealerId: car.dealerId,
    dealerName: car.dealerName,
    buyerName: buyerNames[Math.floor(Math.random() * buyerNames.length)],
    buyerEmail: `buyer${index + 1}@example.com`,
    buyerPhone: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
    salePrice: Math.round(car.price * (0.9 + Math.random() * 0.1)), // Sale price is between 90% and 100% of listing price
    transactionDate: transactionDate.toISOString(),
    paymentMethod: ['Credit Card', 'Financing', 'Cash', 'Bank Transfer'][Math.floor(Math.random() * 4)],
    status: ['Completed', 'Processing', 'Pending'][Math.floor(Math.random() * 3)],
  };
});