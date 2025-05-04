// Car Type Definition
export interface CarType {
  id: string;
  dealerId: string;
  dealerName: string;
  dealerLocation: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: string;
  fuelType: string;
  bodyType: string;
  color: string;
  engineSize: string;
  doors: number;
  features: string[];
  condition: string;
  description: string;
  images: string[];
  mainImage: string;
  listingDate: string;
  previousOwners: number;
  vin: string;
  isFeatured: boolean;
}

// Dealer Type Definition
export interface DealerType {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  description: string;
  rating: string;
  logo: string;
  establishedYear: number;
}

// Transaction Type Definition
export interface TransactionType {
  id: string;
  carId: string;
  carDetails: {
    make: string;
    model: string;
    year: number;
    price: number;
  };
  dealerId: string;
  dealerName: string;
  buyerName: string;
  buyerEmail: string;
  buyerPhone: string;
  salePrice: number;
  transactionDate: string;
  paymentMethod: string;
  status: string;
}

// Filter Types
export interface CarFilterType {
  priceRange: [number, number];
  yearRange: [number, number];
  make: string[];
  bodyType: string[];
  transmission: string[];
  fuelType: string[];
  location: string[];
}