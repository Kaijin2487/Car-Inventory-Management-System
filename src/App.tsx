import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useAuth } from './hooks/useAuth';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterBuyerPage from './pages/auth/RegisterBuyerPage';
import RegisterDealerPage from './pages/auth/RegisterDealerPage';
import BuyerDashboardPage from './pages/dashboard/BuyerDashboardPage';
import DealerDashboardPage from './pages/dashboard/DealerDashboardPage';
import CarDetailsPage from './pages/CarDetailsPage';
import CarsPage from './pages/CarsPage';
import DealersPage from './pages/DealersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Components
import ProtectedRoute from './components/auth/ProtectedRoute';
import Layout from './components/layout/Layout';

function App() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register/buyer" element={<RegisterBuyerPage />} />
          <Route path="register/dealer" element={<RegisterDealerPage />} />
          <Route path="cars" element={<CarsPage />} />
          <Route path="cars/:id" element={<CarDetailsPage />} />
          <Route path="dealers" element={<DealersPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          
          {/* Protected Buyer Routes */}
          <Route 
            path="buyer/*" 
            element={
              <ProtectedRoute isAllowed={isAuthenticated && true} redirectPath="/login">
                <Routes>
                  <Route path="dashboard" element={<BuyerDashboardPage />} />
                </Routes>
              </ProtectedRoute>
            } 
          />
          
          {/* Protected Dealer Routes */}
          <Route 
            path="dealer/*" 
            element={
              <ProtectedRoute isAllowed={isAuthenticated && true} redirectPath="/login">
                <Routes>
                  <Route path="dashboard" element={<DealerDashboardPage />} />
                </Routes>
              </ProtectedRoute>
            } 
          />
          
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;