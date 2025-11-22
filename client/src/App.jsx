import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import Spinner from './components/Feedback/Spinner';
import ErrorBoundary from './components/Feedback/ErrorBoundary';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import RoleBasedRoute from './components/Auth/RoleBasedRoute';

// Public pages
const Home = lazy(() => import('./pages/Home'));
const Exercises = lazy(() => import('./pages/Exercises'));
const About = lazy(() => import('./pages/About'));
const Experts = lazy(() => import('./pages/Experts'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const NotFound = lazy(() => import('./pages/NotFound'));
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Appointment from './pages/Appointment';
import DoctorProfile from './pages/DoctorProfile';

// Role-specific dashboards
import PatientDashboard from './pages/Patient/Dashboard';
import DoctorDashboard from './pages/Doctor/Dashboard';
import AdminDashboard from './pages/Admin/Dashboard';
import Dashboard from './pages/Dashboard/Dashboard';

// Role-specific pages
import PatientAppointments from './pages/Patient/Appointments';
import DoctorPatients from './pages/Doctor/Patients';
import AdminUserManagement from './pages/Admin/UserManagement';

function App() {
  return (
    <AuthProvider>
      <ErrorBoundary>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<Spinner />}>
              <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/doctors/:id" element={<DoctorProfile />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/appointment" element={<Appointment />} />

            {/* Protected routes - General dashboard redirect */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <DashboardRedirect />
                </ProtectedRoute>
              } 
            />

            {/* Unified dashboard with nested routes */}
            <Route 
              path="/dashboard/*" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />

            {/* Patient routes */}
            <Route 
              path="/patient/dashboard" 
              element={
                <RoleBasedRoute allowedRoles={['patient']}>
                  <PatientDashboard />
                </RoleBasedRoute>
              } 
            />
            <Route 
              path="/patient/appointments" 
              element={
                <RoleBasedRoute allowedRoles={['patient']}>
                  <PatientAppointments />
                </RoleBasedRoute>
              } 
            />

            {/* Doctor routes */}
            <Route 
              path="/doctor/dashboard" 
              element={
                <RoleBasedRoute allowedRoles={['doctor']}>
                  <DoctorDashboard />
                </RoleBasedRoute>
              } 
            />
            <Route 
              path="/doctor/patients" 
              element={
                <RoleBasedRoute allowedRoles={['doctor']}>
                  <DoctorPatients />
                </RoleBasedRoute>
              } 
            />

            {/* Admin routes */}
            <Route 
              path="/admin/dashboard" 
              element={
                <RoleBasedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </RoleBasedRoute>
              } 
            />
            <Route 
              path="/admin/users" 
              element={
                <RoleBasedRoute allowedRoles={['admin']}>
                  <AdminUserManagement />
                </RoleBasedRoute>
              } 
            />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </AuthProvider>
  );
}

// Component to redirect to role-specific dashboard
const DashboardRedirect = () => {
  const { user } = useAuth();
  
  if (user?.role === 'admin') {
    return <Navigate to="/admin/dashboard" replace />;
  } else if (user?.role === 'doctor') {
    return <Navigate to="/doctor/dashboard" replace />;
  } else if (user?.role === 'patient') {
    return <Navigate to="/patient/dashboard" replace />;
  }
  
  return <Navigate to="/login" replace />;
};

export default App;
