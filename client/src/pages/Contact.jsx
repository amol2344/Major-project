import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: 'Please fill out all fields.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      // In a real app, you would post this data to your API endpoint
      // For example: await api.post('/contact', formData);
      
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Assuming the API call is successful
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' }); // Clear form on success
    } catch (err) {
      setStatus({ submitting: false, success: false, error: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-deep-navy">Get In Touch</h1>
          <p className="mt-4 text-lg text-medium-gray font-raleway">We'd love to hear from you. Please fill out the form below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-light-gray p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-gray">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deep-navy focus:border-deep-navy"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-gray">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deep-navy focus:border-deep-navy"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-gray">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-deep-navy focus:border-deep-navy"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-deep-navy hover:bg-deep-navy-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-navy disabled:bg-gray-400"
                  >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                {status.success && (
                  <p className="text-center text-fresh-green">Thank you! Your message has been sent successfully.</p>
                )}
                {status.error && (
                  <p className="text-center text-red-600">{status.error}</p>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start">
              <FiMapPin className="flex-shrink-0 h-6 w-6 text-fresh-green mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-dark-gray">Our Address</h3>
                <p className="text-medium-gray">123 Health St, Wellness City, 12345</p>
              </div>
            </div>
            <div className="flex items-start">
              <FiMail className="flex-shrink-0 h-6 w-6 text-fresh-green mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-dark-gray">Email Us</h3>
                <p className="text-medium-gray">contact@stridewellstudio.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <FiPhone className="flex-shrink-0 h-6 w-6 text-fresh-green mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-dark-gray">Call Us</h3>
                <p className="text-medium-gray">(123) 456-7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
