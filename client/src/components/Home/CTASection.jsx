import { FiArrowRight } from 'react-icons/fi';

const CTASection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#1A3D6D] to-[#76B041] text-white overflow-hidden font-['Open_Sans']">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1A3D6D]/40 to-[#1A3D6D]/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Montserrat']">
            Ready to <span className="text-[#76B041]">Transform</span> Your Recovery?
          </h2>
          <p className="text-lg md:text-xl text-[#EAF4FB] mb-8">
            Experience professional physiotherapy from the comfort of your home.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/appointment" className="inline-block">

            <button className="px-8 py-4 bg-[#76B041] hover:bg-green-500 text-[#1A3D6D] font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Start Free Assessment
            </button>
            </a>
            <a href="/appointment" className="inline-block">

            <button className="px-8 py-4 bg-transparent border-2 border-[#EAF4FB] text-[#EAF4FB] hover:bg-white/10 rounded-lg transition-all duration-300 group">
              Speak to a Experts
              <FiArrowRight className="ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
