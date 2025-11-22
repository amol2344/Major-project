import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Appointments = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: 'John Doe',
      doctorName: 'Dr. Sarah Johnson',
      date: '2024-01-25',
      time: '10:00 AM',
      duration: 60,
      type: 'consultation',
      status: 'confirmed',
      notes: 'Follow-up appointment for physical therapy',
      patientId: 1,
      doctorId: 1
    },
    {
      id: 2,
      patientName: 'Sarah Wilson',
      doctorName: 'Dr. Michael Chen',
      date: '2024-01-26',
      time: '2:30 PM',
      duration: 45,
      type: 'initial',
      status: 'pending',
      notes: 'New patient consultation',
      patientId: 2,
      doctorId: 2
    },
    {
      id: 3,
      patientName: 'Mike Johnson',
      doctorName: 'Dr. Sarah Johnson',
      date: '2024-01-24',
      time: '9:00 AM',
      duration: 60,
      type: 'therapy',
      status: 'completed',
      notes: 'Physical therapy session completed',
      patientId: 3,
      doctorId: 1
    }
  ]);

  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterDate, setFilterDate] = useState('');

  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    doctorName: '',
    date: '',
    time: '',
    duration: 60,
    type: 'consultation',
    notes: ''
  });

  const getFilteredAppointments = () => {
    let filtered = appointments;

    // Role-based filtering
    if (user?.roles?.includes('doctor')) {
      filtered = filtered.filter(apt => apt.doctorId === user.id);
    } else if (user?.roles?.includes('patient')) {
      filtered = filtered.filter(apt => apt.patientId === user.id);
    }

    // Search filtering
    if (searchTerm) {
      filtered = filtered.filter(apt => 
        apt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        apt.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        apt.notes.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filtering
    if (filterStatus !== 'all') {
      filtered = filtered.filter(apt => apt.status === filterStatus);
    }

    // Date filtering
    if (filterDate) {
      filtered = filtered.filter(apt => apt.date === filterDate);
    }

    return filtered;
  };

  const handleAddAppointment = () => {
    if (newAppointment.patientName && newAppointment.doctorName && newAppointment.date && newAppointment.time) {
      const appointment = {
        id: Date.now(),
        ...newAppointment,
        status: 'pending',
        patientId: user?.roles?.includes('patient') ? user.id : Math.floor(Math.random() * 1000),
        doctorId: user?.roles?.includes('doctor') ? user.id : Math.floor(Math.random() * 1000)
      };
      setAppointments([...appointments, appointment]);
      setNewAppointment({ patientName: '', doctorName: '', date: '', time: '', duration: 60, type: 'consultation', notes: '' });
      setShowAppointmentModal(false);
    }
  };

  const handleEditAppointment = (appointment) => {
    setEditingAppointment(appointment);
    setNewAppointment({ ...appointment });
    setShowAppointmentModal(true);
  };

  const handleUpdateAppointment = () => {
    if (editingAppointment && newAppointment.patientName && newAppointment.doctorName && newAppointment.date && newAppointment.time) {
      setAppointments(appointments.map(apt => 
        apt.id === editingAppointment.id ? { ...apt, ...newAppointment } : apt
      ));
      setEditingAppointment(null);
      setNewAppointment({ patientName: '', doctorName: '', date: '', time: '', duration: 60, type: 'consultation', notes: '' });
      setShowAppointmentModal(false);
    }
  };

  const handleDeleteAppointment = (id) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      setAppointments(appointments.filter(apt => apt.id !== id));
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, status: newStatus } : apt
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'consultation': return 'bg-purple-100 text-purple-800';
      case 'therapy': return 'bg-indigo-100 text-indigo-800';
      case 'initial': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAppointments = getFilteredAppointments();

  const canManageAppointments = user?.roles?.includes('admin') || user?.roles?.includes('doctor');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600 mt-1">
            {user?.roles?.includes('admin') && 'Manage all appointments in the system'}
            {user?.roles?.includes('doctor') && 'Manage your patient appointments'}
            {user?.roles?.includes('patient') && 'View and manage your appointments'}
          </p>
        </div>
        {canManageAppointments && (
          <button
            onClick={() => {
              setEditingAppointment(null);
              setNewAppointment({ patientName: '', doctorName: '', date: '', time: '', duration: 60, type: 'consultation', notes: '' });
              setShowAppointmentModal(true);
            }}
            className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span className="mr-2">➕</span>
            Add Appointment
          </button>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📅</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total</p>
              <p className="text-2xl font-bold text-gray-900">{filteredAppointments.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Confirmed</p>
              <p className="text-2xl font-bold text-gray-900">{filteredAppointments.filter(apt => apt.status === 'confirmed').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⏳</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{filteredAppointments.filter(apt => apt.status === 'pending').length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🏥</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Today</p>
              <p className="text-2xl font-bold text-gray-900">
                {filteredAppointments.filter(apt => apt.date === new Date().toISOString().split('T')[0]).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search appointments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterStatus('all');
                setFilterDate('');
              }}
              className="w-full px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Appointments List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Appointment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type & Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAppointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {user?.roles?.includes('patient') ? appointment.doctorName : appointment.patientName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {user?.roles?.includes('patient') ? 'Doctor' : 'Patient'}: {
                          user?.roles?.includes('patient') ? appointment.doctorName : appointment.patientName
                        }
                      </div>
                      {appointment.notes && (
                        <div className="text-sm text-gray-500 mt-1">{appointment.notes}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{appointment.date}</div>
                    <div className="text-sm text-gray-500">{appointment.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col space-y-2">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeColor(appointment.type)}`}>
                        {appointment.type}
                      </span>
                      <span className="text-sm text-gray-500">{appointment.duration} min</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex flex-col space-y-2">
                      {canManageAppointments && (
                        <>
                          <button
                            onClick={() => handleEditAppointment(appointment)}
                            className="text-blue-600 hover:text-blue-900 transition-colors"
                          >
                            ✏️ Edit
                          </button>
                          <button
                            onClick={() => handleDeleteAppointment(appointment.id)}
                            className="text-red-600 hover:text-red-900 transition-colors"
                          >
                            🗑️ Delete
                          </button>
                        </>
                      )}
                      {appointment.status === 'pending' && canManageAppointments && (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleStatusChange(appointment.id, 'confirmed')}
                            className="text-green-600 hover:text-green-900 transition-colors"
                          >
                            ✅ Confirm
                          </button>
                          <button
                            onClick={() => handleStatusChange(appointment.id, 'cancelled')}
                            className="text-red-600 hover:text-red-900 transition-colors"
                          >
                            ❌ Cancel
                          </button>
                        </div>
                      )}
                      {appointment.status === 'confirmed' && (
                        <button
                          onClick={() => handleStatusChange(appointment.id, 'completed')}
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                        >
                          🏁 Complete
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Appointment Modal */}
      {showAppointmentModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {editingAppointment ? 'Edit Appointment' : 'Add New Appointment'}
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                  <input
                    type="text"
                    value={newAppointment.patientName}
                    onChange={(e) => setNewAppointment({ ...newAppointment, patientName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Patient Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Doctor Name</label>
                  <input
                    type="text"
                    value={newAppointment.doctorName}
                    onChange={(e) => setNewAppointment({ ...newAppointment, doctorName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Doctor Name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input
                      type="date"
                      value={newAppointment.date}
                      onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                    <input
                      type="time"
                      value={newAppointment.time}
                      onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration (min)</label>
                    <input
                      type="number"
                      value={newAppointment.duration}
                      onChange={(e) => setNewAppointment({ ...newAppointment, duration: parseInt(e.target.value) })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      min="15"
                      step="15"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                    <select
                      value={newAppointment.type}
                      onChange={(e) => setNewAppointment({ ...newAppointment, type: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="consultation">Consultation</option>
                      <option value="therapy">Therapy</option>
                      <option value="initial">Initial</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                  <textarea
                    value={newAppointment.notes}
                    onChange={(e) => setNewAppointment({ ...newAppointment, notes: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="3"
                    placeholder="Appointment notes..."
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowAppointmentModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={editingAppointment ? handleUpdateAppointment : handleAddAppointment}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingAppointment ? 'Update' : 'Add'} Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;
