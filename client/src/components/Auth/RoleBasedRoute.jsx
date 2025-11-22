import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Loader from '../Shared/Loader';

const RoleBasedRoute = ({ children, allowedRoles = [], fallbackRoute = '/dashboard' }) => {
  const { loading, isAuthenticated, hasAnyRole } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size="lg" />
      </div>
    );
  }

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  if (!hasAnyRole(allowedRoles)) {
    return <Navigate to={fallbackRoute} replace />;
  }

  return children;
};

export default RoleBasedRoute;
