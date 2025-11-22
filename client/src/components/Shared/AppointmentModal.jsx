import { useState, useEffect } from 'react';
import { FiX, FiCalendar, FiClock, FiVideo, FiUser, FiMapPin, FiChevronDown, FiStar } from 'react-icons/fi';

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    appointmentType: 'virtual',
    date: '',
    time: '',
    therapist: '',
    notes: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);

  const therapists = [
    { id: 'dr_smith', name: 'Dr. Sarah Smith', specialty: 'Orthopedic Specialist', rating: 4.9 },
    { id: 'dr_johnson', name: 'Dr. Michael Johnson', specialty: 'Sports Medicine', rating: 4.8 },
    { id: 'dr_lee', name: 'Dr. Emily Lee', specialty: 'Geriatric Specialist', rating: 4.7 }
  ];

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '01:00 PM', '02:00 PM', '03:00 PM'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setFormData(prev => ({
      ...prev,
      date
    }));
    setCurrentStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Appointment booked:', formData);
    onClose();
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Book Appointment</h3>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 p-1"
              aria-label="Close modal"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} font-medium`}>
                  {step}
                </div>
                <span className={`text-xs mt-2 ${currentStep >= step ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                  {step === 1 ? 'Details' : step === 2 ? 'Schedule' : 'Confirm'}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Appointment Type */}
            <div className={currentStep !== 1 ? 'hidden' : ''}>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Select Appointment Type</h4>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className={`flex flex-col items-center p-4 rounded-xl border-2 ${formData.appointmentType === 'virtual' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                  onClick={() => setFormData({...formData, appointmentType: 'virtual'})}
                >
                  <div className={`p-3 rounded-full mb-3 ${formData.appointmentType === 'virtual' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                    <FiVideo size={20} />
                  </div>
                  <span className="font-medium">Virtual</span>
                  <span className="text-sm text-gray-500 mt-1">Video Consultation</span>
                </button>

                <button
                  type="button"
                  className={`flex flex-col items-center p-4 rounded-xl border-2 ${formData.appointmentType === 'in-person' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                  onClick={() => setFormData({...formData, appointmentType: 'in-person'})}
                >
                  <div className={`p-3 rounded-full mb-3 ${formData.appointmentType === 'in-person' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
                    <FiMapPin size={20} />
                  </div>
                  <span className="font-medium">In-Person</span>
                  <span className="text-sm text-gray-500 mt-1">Clinic Visit</span>
                </button>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors"
                  onClick={() => setCurrentStep(2)}
                >
                  Continue
                </button>
              </div>
            </div>

            {/* Step 2: Date & Time Selection */}
            <div className={currentStep !== 2 ? 'hidden' : ''}>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Select Date & Time</h4>
              
              {/* Calendar */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Choose a Date</label>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
                    <div key={day} className="text-center text-xs text-gray-500 font-medium py-1">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 28 }, (_, i) => {
                    const date = new Date();
                    date.setDate(date.getDate() + i + 1);
                    const day = date.getDate();
                    const isSelected = selectedDate === date.toISOString().split('T')[0];
                    
                    return (
                      <button
                        key={i}
                        type="button"
                        className={`py-2 rounded-full text-sm ${isSelected ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                        onClick={() => handleDateSelect(date.toISOString().split('T')[0])}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Available Times</label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        type="button"
                        className={`py-2 px-3 rounded-lg text-sm border ${formData.time === time ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-gray-200 hover:border-blue-300'}`}
                        onClick={() => setFormData({...formData, time})}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 flex justify-between">
                <button
                  type="button"
                  className="px-6 py-3 text-gray-700 font-medium rounded-xl transition-colors"
                  onClick={() => setCurrentStep(1)}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
                  onClick={() => setCurrentStep(3)}
                  disabled={!formData.time}
                >
                  Continue
                </button>
              </div>
            </div>

            {/* Step 3: Therapist & Confirmation */}
            <div className={currentStep !== 3 ? 'hidden' : ''}>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Select Therapist</h4>
              
              <div className="space-y-3 mb-6">
                {therapists.map((therapist) => (
                  <div
                    key={therapist.id}
                    className={`p-4 rounded-xl border ${formData.therapist === therapist.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    onClick={() => setFormData({...formData, therapist: therapist.id})}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                        {/* Therapist image would go here */}
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">{therapist.name}</h5>
                        <p className="text-sm text-gray-600">{therapist.specialty}</p>
                        <div className="flex items-center mt-1">
                          <FiStar className="text-yellow-400 mr-1" />
                          <span className="text-sm text-gray-600">{therapist.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Any specific concerns or details..."
                ></textarea>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  className="px-6 py-3 text-gray-700 font-medium rounded-xl transition-colors"
                  onClick={() => setCurrentStep(2)}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
                  disabled={!formData.therapist}
                >
                  Confirm Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;