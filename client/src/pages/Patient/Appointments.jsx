import { useState } from 'react';
import { FiCalendar, FiClock, FiVideo, FiMapPin, FiPlus } from 'react-icons/fi';

const PatientAppointments = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-responsive py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">My Appointments</h1>
          <p className="text-gray-600">Manage your therapy sessions and consultations</p>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-1">
              {['upcoming', 'past', 'cancelled'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors focus-ring ${
                    activeTab === tab
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <button className="btn-primary flex items-center">
              <FiPlus className="mr-2" />
              Book Appointment
            </button>
          </div>

          <div className="text-center py-12">
            <FiCalendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Appointments
            </h3>
            <p className="text-gray-600">
              Your {activeTab} appointments will be displayed here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAppointments;
