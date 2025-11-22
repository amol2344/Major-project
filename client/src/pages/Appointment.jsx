import { FiCalendar, FiClock, FiMapPin, FiPhone, FiMail, FiUser, FiAlertCircle, FiExternalLink } from 'react-icons/fi';

const Appointment = () => {
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the mandatory form is confirmed
    const formConfirmed = e.target.formConfirmation.checked;
    if (!formConfirmed) {
      alert('Please confirm you have completed the mandatory Patient Intake Form');
      return;
    }
    
    // Here you would typically send the form data to your backend
    // For now, we'll just show a success message
    alert('Appointment request submitted successfully! We will contact you shortly to confirm.');
    e.target.reset();
  };

  return (
    <div className="pt-20 pb-12 bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/dot-pattern.svg')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Schedule a consultation with our certified physiotherapists for personalized care
          </p>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Working Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FiClock className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Working Hours</h3>
                </div>
                <div className="space-y-3 pl-14">
                  <p className="text-gray-700">
                    <span className="font-medium">Monday – Friday:</span> 9:00 AM – 6:00 PM
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Saturday:</span> 10:00 AM – 2:00 PM
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FiMapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Our Location</h3>
                </div>
                <div className="space-y-3 pl-14">
                  <p className="text-gray-700">Shop no 06, Building number 12</p>
                  <p className="text-gray-700">Dignity CHS, Near Kedarnath Mandir</p>
                  <p className="text-gray-700 font-medium">Nehru Nagar, Kurla East</p>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FiPhone className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
                </div>
                <div className="space-y-4 pl-14">
                  <div className="flex items-center gap-3">
                    <FiPhone className="w-5 h-5 text-gray-500" />
                    <p className="text-gray-700">9004684173</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiMail className="w-5 h-5 text-gray-500" />
                    <p className="text-gray-700">stridewellstudio@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Schedule Your Visit</h2>
                <p className="text-gray-600">Fill out the form below to book your appointment</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
                <FiAlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-700 font-medium mb-2">Important: Complete the Patient Intake Form first</p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfBuCN2hYfvEchLK3an_hIFKRhZESPOBItjxeXJrxxq-9Vaaw/viewform?usp=pp_url" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition"
                  >
                    Open Patient Intake Form <FiExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiPhone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="9876543210"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="healthBackground" className="block text-sm font-medium text-gray-700 mb-2">
                    Health Background <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="healthBackground"
                    name="healthBackground"
                    rows={4}
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Please mention any historical diseases, injuries, or conditions"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiCalendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition appearance-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    >
                      <option value="">Select Time Slot</option>
                      <option value="09:00-10:00">09:00 AM - 10:00 AM</option>
                      <option value="10:00-11:00">10:00 AM - 11:00 AM</option>
                      <option value="11:00-12:00">11:00 AM - 12:00 PM</option>
                      <option value="12:00-13:00">12:00 PM - 01:00 PM</option>
                      <option value="13:00-14:00">01:00 PM - 02:00 PM</option>
                      <option value="14:00-15:00">02:00 PM - 03:00 PM</option>
                      <option value="15:00-16:00">03:00 PM - 04:00 PM</option>
                      <option value="16:00-17:00">04:00 PM - 05:00 PM</option>
                      <option value="17:00-18:00">05:00 PM - 06:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="formConfirmation"
                      name="formConfirmation"
                      className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500 transition"
                      required
                    />
                    <label htmlFor="formConfirmation" className="ml-3 block text-sm text-gray-700">
                      I confirm that I have completed the mandatory Patient Intake Form
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="infoConfirmation"
                      name="infoConfirmation"
                      className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500 transition"
                      required
                    />
                    <label htmlFor="infoConfirmation" className="ml-3 block text-sm text-gray-700">
                      I confirm that all information provided is accurate and complete
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-md transition-all duration-300"
                >
                  Confirm Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;