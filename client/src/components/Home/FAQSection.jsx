import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "What is StrideWell Studio?",
      answer:
        "Stride Well Studio is a dedicated physiotherapy and wellness practice led by experienced physiotherapists and consultants. We specialise in empowering individuals to achieve their health and movement goals through personalized, evidence-based exercise programs and comprehensive care, whether in-clinic, at home, or via teleconsultation.",
    },
    {
      question: "How do your customized exercise programs work?",
      answer:
        "It begins with a comprehensive initial assessment, either in-clinic or virtually. Our physiotherapist will discuss your medical history, current concerns, lifestyle, and goals. Based on this, they will design a tailored exercise program specifically for you, providing detailed instructions, progressions, and ongoing support to ensure you achieve your desired outcomes.",
    },
    {
      question:
        "Are the exercise programs only for rehabilitation, or can they be used for general wellness/fitness?",
      answer:
        "Our programs are highly versatile! While we excel in rehabilitation and pain management, we also design programs for general fitness, strength building, athletic performance enhancement, injury prevention, and overall wellness. Whatever your goal, we can create a plan to help you reach it.",
    },
    {
      question: "What is Home Physiotherapy and how does it work?",
      answer:
        "Home Physiotherapy brings our expert care directly to your doorstep. One of our qualified physiotherapists will visit you in the comfort of your home, bringing necessary equipment. This service is ideal for individuals with mobility challenges, busy schedules, or those who simply prefer treatment in a familiar environment. The session will be tailored to your home setting and specific needs.",
    },
    {
      question: "Which areas do you cover for home physiotherapy services?",
      answer:
        "We currently offer home physiotherapy services within a few areas of Mumbai and Pune. You will be assigned a doctor according to your provided location.",
    },
    {
      question: "How do I book an appointment with Stride Well Studio?",
      answer:
        "You can book an appointment directly through our website by clicking the 'Book Now' or 'Contact Us' button. You can also call us at [Your Phone Number] or email us at [Your Email Address].",
    },
    {
      question: "What should I expect during my first appointment?",
      answer:
        "Your first appointment will involve a thorough initial assessment. Your physiotherapist will ask about your medical history, current symptoms, pain levels, and goals. They will then perform a physical examination (either hands-on in-clinic/home or visual/movement-based during teleconsultation) to diagnose your condition. Following this, they will explain their findings and develop a personalised treatment plan with you.",
    },
    {
      question: "Are your physiotherapists and consultants qualified?",
      answer:
        "Absolutely. All our physiotherapists are fully qualified, licensed, and experienced professionals. Our consultants are experts in their respective fields, ensuring you receive the highest standard of care based on the latest evidence.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "We do not directly bill insurance, but we can provide you with a detailed receipt that you can submit to your insurance provider for reimbursement, depending on your plan.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full mb-4">
            Get Answers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Everything you need to know about our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <button
                className="w-full flex justify-between items-center p-6 md:p-7 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  <svg
                    className={`h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-transform duration-300 ${
                      activeIndex === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`px-6 pb-6 md:px-7 md:pb-7 transition-all duration-300 overflow-hidden ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
