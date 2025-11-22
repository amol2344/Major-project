import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import Overview from './Overview';
import ManageExperts from './ManageExperts';
import ManageUsers from './ManageUsers';
import Appointments from './Appointments';
import Messages from './Messages';
import Reports from './Reports';
import Settings from './Settings';
import PatientOverview from '../Patient/Overview';
import MyAppointments from '../Patient/MyAppointments';
import MyExercises from '../Patient/MyExercises';
import PatientProgress from '../Patient/Progress';
import DoctorDashboard from '../Doctor/Dashboard';
import DoctorPatients from '../Doctor/Patients';
import TreatmentPlans from '../Doctor/TreatmentPlans';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();

  // Redirect to login if not authenticated
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return (
    <DashboardLayout>
      <Routes>
        {/* Default route - Overview */}
        <Route index element={<Overview />} />
        
        {/* Admin-only routes */}
        {user?.role === 'admin' && (
          <>
            <Route path="/experts" element={<ManageExperts />} />
            <Route path="/users" element={<ManageUsers />} />
            <Route path="/reports" element={<Reports />} />
          </>
        )}
        
        {/* Doctor-specific routes */}
        {user?.role === 'doctor' && (
          <>
            <Route path="/patients" element={<DoctorPatients />} />
            <Route path="/treatments" element={<TreatmentPlans />} />
            <Route path="/reports" element={<Reports />} />
          </>
        )}
        
        {/* Patient-specific routes */}
        {user?.role === 'patient' && (
          <>
            <Route path="/appointments" element={<MyAppointments />} />
            <Route path="/exercises" element={<MyExercises />} />
            <Route path="/progress" element={<PatientProgress />} />
          </>
        )}
        
        {/* Common routes for all authenticated users */}
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
        
        {/* Catch-all route - redirect to overview */}
        <Route path="*" element={<Navigate to="." replace />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
