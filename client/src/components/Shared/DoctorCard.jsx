import { FiMail, FiPhone, FiClock, FiArrowRight, FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { handleImageError, FALLBACK_DOCTOR_IMAGE } from '../../utils/imageUtils';

const DoctorCard = ({ doctor, variant = 'default', showQualifications = true, showContact = true }) => {
  const variants = {
    default: {
      card: "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300",
      image: "h-96",
      button: "w-full mt-6 py-3 px-6 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 shadow-md"
    },
    compact: {
      card: "bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300",
      image: "h-64",
      button: "w-full mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2"
    },
    featured: {
      card: "bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300",
      image: "h-96",
      button: "w-full mt-6 py-3 px-6 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 shadow-md"
    }
  };

  const currentVariant = variants[variant];

  return (
    <div className={`group ${currentVariant.card}`}>
      <div className={`relative ${currentVariant.image} overflow-hidden`}>
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => handleImageError(e, FALLBACK_DOCTOR_IMAGE)}
        />
        {/* Minimal overlay for maximum image visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">{doctor.name}</h3>
          <p className="text-teal-300 font-medium text-sm drop-shadow-md">{doctor.specialty || doctor.title}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">{doctor.bio}</p>

        {showQualifications && doctor.qualifications && (
          <div className="space-y-2 mb-4">
            {doctor.qualifications.slice(0, 2).map((qualification, index) => (
              <div key={index} className="flex items-start gap-2">
                <FiCheck className="w-4 h-4 text-teal-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">{qualification}</span>
              </div>
            ))}
          </div>
        )}

        {showContact && (
          <div className="space-y-2 text-sm text-gray-700 border-t border-gray-100 pt-4 mb-4">
            <div className="flex items-center gap-2">
              <FiMail className="w-4 h-4 text-blue-500" />
              <a href={`mailto:${doctor.contact.email}`} className="hover:text-blue-600 transition-colors truncate">
                {doctor.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="w-4 h-4 text-blue-500" />
              <a href={`tel:${doctor.contact.phone.replace(/\D/g, '')}`} className="hover:text-blue-600 transition-colors">
                {doctor.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="w-4 h-4 text-blue-500" />
              <span>{doctor.contact.hours}</span>
            </div>
          </div>
        )}

        <Link to={`/doctors/${doctor.id}`}>
          <button className={currentVariant.button}>
            View Profile
            <FiArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
