import { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, DollarSign, Users, BarChart3, TrendingUp, TrendingDown } from 'lucide-react';
import { mockCars, mockTransactions } from '../../data/mockData';

const DealerStats = () => {
  const [period, setPeriod] = useState<'week' | 'month' | 'year'>('month');
  
  // In a real app, these would be calculated based on actual data
  // Here we're just demonstrating the UI with mock values
  const stats = {
    week: {
      carsListed: 3,
      carsSold: 1,
      revenue: 28500,
      customers: 4,
      change: 5.3
    },
    month: {
      carsListed: 12,
      carsSold: 5,
      revenue: 142500,
      customers: 18,
      change: 8.7
    },
    year: {
      carsListed: 67,
      carsSold: 38,
      revenue: 1092000,
      customers: 42,
      change: 12.4
    }
  };
  
  const currentStats = stats[period];
  
  const cardVariants = {
    hover: { 
      scale: 1.03,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };
  
  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  // Mock recent transactions
  const recentTransactions = mockTransactions
    .filter(transaction => transaction.dealerId === 'dealer-1') // Filter transactions for the current dealer
    .slice(0, 5); // Get the 5 most recent transactions
  
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-neutral-800">Dashboard Overview</h2>
        
        <div className="flex bg-neutral-100 rounded-lg p-1">
          <button
            onClick={() => setPeriod('week')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              period === 'week' 
                ? 'bg-white shadow-sm text-primary-600' 
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Week
          </button>
          <button
            onClick={() => setPeriod('month')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              period === 'month' 
                ? 'bg-white shadow-sm text-primary-600' 
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Month
          </button>
          <button
            onClick={() => setPeriod('year')}
            className={`px-3 py-1.5 text-sm font-medium rounded-md ${
              period === 'year' 
                ? 'bg-white shadow-sm text-primary-600' 
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Year
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div variants={cardVariants} whileHover="hover" className="card p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-neutral-500">Cars Listed</p>
              <h3 className="text-2xl font-bold text-neutral-800 mt-1">{currentStats.carsListed}</h3>
            </div>
            <div className="bg-primary-100 p-3 rounded-full">
              <Car className="h-6 w-6 text-primary-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <span className={`flex items-center ${
              currentStats.change >= 0 
                ? 'text-success-500' 
                : 'text-accent-500'
            }`}>
              {currentStats.change >= 0 
                ? <TrendingUp className="h-4 w-4 mr-1" /> 
                : <TrendingDown className="h-4 w-4 mr-1" />}
              {Math.abs(currentStats.change)}%
            </span>
            <span className="ml-1.5 text-neutral-500">from previous {period}</span>
          </div>
        </motion.div>
        
        <motion.div variants={cardVariants} whileHover="hover" className="card p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-neutral-500">Cars Sold</p>
              <h3 className="text-2xl font-bold text-neutral-800 mt-1">{currentStats.carsSold}</h3>
            </div>
            <div className="bg-accent-100 p-3 rounded-full">
              <BarChart3 className="h-6 w-6 text-accent-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <span className={`flex items-center ${
              currentStats.change >= 0 
                ? 'text-success-500' 
                : 'text-accent-500'
            }`}>
              {currentStats.change >= 0 
                ? <TrendingUp className="h-4 w-4 mr-1" /> 
                : <TrendingDown className="h-4 w-4 mr-1" />}
              {Math.abs(currentStats.change)}%
            </span>
            <span className="ml-1.5 text-neutral-500">from previous {period}</span>
          </div>
        </motion.div>
        
        <motion.div variants={cardVariants} whileHover="hover" className="card p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-neutral-500">Revenue</p>
              <h3 className="text-2xl font-bold text-neutral-800 mt-1">{formatCurrency(currentStats.revenue)}</h3>
            </div>
            <div className="bg-success-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-success-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <span className={`flex items-center ${
              currentStats.change >= 0 
                ? 'text-success-500' 
                : 'text-accent-500'
            }`}>
              {currentStats.change >= 0 
                ? <TrendingUp className="h-4 w-4 mr-1" /> 
                : <TrendingDown className="h-4 w-4 mr-1" />}
              {Math.abs(currentStats.change)}%
            </span>
            <span className="ml-1.5 text-neutral-500">from previous {period}</span>
          </div>
        </motion.div>
        
        <motion.div variants={cardVariants} whileHover="hover" className="card p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-neutral-500">Customers</p>
              <h3 className="text-2xl font-bold text-neutral-800 mt-1">{currentStats.customers}</h3>
            </div>
            <div className="bg-warning-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-warning-600" />
            </div>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <span className={`flex items-center ${
              currentStats.change >= 0 
                ? 'text-success-500' 
                : 'text-accent-500'
            }`}>
              {currentStats.change >= 0 
                ? <TrendingUp className="h-4 w-4 mr-1" /> 
                : <TrendingDown className="h-4 w-4 mr-1" />}
              {Math.abs(currentStats.change)}%
            </span>
            <span className="ml-1.5 text-neutral-500">from previous {period}</span>
          </div>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Sales */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-neutral-800 mb-4">Recent Sales</h3>
          <div className="space-y-4">
            {recentTransactions.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral-200">
                  <thead>
                    <tr>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Car</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Buyer</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Price</th>
                      <th className="px-3 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {recentTransactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-800">
                          {transaction.carDetails.year} {transaction.carDetails.make} {transaction.carDetails.model}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">
                          {transaction.buyerName}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm font-medium text-success-600">
                          {formatCurrency(transaction.salePrice)}
                        </td>
                        <td className="px-3 py-3 whitespace-nowrap text-sm text-neutral-600">
                          {new Date(transaction.transactionDate).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-neutral-500 text-center py-6">No recent sales</p>
            )}
            
            <div className="text-center">
              <button className="text-primary-500 text-sm font-medium hover:text-primary-600">
                View All Sales →
              </button>
            </div>
          </div>
        </div>
        
        {/* Inventory Summary */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-neutral-800 mb-4">Inventory Summary</h3>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-neutral-600">SUVs</span>
                <span className="text-sm font-medium text-neutral-800">12</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2.5">
                <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-neutral-600">Sedans</span>
                <span className="text-sm font-medium text-neutral-800">8</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2.5">
                <div className="bg-accent-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-neutral-600">Trucks</span>
                <span className="text-sm font-medium text-neutral-800">5</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2.5">
                <div className="bg-success-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-neutral-600">Coupes</span>
                <span className="text-sm font-medium text-neutral-800">3</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2.5">
                <div className="bg-warning-500 h-2.5 rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
            
            <div className="pt-4 mt-4 border-t border-neutral-200">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Total Cars in Inventory</span>
                <span className="font-semibold text-neutral-800">28</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-neutral-600">Average Price</span>
                <span className="font-semibold text-neutral-800">$32,450</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-neutral-600">Average Days Listed</span>
                <span className="font-semibold text-neutral-800">24 days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerStats;