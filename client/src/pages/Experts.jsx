import { FiArrowRight } from 'react-icons/fi';
import { doctors } from '../data/doctors';
import DoctorCard from '../components/Shared/DoctorCard';
import logo from '../assets/logo.png';

const Experts = () => {
  return (
    <div className="pt-16 pb-12 bg-gray-50">
      {/* Hero Section with Logo */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-blue-800 text-white py-28">
        <div className="absolute inset-0 opacity-5 bg-[url('/images/dot-grid-pattern.svg')]"></div>
        <div className="container mx-auto px-6 relative z-10">
        
          
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              MEET THE TEAM
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Our Expert <span className="text-teal-300">Physiotherapists</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Certified specialists dedicated to your recovery and wellness journey
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <DoctorCard 
                key={doctor.id} 
                doctor={doctor} 
                variant="featured"
                showQualifications={true}
                showContact={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/circle-grid-pattern.svg')]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Recovery?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our specialists are here to create a personalized treatment plan just for you
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-teal-400 to-blue-400 hover:from-teal-500 hover:to-blue-500 text-gray-900 font-bold rounded-xl shadow-lg transition-all">
              Book Consultation
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-xl transition-colors hover:bg-white/10">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experts;
