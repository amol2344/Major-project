import {
  FiArrowRight,
  FiCheckCircle,
  FiCalendar,
  FiUsers,
  FiActivity,
  FiUser,
} from "react-icons/fi";
import logo from "../../assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0F2A4D] to-[#1A3D6D] text-white overflow-hidden pt-20 font-['Open_Sans']">
      {/* Medical-themed background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle medical pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2376B041' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          }}
        ></div>

        {/* Floating abstract shapes */}
        <div className="absolute top-1/4 left-10 w-60 h-60 rounded-full bg-[#76B041]/10 blur-xl"></div>
        <div className="absolute bottom-1/3 right-20 w-80 h-80 rounded-full bg-[#76B041]/10 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
   

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-[#76B041]/30">
              <FiActivity className="text-[#76B041] mr-2" />
              <span className="text-[#76B041] font-medium">
                Evidence-Based Treatment
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-['Montserrat']">
              Expert <span className="text-[#76B041]">Physiotherapy</span>{" "}
              <br />
              Tailored To Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Unique Needs</span>
                </span>
            </h1>

            <p className="text-xl text-[#EAF4FB] mb-8 max-w-lg">
              Our licensed physiotherapists create personalized recovery plans
              based on 20+ years of clinical experience.
            </p>

            {/* Key differentiators */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex items-center bg-white/5 p-3 rounded-lg border border-white/10">
                <div className="bg-[#76B041] p-2 rounded-lg mr-3">
                  <FiUser className="text-white" />
                </div>
                <div>
                  {/* <p className="font-bold">1-on-1 Sessions</p> */}
                  <p className="text-sm text-white/80">
                    Direct therapist attention
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-white/5 p-3 rounded-lg border border-white/10">
                <div className="bg-[#76B041] p-2 rounded-lg mr-3">
                  <FiCalendar className="text-white" />
                </div>
                <div>
                  <p className="font-bold">Flexible Scheduling</p>
                  <p className="text-sm text-white/80">
                    Available 7 days a week
                  </p>
                </div>
              </div>
            </div>

            {/* CTA section */}
            <div className="mb-12">
              <a href="/appointment" className="inline-block">
                <button className="px-8 py-4 bg-[#76B041] hover:bg-[#6AA33B] text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group">
                  Book Your Initial Assessment
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </a>

              <div className="mt-6 flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="flex -space-x-3 mr-3">
                    {[1, 2, 3].map((item) => (
                      <img
                        key={item}
                        src={`https://randomuser.me/api/portraits/${
                          item % 2 === 0 ? "women" : "men"
                        }/${item}${item}.jpg`}
                        alt="Therapist"
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <span className="text-sm">Certified Therapists</span>
                </div>

                <div className="flex items-center text-sm bg-white/10 px-3 py-1 rounded-full">
                  <FiCheckCircle className="text-[#76B041] mr-1" />
                  <span>No long-term contracts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Professional focus */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Main image with professional border */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1470&q=80"
                  alt="Physiotherapist working with patient"
                  className="w-full h-auto"
                />
                {/* Therapist badge overlay */}
                <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-lg shadow-lg backdrop-blur-sm">
                  <div className="flex items-center">
                    <div className="bg-[#1A3D6D] rounded-full p-1.5 mr-2">
                      <FiUsers className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[#1A3D6D] font-bold text-sm">
                        Licensed Therapist
                      </p>
                      <p className="text-[#76B041] text-xs">
                        15 years experience
                      </p>
                    </div>
                  </div>
                </div>
                {/* Treatment plan overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#1A3D6D]/90 p-4 rounded-lg shadow-lg backdrop-blur-sm border border-[#76B041]/30">
                  <div className="text-white">
                    <p className="font-bold">Personalized Treatment Plan</p>
                    <div className="flex justify-between mt-2 text-xs">
                      <span className="text-[#76B041]">Initial Assessment</span>
                      <span className="text-[#76B041]">Progress Tracking</span>
                      <span className="text-[#76B041]">Home Exercises</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-1.5 mt-2">
                      <div
                        className="bg-[#76B041] h-1.5 rounded-full"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating success metric */}
              <div className="absolute -bottom-6 -right-6 bg-[#76B041] p-5 rounded-xl shadow-xl z-20 text-white text-center">
                <p className="text-2xl font-bold">95%</p>
                <p className="text-sm">
                  Patient
                  <br />
                  Satisfaction
                </p>
              </div>

              {/* Floating testimonial */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 max-w-xs">
                <div className="flex items-start">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="Happy patient"
                    className="w-10 h-10 rounded-full border-2 border-[#76B041] object-cover mr-3"
                  />
                  <div>
                    <p className="text-[#1A3D6D] text-sm">
                      "After just 4 sessions, I regained full mobility in my
                      shoulder!"
                    </p>
                    <div className="flex text-yellow-400 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-3 h-3 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
