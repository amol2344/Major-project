import { FiArrowRight, FiUser, FiActivity, FiCalendar } from "react-icons/fi";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FiUser className="w-6 h-6 text-[#76B041]" />,
      title: "Comprehensive Assessment",
      description:
        "Our AI-powered assessment analyzes your condition and creates a personalized treatment plan.",
      bg: "bg-[#EAF4FB]",
    },
    {
      icon: <FiActivity className="w-6 h-6 text-[#76B041]" />,
      title: "Smart Exercise Programs",
      description:
        "3D-animated guides with real-time form correction ensure proper technique.",
      bg: "bg-[#F5F6F7]",
    },
    {
      icon: <FiCalendar className="w-6 h-6 text-[#76B041]" />,
      title: "Progress Optimization",
      description:
        "Our system continuously adapts your program based on recovery metrics.",
      bg: "bg-[#EAF4FB]",
    },
  ];

  return (
    <section className="py-20 bg-white font-['Open_Sans']">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#1A3D6D] bg-[#EAF4FB] rounded-full mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D6D] mb-4 font-['Montserrat']">
            Clinical Expertise{" "}
            <span className="text-[#76B041]">Made Accessible</span>
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
            Our evidence-based approach combines professional knowledge with
            cutting-edge technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bg} p-8 rounded-xl hover:shadow-md transition-all duration-300`}
            >
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1A3D6D] mb-3 font-['Montserrat']">
                {feature.title}
              </h3>
              <p className="text-[#4A4A4A] mb-4">{feature.description}</p>
              <a href="/about" className="inline-block">
                <button className="text-[#76B041] font-medium flex items-center group">
                  Learn more
                  <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
