import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Loader from '../Shared/Loader';

const ProtectedRoute = ({ children, requiredRoles = [], redirectTo = '/login' }) => {
  const { user, loading, isAuthenticated, hasAnyRole } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size="lg" />
      </div>
    );
  }

  if (!isAuthenticated()) {
    // Redirect to login page with return url
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // If specific roles are required, check if user has any of them
  if (requiredRoles.length > 0 && !hasAnyRole(requiredRoles)) {
    // Redirect to unauthorized page or dashboard based on user role
    const unauthorizedRedirect = user?.role === 'admin' ? '/admin/dashboard' 
      : user?.role === 'doctor' ? '/doctor/dashboard' 
      : '/dashboard';
    
    return <Navigate to={unauthorizedRedirect} replace />;
  }

  return children;
};

export default ProtectedRoute;
