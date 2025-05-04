import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Eye, EyeOff, User, Mail, Phone, Lock } from 'lucide-react';
import { useAuth, BuyerRegistrationData } from '../../contexts/AuthContext';

const RegisterBuyerPage = () => {
  const { registerBuyer } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm<BuyerRegistrationData>();
  
  const onSubmit = async (data: BuyerRegistrationData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      await registerBuyer(data);
      // No need to navigate here as the auth context will handle it
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to register');
    } finally {
      setIsLoading(false);
    }
  };
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div className="min-h-[calc(100vh-200px)] py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">Create Buyer Account</h1>
          <p className="text-neutral-600">Find and purchase your perfect car</p>
        </div>
        
        {error && (
          <div className="bg-accent-50 text-accent-500 px-4 py-3 rounded-md mb-6">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                <User className="h-5 w-5" />
              </div>
              <input
                id="fullName"
                type="text"
                className={`input pl-10 ${errors.fullName ? 'border-accent-500 focus:ring-accent-500' : ''}`}
                placeholder="John Smith"
                {...register('fullName', { 
                  required: 'Full name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters'
                  }
                })}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-sm text-accent-500">{errors.fullName.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                <Mail className="h-5 w-5" />
              </div>
              <input
                id="email"
                type="email"
                className={`input pl-10 ${errors.email ? 'border-accent-500 focus:ring-accent-500' : ''}`}
                placeholder="you@example.com"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Please enter a valid email'
                  }
                })}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-accent-500">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                <Phone className="h-5 w-5" />
              </div>
              <input
                id="phone"
                type="tel"
                className={`input pl-10 ${errors.phone ? 'border-accent-500 focus:ring-accent-500' : ''}`}
                placeholder="(123) 456-7890"
                {...register('phone', { 
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[\d\s()+-.]*$/,
                    message: 'Please enter a valid phone number'
                  }
                })}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-accent-500">{errors.phone.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
              Password
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                <Lock className="h-5 w-5" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className={`input pl-10 ${errors.password ? 'border-accent-500 focus:ring-accent-500' : ''}`}
                placeholder="••••••••"
                {...register('password', { 
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                })}
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-accent-500">{errors.password.message}</p>
            )}
          </div>
          
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="checkbox"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-neutral-600">
              I agree to the{' '}
              <Link to="/terms" className="font-medium text-primary-500 hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="font-medium text-primary-500 hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>
          
          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full py-2 flex justify-center"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </span>
              ) : (
                'Create Account'
              )}
            </motion.button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-neutral-600 text-sm">
            Are you a dealer?{' '}
            <Link to="/register/dealer" className="font-medium text-primary-500 hover:text-primary-600">
              Register as a dealer
            </Link>
          </p>
          <p className="text-neutral-600 text-sm mt-2">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-primary-500 hover:text-primary-600">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterBuyerPage;