import { useParams, Link } from 'react-router-dom';
import { FiMail, FiPhone, FiClock, FiMapPin, FiStar, FiAward, FiBookOpen, FiUsers, FiCalendar, FiArrowLeft } from 'react-icons/fi';
import { getDoctorById } from '../utils/doctorUtils';
import { handleImageError, FALLBACK_DOCTOR_IMAGE } from '../utils/imageUtils';
import { useState } from 'react';
import logo from '../assets/logo.png';

const DoctorProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Find the doctor by ID using utility function
  const doctor = getDoctorById(id);
  
  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Doctor Not Found</h1>
          <p className="text-gray-600 mb-6">The doctor you're looking for doesn't exist.</p>
          <Link to="/experts" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <FiArrowLeft className="mr-2" />
            Back to Experts
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FiUsers },
    { id: 'qualifications', label: 'Qualifications', icon: FiAward },
    { id: 'specializations', label: 'Specializations', icon: FiBookOpen },
    { id: 'contact', label: 'Contact & Hours', icon: FiClock }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Back Navigation with Logo */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/experts" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                <FiArrowLeft className="mr-2" />
                Back to Experts
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="StrideWellStudio Logo" 
                className="h-12 w-auto"
              />
              <span className="text-lg font-semibold text-gray-700">StrideWell Studio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Doctor Image - Enhanced for better visibility */}
            <div className="lg:col-span-1">
              <div className="relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-[500px] lg:h-[600px] object-cover object-center rounded-2xl shadow-lg"
                  loading="lazy"
                  onError={(e) => handleImageError(e, FALLBACK_DOCTOR_IMAGE)}
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                  <FiStar className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                <p className="text-xl text-blue-600 font-semibold mb-4">{doctor.title}</p>
                <p className="text-gray-600 text-lg leading-relaxed">{doctor.bio}</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">{doctor.experience}</div>
                  <div className="text-sm text-gray-600">Experience</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">{doctor.consultationFee}</div>
                  <div className="text-sm text-gray-600">Consultation</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">{doctor.languages.length}</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">{doctor.qualifications.length}</div>
                  <div className="text-sm text-gray-600">Certifications</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <FiCalendar className="mr-2" />
                  Book Appointment
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center">
                  <FiMail className="mr-2" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About {doctor.name}</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">{doctor.longBio}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700">{doctor.education}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Languages Spoken</h3>
                    <div className="flex flex-wrap gap-2">
                      {doctor.languages.map((language, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Qualifications Tab */}
          {activeTab === 'qualifications' && (
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Qualifications & Certifications</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Qualifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {doctor.qualifications.map((qual, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 flex items-start">
                        <FiAward className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{qual}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {doctor.certifications.map((cert, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 flex items-start">
                        <FiAward className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Specializations Tab */}
          {activeTab === 'specializations' && (
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Areas of Specialization</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {doctor.specializations.map((spec, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{spec}</h4>
                        <p className="text-gray-600 text-sm">
                          Expert-level proficiency in {spec.toLowerCase()} with proven track record of successful patient outcomes.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information & Availability</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <FiMail className="w-5 h-5 text-blue-600 mr-3" />
                      <a href={`mailto:${doctor.contact.email}`} className="text-blue-600 hover:underline">
                        {doctor.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FiPhone className="w-5 h-5 text-blue-600 mr-3" />
                      <a href={`tel:${doctor.contact.phone}`} className="text-blue-600 hover:underline">
                        {doctor.contact.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FiClock className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{doctor.availability}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
                  <div className="flex items-start">
                    <FiMapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="text-gray-700">{doctor.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready to Book an Appointment?</h3>
                <p className="text-gray-600 mb-4">
                  {doctor.name} is currently accepting new patients. Book your consultation today to start your recovery journey.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DoctorProfile;
