import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath: string;
  children: JSX.Element;
}

const ProtectedRoute = ({ 
  isAllowed, 
  redirectPath, 
  children 
}: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;