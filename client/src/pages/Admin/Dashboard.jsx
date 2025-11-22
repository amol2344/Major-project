import { useState } from 'react';
import { 
  FiUsers, 
  FiUserCheck, 
  FiSettings, 
  FiBarChart2, 
  FiShield, 
  FiDatabase,
  FiChevronRight,
  FiUser,
  FiTrendingUp,
  FiActivity,
  FiCalendar,
  FiAlertTriangle
} from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const systemStats = [
    { id: 1, name: 'Total Users', value: '1,247', change: '+12%', changeType: 'positive', icon: FiUsers },
    { id: 2, name: 'Active Doctors', value: '89', change: '+5', changeType: 'positive', icon: FiUserCheck },
    { id: 3, name: 'Monthly Sessions', value: '3,456', change: '+23%', changeType: 'positive', icon: FiActivity },
    { id: 4, name: 'System Uptime', value: '99.9%', change: '0%', changeType: 'neutral', icon: FiTrendingUp },
  ];

  const recentUsers = [
    {
      id: 1,
      name: 'Dr. Sarah Wilson',
      email: 'sarah.wilson@email.com',
      role: 'doctor',
      status: 'pending',
      joinDate: '2023-06-15',
      specialization: 'Orthopedic'
    },
    {
      id: 2,
      name: 'John Smith',
      email: 'john.smith@email.com',
      role: 'patient',
      status: 'active',
      joinDate: '2023-06-14',
      specialization: null
    },
    {
      id: 3,
      name: 'Dr. Michael Chen',
      email: 'michael.chen@email.com',
      role: 'doctor',
      status: 'active',
      joinDate: '2023-06-12',
      specialization: 'Sports Medicine'
    }
  ];

  const systemAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'High Server Load',
      message: 'Server CPU usage is at 85%. Consider scaling resources.',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'info',
      title: 'New Doctor Registration',
      message: 'Dr. Sarah Wilson has requested account verification.',
      time: '4 hours ago'
    },
    {
      id: 3,
      type: 'success',
      title: 'Backup Completed',
      message: 'Daily database backup completed successfully.',
      time: '6 hours ago'
    }
  ];

  const pendingApprovals = [
    {
      id: 1,
      name: 'Dr. Sarah Wilson',
      type: 'Doctor Registration',
      submittedDate: '2023-06-15',
      licenseNumber: 'MD123456',
      specialization: 'Orthopedic'
    },
    {
      id: 2,
      name: 'Dr. James Brown',
      type: 'Doctor Registration',
      submittedDate: '2023-06-14',
      licenseNumber: 'MD789012',
      specialization: 'Cardiology'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-soft">
        <div className="container-responsive py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Admin: {user?.name}</span>
            <button className="p-2 rounded-full hover:bg-gray-100 focus-ring">
              <FiUser className="text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      <div className="container-responsive py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="hidden lg:block bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 w-64">
            <div className="p-4">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {user?.name?.charAt(0) || 'A'}
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">{user?.name}</h3>
                  <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                </div>
              </div>

              <nav className="space-y-1">
                {[
                  { id: 'overview', icon: <FiBarChart2 />, label: 'Overview' },
                  { id: 'users', icon: <FiUsers />, label: 'User Management' },
                  { id: 'approvals', icon: <FiUserCheck />, label: 'Pending Approvals' },
                  { id: 'system', icon: <FiDatabase />, label: 'System Health' },
                  { id: 'security', icon: <FiShield />, label: 'Security' },
                  { id: 'settings', icon: <FiSettings />, label: 'Settings' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-3 py-2.5 rounded-lg text-sm transition-colors focus-ring ${
                      activeTab === item.id 
                        ? 'bg-purple-50 text-purple-600 font-medium' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="ml-3">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Welcome Card */}
                <div className="card p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-1">
                        System Overview
                      </h2>
                      <p className="text-gray-600">Monitor and manage the StrideWell Studio platform.</p>
                    </div>
                    <button className="btn-primary mt-4 md:mt-0">
                      System Health Report
                    </button>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {systemStats.map((stat) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={stat.id} className="card p-4 hover-lift">
                        <div className="flex items-center justify-between mb-2">
                          <IconComponent className="text-purple-600 w-6 h-6" />
                          <span className={`text-xs font-medium ${
                            stat.changeType === 'positive' ? 'text-green-600' : 
                            stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                          }`}>
                            {stat.change}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                          {stat.name}
                        </p>
                        <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                      </div>
                    );
                  })}
                </div>

                {/* System Alerts */}
                <div className="card overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">System Alerts</h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {systemAlerts.map((alert) => (
                      <div key={alert.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-start">
                          <div className={`p-1 rounded-full mr-3 mt-0.5 ${
                            alert.type === 'warning' ? 'bg-yellow-100' :
                            alert.type === 'info' ? 'bg-blue-100' : 'bg-green-100'
                          }`}>
                            <FiAlertTriangle className={`w-4 h-4 ${
                              alert.type === 'warning' ? 'text-yellow-600' :
                              alert.type === 'info' ? 'text-blue-600' : 'text-green-600'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{alert.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                            <p className="text-xs text-gray-500 mt-2">{alert.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-gray-200 text-center">
                    <button className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center justify-center w-full focus-ring">
                      View all alerts <FiChevronRight className="ml-1" size={16} />
                    </button>
                  </div>
                </div>

                {/* Pending Approvals */}
                <div className="card overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Pending Approvals</h3>
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                        {pendingApprovals.length} pending
                      </span>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {pendingApprovals.map((approval) => (
                      <div key={approval.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">{approval.name}</h4>
                            <p className="text-sm text-gray-600">{approval.type}</p>
                            <div className="flex items-center mt-1 space-x-4">
                              <span className="text-xs text-gray-500">
                                Submitted: {approval.submittedDate}
                              </span>
                              {approval.specialization && (
                                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                                  {approval.specialization}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="btn-outline text-xs px-3 py-1 text-red-600 border-red-600 hover:bg-red-50">
                              Reject
                            </button>
                            <button className="btn-primary text-xs px-3 py-1">
                              Approve
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-gray-200 text-center">
                    <button className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center justify-center w-full focus-ring">
                      View all pending approvals <FiChevronRight className="ml-1" size={16} />
                    </button>
                  </div>
                </div>

                {/* Recent Users */}
                <div className="card overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Recent User Registrations</h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {recentUsers.map((user) => (
                      <div key={user.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">{user.name}</h4>
                            <p className="text-sm text-gray-600">{user.email}</p>
                            <div className="flex items-center mt-1 space-x-3">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                user.role === 'doctor' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                              }`}>
                                {user.role}
                              </span>
                              <span className="text-xs text-gray-500">
                                Joined: {user.joinDate}
                              </span>
                              {user.specialization && (
                                <span className="text-xs text-gray-500">
                                  {user.specialization}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              user.status === 'active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {user.status}
                            </span>
                            <button className="btn-outline text-xs px-3 py-1">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-gray-200 text-center">
                    <button className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center justify-center w-full focus-ring">
                      View all users <FiChevronRight className="ml-1" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Other Tabs */}
            {activeTab !== 'overview' && (
              <div className="card p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 capitalize">
                  {activeTab}
                </h2>
                <div className="text-center py-12">
                  <div className="mx-auto h-12 w-12 text-gray-400 mb-4">
                    {activeTab === 'users' && <FiUsers size={48} />}
                    {activeTab === 'approvals' && <FiUserCheck size={48} />}
                    {activeTab === 'system' && <FiDatabase size={48} />}
                    {activeTab === 'security' && <FiShield size={48} />}
                    {activeTab === 'settings' && <FiSettings size={48} />}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    This is where your {activeTab} management tools would be displayed.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
