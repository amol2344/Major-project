import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { patients, patientAppointments } from '../../data/patients';

const MyAppointments = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock patient data - in real app, this would come from user context
  const currentPatient = patients[0]; // Sarah Johnson
  const patientAppts = patientAppointments.filter(apt => apt.patientId === currentPatient.id);

  const upcomingAppointments = patientAppts.filter(apt => 
    apt.status === 'Confirmed' && new Date(apt.date) >= new Date()
  );
  const pastAppointments = patientAppts.filter(apt => 
    apt.status === 'Completed' || new Date(apt.date) < new Date()
  );
  const cancelledAppointments = patientAppts.filter(apt => apt.status === 'Cancelled');

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': return 'text-green-600 bg-green-100';
      case 'Pending': return 'text-yellow-600 bg-yellow-100';
      case 'Completed': return 'text-blue-600 bg-blue-100';
      case 'Cancelled': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Confirmed':
        return (
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'Pending':
        return (
          <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'Completed':
        return (
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'Cancelled':
        return (
          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      default:
        return null;
    }
  };

  const filteredAppointments = () => {
    let appointments = [];
    
    switch (activeTab) {
      case 'upcoming':
        appointments = upcomingAppointments;
        break;
      case 'past':
        appointments = pastAppointments;
        break;
      case 'cancelled':
        appointments = cancelledAppointments;
        break;
      default:
        appointments = patientAppts;
    }

    if (searchTerm) {
      appointments = appointments.filter(apt => 
        apt.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        apt.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        apt.notes.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      appointments = appointments.filter(apt => apt.status === statusFilter);
    }

    return appointments;
  };

  const handleReschedule = (appointmentId) => {
    // In real app, this would open a reschedule modal
    console.log('Reschedule appointment:', appointmentId);
  };

  const handleCancel = (appointmentId) => {
    // In real app, this would open a cancellation confirmation
    console.log('Cancel appointment:', appointmentId);
  };

  const AppointmentCard = ({ appointment }) => (
    <div className="bg-white rounded-lg shadow p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{appointment.doctorName}</h3>
            <p className="text-gray-600">{appointment.type}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {getStatusIcon(appointment.status)}
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
            {appointment.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-medium text-gray-600">Date & Time</p>
          <p className="text-gray-900">{new Date(appointment.date).toLocaleDateString()} at {appointment.time}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Duration</p>
          <p className="text-gray-900">{appointment.duration} minutes</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Location</p>
          <p className="text-gray-900">{appointment.location}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">Notes</p>
          <p className="text-gray-900">{appointment.notes}</p>
        </div>
      </div>

      {appointment.status === 'Confirmed' && (
        <div className="flex space-x-3 pt-4 border-t border-gray-200">
          <button
            onClick={() => handleReschedule(appointment.id)}
            className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            Reschedule
          </button>
          <button
            onClick={() => handleCancel(appointment.id)}
            className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Appointments</h1>
          <p className="text-gray-600">Manage your therapy appointments</p>
        </div>
        <button className="mt-4 sm:mt-0 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Book New Appointment
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="p-2 bg-blue-100 rounded-lg w-fit mx-auto mb-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-900">{upcomingAppointments.length}</p>
          <p className="text-sm text-gray-600">Upcoming</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="p-2 bg-green-100 rounded-lg w-fit mx-auto mb-3">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-900">{pastAppointments.length}</p>
          <p className="text-sm text-gray-600">Completed</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="p-2 bg-yellow-100 rounded-lg w-fit mx-auto mb-3">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {patientAppts.filter(apt => apt.status === 'Pending').length}
          </p>
          <p className="text-sm text-gray-600">Pending</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="p-2 bg-red-100 rounded-lg w-fit mx-auto mb-3">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-900">{cancelledAppointments.length}</p>
          <p className="text-sm text-gray-600">Cancelled</p>
        </div>
      </div>

      {/* Tabs and Filters */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            {[
              { key: 'upcoming', label: 'Upcoming', count: upcomingAppointments.length },
              { key: 'past', label: 'Past', count: pastAppointments.length },
              { key: 'cancelled', label: 'Cancelled', count: cancelledAppointments.length }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab.key
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search appointments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="sm:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Appointments List */}
          <div className="space-y-6">
            {filteredAppointments().length > 0 ? (
              filteredAppointments().map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))
            ) : (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No appointments found</h3>
                <p className="text-gray-600">
                  {searchTerm || statusFilter !== 'all' 
                    ? 'Try adjusting your search or filters'
                    : `No ${activeTab} appointments at the moment`
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
