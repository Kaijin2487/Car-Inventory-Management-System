import { createContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Re-export useAuth hook
export { useAuth } from '../hooks/useAuth';

// Types
export type UserRole = 'buyer' | 'dealer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  // Additional fields based on role
  dealerInfo?: {
    showroomName: string;
    showroomAddress: string;
  };
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  registerBuyer: (data: BuyerRegistrationData) => Promise<void>;
  registerDealer: (data: DealerRegistrationData) => Promise<void>;
  logout: () => void;
}

export interface BuyerRegistrationData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

export interface DealerRegistrationData {
  showroomName: string;
  showroomAddress: string;
  ownerName: string;
  email: string;
  phone: string;
  password: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  // Check for existing session on load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Mock login function (in real app, this would call an API)
  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock validation (in real app, this would be done by the backend)
    if (email && password) {
      // Check if it's a dealer (mocking different user types)
      const isDealer = email.includes('dealer');
      
      const newUser: User = {
        id: Math.random().toString(36).substring(2, 9),
        name: isDealer ? 'Dealer User' : 'Buyer User',
        email,
        role: isDealer ? 'dealer' : 'buyer',
        ...(isDealer && {
          dealerInfo: {
            showroomName: 'Sample Showroom',
            showroomAddress: '123 Car Street, Autoville'
          }
        })
      };
      
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(newUser));
      
      // Redirect based on role
      navigate(isDealer ? '/dealer/dashboard' : '/buyer/dashboard');
    } else {
      throw new Error('Invalid credentials');
    }
  };

  // Mock register functions
  const registerBuyer = async (data: BuyerRegistrationData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Math.random().toString(36).substring(2, 9),
      name: data.fullName,
      email: data.email,
      role: 'buyer'
    };
    
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(newUser));
    
    navigate('/buyer/dashboard');
  };

  const registerDealer = async (data: DealerRegistrationData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Math.random().toString(36).substring(2, 9),
      name: data.ownerName,
      email: data.email,
      role: 'dealer',
      dealerInfo: {
        showroomName: data.showroomName,
        showroomAddress: data.showroomAddress
      }
    };
    
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(newUser));
    
    navigate('/dealer/dashboard');
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    navigate('/');
  };

  const value = {
    user,
    isAuthenticated,
    login,
    registerBuyer,
    registerDealer,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};