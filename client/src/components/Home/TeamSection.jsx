import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiStar, FiAward, FiUsers, FiClock } from 'react-icons/fi';
import { handleImageError, FALLBACK_DOCTOR_IMAGE } from '../../utils/imageUtils';

const TeamSection = ({ teamMembers }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 font-['Open_Sans'] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-6 border border-blue-200">
            MEET OUR EXPERT TEAM
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Healthcare Professionals</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Our multidisciplinary team combines cutting-edge medical expertise with compassionate care, 
            ensuring you receive the highest quality treatment tailored to your unique needs.
          </p>
        </div>

        {/* Team Cards Grid - Modern Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group relative transform transition-all duration-500 ${
                hoveredCard === member.id ? 'scale-105 z-20' : 'hover:scale-105'
              }`}
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                {/* Image Section - Enhanced for better visibility */}
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => handleImageError(e, FALLBACK_DOCTOR_IMAGE)}
                  />
                  {/* Minimal Gradient Overlay for maximum image visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <FiStar className="w-5 h-5 text-yellow-500" />
                  </div>
                  
                  {/* Name and Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{member.name}</h3>
                    <p className="text-blue-200 font-medium drop-shadow-md">{member.title}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Bio */}
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{member.bio}</p>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                      <div className="text-lg font-bold text-blue-600">{member.experience || '5+'}</div>
                      <div className="text-xs text-gray-600">Experience</div>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                      <div className="text-lg font-bold text-green-600">{member.consultationFee || '₹800'}</div>
                      <div className="text-xs text-gray-600">Consultation</div>
                    </div>
                  </div>

                  {/* Qualifications Preview */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FiAward className="w-4 h-4 text-indigo-500" />
                      <span className="text-sm font-semibold text-gray-700">Key Qualifications</span>
                    </div>
                    <div className="space-y-2">
                      {member.qualifications.slice(0, 2).map((qual, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                          <span className="line-clamp-1">{qual}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="border-t border-gray-100 pt-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <FiClock className="w-4 h-4 text-blue-500" />
                      <span>{member.hours}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FiUsers className="w-4 h-4 text-green-500" />
                      <span>Available for consultation</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to={`/doctors/${member.id}`}>
                    <button className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        View Full Profile
                        <FiArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </Link>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12">
                Expert
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="inline-block p-8 bg-white rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Meet Your Perfect Doctor?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore our complete team of specialists and find the right healthcare professional for your needs.
            </p>
            <Link to="/experts">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View All Experts
                <FiArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
