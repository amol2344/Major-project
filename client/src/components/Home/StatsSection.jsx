import { FiUsers, FiHeart, FiCheck, FiUser } from 'react-icons/fi';

const StatsSection = () => {
  return (
    <section className="py-16 bg-[#1A3D6D] text-white font-['Open_Sans']">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '10,000+', label: 'Patients Helped', icon: <FiUsers className="w-8 h-8 mb-4 text-[#76B041]" /> },
            { value: '98%', label: 'Satisfaction Rate', icon: <FiHeart className="w-8 h-8 mb-4 text-[#76B041]" /> },
            { value: '250+', label: 'Clinical Protocols', icon: <FiCheck className="w-8 h-8 mb-4 text-[#76B041]" /> },
            { value: '40+', label: 'Expert Physios', icon: <FiUser className="w-8 h-8 mb-4 text-[#76B041]" /> }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm shadow-lg transition transform hover:scale-105"
            >
              {stat.icon}
              <div className="text-3xl md:text-4xl font-bold mb-2 text-[#76B041] font-['Montserrat']">
                {stat.value}
              </div>
              <div className="text-[#EAF4FB] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
