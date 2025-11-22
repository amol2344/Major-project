import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Overview = () => {
  const { user } = useAuth();

  // Mock data - in real app, this would come from API
  const getStats = () => {
    if (user?.roles?.includes('admin')) {
      return [
        { title: 'Total Users', value: '1,234', change: '+12%', icon: '👥', color: 'blue' },
        { title: 'Total Doctors', value: '89', change: '+5%', icon: '👨‍⚕️', color: 'green' },
        { title: 'Appointments Today', value: '156', change: '+8%', icon: '📅', color: 'purple' },
        { title: 'Revenue This Month', value: '$45,678', change: '+15%', icon: '💰', color: 'yellow' },
      ];
    } else if (user?.roles?.includes('doctor')) {
      return [
        { title: 'My Patients', value: '45', change: '+3', icon: '👥', color: 'blue' },
        { title: 'Appointments Today', value: '12', change: '+2', icon: '📅', color: 'green' },
        { title: 'Pending Reports', value: '8', change: '-2', icon: '📋', color: 'orange' },
        { title: 'Messages', value: '23', change: '+5', icon: '💬', color: 'purple' },
      ];
    } else {
      return [
        { title: 'My Appointments', value: '5', change: '+1', icon: '📅', color: 'blue' },
        { title: 'Upcoming Sessions', value: '2', change: '0', icon: '⏰', color: 'green' },
        { title: 'Completed Sessions', value: '12', change: '+3', icon: '✅', color: 'purple' },
        { title: 'Messages', value: '8', change: '+2', icon: '💬', color: 'orange' },
      ];
    }
  };

  const getRecentActivity = () => {
    if (user?.roles?.includes('admin')) {
      return [
        { type: 'user', message: 'New user registration: John Doe', time: '2 minutes ago', icon: '👤' },
        { type: 'appointment', message: 'Appointment scheduled: Dr. Smith with Patient X', time: '15 minutes ago', icon: '📅' },
        { type: 'doctor', message: 'Dr. Johnson updated their profile', time: '1 hour ago', icon: '👨‍⚕️' },
        { type: 'payment', message: 'Payment received: $150 for consultation', time: '2 hours ago', icon: '💰' },
      ];
    } else if (user?.roles?.includes('doctor')) {
      return [
        { type: 'appointment', message: 'New appointment request from Sarah Wilson', time: '5 minutes ago', icon: '📅' },
        { type: 'patient', message: 'Patient report submitted for review', time: '30 minutes ago', icon: '📋' },
        { type: 'message', message: 'Message received from admin team', time: '1 hour ago', icon: '💬' },
        { type: 'schedule', message: 'Schedule updated for next week', time: '2 hours ago', icon: '📋' },
      ];
    } else {
      return [
        { type: 'appointment', message: 'Appointment confirmed with Dr. Smith', time: '10 minutes ago', icon: '📅' },
        { type: 'exercise', message: 'New exercise assigned: Core strengthening', time: '1 hour ago', icon: '💪' },
        { type: 'message', message: 'Message from Dr. Johnson', time: '2 hours ago', icon: '💬' },
        { type: 'progress', message: 'Progress report updated', time: '1 day ago', icon: '📊' },
      ];
    }
  };

  const getQuickActions = () => {
    if (user?.roles?.includes('admin')) {
      return [
        { name: 'Add New Doctor', icon: '➕', action: '/dashboard/experts/add' },
        { name: 'View Reports', icon: '📊', action: '/dashboard/reports' },
        { name: 'Manage Users', icon: '👥', action: '/dashboard/users' },
        { name: 'System Settings', icon: '⚙️', action: '/dashboard/settings' },
      ];
    } else if (user?.roles?.includes('doctor')) {
      return [
        { name: 'View Patients', icon: '👥', action: '/dashboard/patients' },
        { name: 'Check Schedule', icon: '📅', action: '/dashboard/schedule' },
        { name: 'Review Reports', icon: '📋', action: '/dashboard/reports' },
        { name: 'Send Message', icon: '💬', action: '/dashboard/messages' },
      ];
    } else {
      return [
        { name: 'Book Appointment', icon: '📅', action: '/dashboard/book' },
        { name: 'View History', icon: '📋', action: '/dashboard/history' },
        { name: 'Contact Doctor', icon: '💬', action: '/dashboard/messages' },
        { name: 'Update Profile', icon: '👤', action: '/dashboard/settings' },
      ];
    }
  };

  const stats = getStats();
  const recentActivity = getRecentActivity();
  const quickActions = getQuickActions();

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.username || 'User'}! 👋
        </h1>
        <p className="text-gray-600 mt-2">
          Here's what's happening with your {user?.roles?.[0] || 'account'} today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl bg-${stat.color}-100`}>
                {stat.icon}
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm font-medium ${
                stat.change.startsWith('+') ? 'text-green-600' : 
                stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-1">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Placeholder */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Activity Overview</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-gray-500">Chart visualization would go here</p>
              <p className="text-sm text-gray-400">Integration with Chart.js or Recharts</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="w-full flex items-center p-3 text-left rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg mr-3">{action.icon}</span>
                <span className="text-sm font-medium text-gray-700">{action.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">
                {activity.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">{activity.message}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
