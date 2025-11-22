import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import logo from '../../assets/logo.png';

const DashboardLayout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getMenuItems = () => {
    if (!user) return [];
    
    const baseItems = [
      { name: 'Overview', path: '/dashboard', icon: '📊' },
      { name: 'Settings', path: '/dashboard/settings', icon: '⚙️' },
    ];

    if (user.role === 'admin') {
      return [
        ...baseItems,
        { name: 'Manage Experts', path: '/dashboard/experts', icon: '👨‍⚕️' },
        { name: 'Manage Users', path: '/dashboard/users', icon: '👥' },
        { name: 'Appointments', path: '/dashboard/appointments', icon: '📅' },
        { name: 'Messages', path: '/dashboard/messages', icon: '💬' },
        { name: 'Reports', path: '/dashboard/reports', icon: '📈' },
      ];
    } else if (user.role === 'doctor') {
      return [
        ...baseItems,
        { name: 'My Patients', path: '/dashboard/patients', icon: '👥' },
        { name: 'Appointments', path: '/dashboard/appointments', icon: '📅' },
        { name: 'Treatment Plans', path: '/dashboard/treatments', icon: '📝' },
        { name: 'Reports', path: '/dashboard/reports', icon: '📈' },
        { name: 'Messages', path: '/dashboard/messages', icon: '💬' },
        { name: 'Schedule', path: '/dashboard/schedule', icon: '📋' },
      ];
    } else {
      return [
        ...baseItems,
        { name: 'My Appointments', path: '/dashboard/appointments', icon: '📅' },
        { name: 'My Exercises', path: '/dashboard/exercises', icon: '🏃' },
        { name: 'Progress', path: '/dashboard/progress', icon: '📊' },
        { name: 'Messages', path: '/dashboard/messages', icon: '💬' },
      ];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-3" />
            <span className="text-xl font-bold text-gray-900">StrideWell</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="mt-8 px-6" role="navigation" aria-label="Dashboard">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors"
            >
              <span className="mr-3">🚪</span>
              Logout
            </button>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
              aria-label="Open sidebar menu"
              aria-controls="dashboard-sidebar"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user?.username?.charAt(0)?.toUpperCase() || 'U'}
                  </span>
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">{user?.username || 'User'}</p>
                  <p className="text-xs text-gray-500 capitalize">
                    {user?.role || 'user'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;