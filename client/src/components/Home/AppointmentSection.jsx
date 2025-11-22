import { FiClock, FiMapPin, FiPhone, FiCalendar, FiUser, FiMail, FiAlertCircle } from "react-icons/fi";

const AppointmentSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Info Section */}
            <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-10">
              <div className="mb-8">
                <span className="text-blue-200 font-medium uppercase tracking-wider text-sm">
                  Get in touch
                </span>
                <h2 className="text-3xl font-bold mt-2 mb-4">Book Your Appointment</h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Schedule a consultation with our certified physiotherapists for personalized care.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 flex-shrink-0">
                    <FiClock className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Working Hours</h3>
                    <p className="text-blue-100">
                      Monday – Friday: 9:00 AM – 6:00 PM
                    </p>
                    <p className="text-blue-100">
                      Saturday: 10:00 AM – 2:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 flex-shrink-0">
                    <FiMapPin className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-blue-100">
                      Kedarnath Mandir Marg, Nehru Nagar, Kurla, Mumbai, Maharashtra 400024
                    </p>
                    <p className="text-blue-100 mt-1">
                      Free parking available
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 p-3 rounded-lg mr-4 flex-shrink-0">
                    <FiPhone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Contact Us</h3>
                    <p className="text-blue-100">9004684173</p>
                    <p className="text-blue-100">stridewellstudio@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="md:w-3/5 p-10">
              <div className="mb-8">
                <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">
                  Appointment form
                </span>
                <h2 className="text-2xl font-bold mt-2 text-gray-800">
                  Schedule Your Visit
                </h2>
              </div>
              
              <form className="space-y-5">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <FiAlertCircle className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        <strong>Mandatory Step:</strong> You must complete the <a 
                          href="https://docs.google.com/forms/d/e/1FAIpQLSfBuCN2hYfvEchLK3an_hIFKRhZESPOBItjxeXJrxxq-9Vaaw/viewform?usp=pp_url" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium underline text-yellow-700 hover:text-yellow-600"
                        >
                          Patient Intake Form
                        </a> before booking your appointment. Your booking will not be processed without this.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label className="block text-gray-700 text-sm font-medium mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-gray-700 text-sm font-medium mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiPhone className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your Phone Number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">
                      Age Group <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select Age Group</option>
                      <option>Under 18</option>
                      <option>18–30</option>
                      <option>31–45</option>
                      <option>46–60</option>
                      <option>60+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Health Background <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    placeholder="Please mention any historical diseases, injuries, or conditions"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiCalendar className="text-gray-400" />
                      </div>
                      <input
                        type="date"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select Time Slot</option>
                      <option>9:00 AM - 10:00 AM</option>
                      <option>10:00 AM - 11:00 AM</option>
                      <option>11:00 AM - 12:00 PM</option>
                      <option>2:00 PM - 3:00 PM</option>
                      <option>3:00 PM - 4:00 PM</option>
                      <option>4:00 PM - 5:00 PM</option>
                      <option>5:00 PM - 6:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Google Form Submission Confirmation <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="form-confirmation"
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="form-confirmation" className="ml-2 block text-sm text-gray-700">
                      I confirm that I have completed the <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfBuCN2hYfvEchLK3an_hIFKRhZESPOBItjxeXJrxxq-9Vaaw/viewform?usp=pp_url" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-500 underline"
                      >
                        mandatory Patient Intake Form
                      </a>
                    </label>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="consent" className="text-gray-700">
                      I confirm that all information provided is accurate and complete.
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Confirm Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;