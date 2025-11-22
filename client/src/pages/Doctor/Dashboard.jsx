import { useState } from 'react';
import { 
  FiUsers, 
  FiCalendar, 
  FiClipboard, 
  FiBarChart2, 
  FiMessageSquare, 
  FiSettings,
  FiChevronRight,
  FiUser,
  FiClock,
  FiVideo,
  FiFileText
} from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';

const DoctorDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const todayAppointments = [
    {
      id: 1,
      time: '09:00 AM',
      patient: 'John Smith',
      type: 'Virtual',
      condition: 'Knee Rehabilitation',
      status: 'Confirmed',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      time: '10:30 AM',
      patient: 'Sarah Johnson',
      type: 'In-Person',
      condition: 'Back Pain Treatment',
      status: 'Confirmed',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      time: '02:00 PM',
      patient: 'Mike Davis',
      type: 'Virtual',
      condition: 'Post-Surgery Recovery',
      status: 'Pending',
      avatar: 'https://randomuser.me/api/portraits/men/54.jpg'
    }
  ];

  const recentPatients = [
    {
      id: 1,
      name: 'Emily Wilson',
      lastVisit: '2023-06-12',
      condition: 'Shoulder Impingement',
      progress: 85,
      nextAppointment: '2023-06-20'
    },
    {
      id: 2,
      name: 'Robert Brown',
      lastVisit: '2023-06-10',
      condition: 'ACL Recovery',
      progress: 60,
      nextAppointment: '2023-06-18'
    },
    {
      id: 3,
      name: 'Lisa Anderson',
      lastVisit: '2023-06-08',
      condition: 'Lower Back Pain',
      progress: 40,
      nextAppointment: '2023-06-22'
    }
  ];

  const stats = [
    { id: 1, name: "Today's Appointments", value: '8', change: '+2', changeType: 'positive' },
    { id: 2, name: 'Active Patients', value: '47', change: '+5', changeType: 'positive' },
    { id: 3, name: 'Completion Rate', value: '94%', change: '+3%', changeType: 'positive' },
    { id: 4, name: 'Patient Satisfaction', value: '4.9', change: '+0.2', changeType: 'positive' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-soft">
        <div className="container-responsive py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Doctor Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Dr. {user?.name}</span>
            <div className="text-xs text-gray-500">
              {user?.specialization && <span>{user.specialization}</span>}
            </div>
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
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {user?.name?.charAt(0) || 'D'}
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Dr. {user?.name}</h3>
                  <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                </div>
              </div>

              <nav className="space-y-1">
                {[
                  { id: 'overview', icon: <FiBarChart2 />, label: 'Overview' },
                  { id: 'patients', icon: <FiUsers />, label: 'My Patients' },
                  { id: 'appointments', icon: <FiCalendar />, label: 'Appointments' },
                  { id: 'treatments', icon: <FiClipboard />, label: 'Treatment Plans' },
                  { id: 'reports', icon: <FiFileText />, label: 'Reports' },
                  { id: 'messages', icon: <FiMessageSquare />, label: 'Messages' },
                  { id: 'settings', icon: <FiSettings />, label: 'Settings' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-3 py-2.5 rounded-lg text-sm transition-colors focus-ring ${
                      activeTab === item.id 
                        ? 'bg-green-50 text-green-600 font-medium' 
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
                        Good morning, Dr. {user?.name}
                      </h2>
                      <p className="text-gray-600">You have 8 appointments scheduled for today.</p>
                    </div>
                    <button className="btn-primary mt-4 md:mt-0">
                      View Schedule
                    </button>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.id} className="card p-4 hover-lift">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                        {stat.name}
                      </p>
                      <div className="flex items-baseline">
                        <p className="text-2xl font-semibold text-gray-900 mr-2">{stat.value}</p>
                        <span className={`text-xs font-medium ${
                          stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Today's Appointments */}
                <div className="card overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Today's Appointments</h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {todayAppointments.map((appointment) => (
                      <div key={appointment.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img 
                              src={appointment.avatar} 
                              alt={appointment.patient}
                              className="w-10 h-10 rounded-full object-cover mr-3"
                            />
                            <div>
                              <h4 className="font-medium text-gray-900">{appointment.patient}</h4>
                              <p className="text-sm text-gray-600">{appointment.condition}</p>
                              <div className="flex items-center mt-1 text-xs text-gray-500">
                                <FiClock className="mr-1" />
                                <span>{appointment.time}</span>
                                <span className="mx-2">•</span>
                                <span className={`flex items-center ${
                                  appointment.type === 'Virtual' ? 'text-blue-600' : 'text-purple-600'
                                }`}>
                                  <FiVideo className="mr-1" size={12} />
                                  {appointment.type}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              appointment.status === 'Confirmed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {appointment.status}
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
                    <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center justify-center w-full focus-ring">
                      View all appointments <FiChevronRight className="ml-1" size={16} />
                    </button>
                  </div>
                </div>

                {/* Recent Patients */}
                <div className="card overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Patients</h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {recentPatients.map((patient) => (
                      <div key={patient.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">{patient.name}</h4>
                            <p className="text-sm text-gray-600">{patient.condition}</p>
                            <div className="flex items-center mt-1 space-x-4">
                              <span className="text-xs text-gray-500">
                                Last visit: {patient.lastVisit}
                              </span>
                              <span className="text-xs text-gray-500">
                                Next: {patient.nextAppointment}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <p className="text-xs text-gray-500">Progress</p>
                              <div className="flex items-center">
                                <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                  <div 
                                    className={`h-2 rounded-full ${
                                      patient.progress >= 80 
                                        ? 'bg-green-500' 
                                        : patient.progress >= 50 
                                          ? 'bg-blue-500' 
                                          : 'bg-yellow-500'
                                    }`} 
                                    style={{ width: `${patient.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs font-medium text-gray-700">{patient.progress}%</span>
                              </div>
                            </div>
                            <button className="btn-outline text-xs px-3 py-1">
                              View Chart
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-gray-200 text-center">
                    <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center justify-center w-full focus-ring">
                      View all patients <FiChevronRight className="ml-1" size={16} />
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
                    {activeTab === 'patients' && <FiUsers size={48} />}
                    {activeTab === 'appointments' && <FiCalendar size={48} />}
                    {activeTab === 'treatments' && <FiClipboard size={48} />}
                    {activeTab === 'reports' && <FiFileText size={48} />}
                    {activeTab === 'messages' && <FiMessageSquare size={48} />}
                    {activeTab === 'settings' && <FiSettings size={48} />}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    This is where your {activeTab} content would be displayed.
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

export default DoctorDashboard;
