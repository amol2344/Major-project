import TestimonialCard from '../shared/TestimonialCard';

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="py-20 bg-white font-['Open_Sans']">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#1A3D6D] bg-[#EAF4FB] rounded-full mb-4">
            TESTIMONIALS
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Trusted by <span className="text-[#1A3D6D]">Patients</span> & Clinicians
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
            Professional endorsements and patient success stories
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
