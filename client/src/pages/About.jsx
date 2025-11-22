import { FiAward, FiUsers, FiActivity } from 'react-icons/fi';

const About = () => {
  return (
    <div className="pt-24 pb-12 overflow-hidden font-body text-darkGray bg-neutralGray">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primaryBlue to-blue-700 text-white py-24 font-heading">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/dot-pattern.svg')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your Journey to <span className="text-freshGreen">Lifelong Wellness</span> Starts Here
          </h1>
          <p className="text-xl text-lightBlueTint mb-8">
            Bridging the gap between injury recovery and lifelong wellness through personalized care
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="StrideWell team" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primaryBlue mb-6 font-heading">
                Empowering Your Health Journey
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-darkGray font-body">
                  Welcome to StrideWell Studio, where we bridge the gap between injury recovery and lifelong wellness. 
                  Founded and led by experienced physiotherapists and consultants, our mission is to empower you with 
                  the knowledge and tools to take control of your health.
                </p>
                <p className="text-lg text-darkGray font-body">
                  We don't believe in one-size-fits-all solutions; instead, we excel at creating customized exercise 
                  plans that precisely fit your unique needs, helping you regain strength, improve mobility, and build 
                  lasting resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-lightBlueTint">
        <div className="container mx-auto px-4 text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-freshGreen/20 text-freshGreen rounded-full text-sm font-medium mb-4 font-heading">
            OUR APPROACH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primaryBlue mb-4 font-heading">
            What Makes StrideWell Different
          </h2>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FiAward className="w-8 h-8 text-primaryBlue" />,
              title: "Personalized Plans",
              description: "Tailored exercise programs designed specifically for your body and goals",
              color: "bg-primaryBlue/10 text-primaryBlue",
            },
            {
              icon: <FiActivity className="w-8 h-8 text-freshGreen" />,
              title: "Holistic Wellness",
              description: "Addressing not just injuries but your overall movement health",
              color: "bg-freshGreen/10 text-freshGreen",
            },
            {
              icon: <FiUsers className="w-8 h-8 text-indigo-600" />,
              title: "Empowerment Focus",
              description: "Teaching you the tools to maintain wellness long after therapy ends",
              color: "bg-indigo-100 text-indigo-600",
            },
          ].map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all font-body">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${value.color}`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-primaryBlue mb-3">{value.title}</h3>
              <p className="text-darkGray">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
