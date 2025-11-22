import { FiStar } from 'react-icons/fi';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 transform hover:-translate-y-2">
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Decorative quote icon */}
      <div className="absolute top-4 right-6 text-gray-200 group-hover:text-blue-100 transition-colors duration-500">
        <FaQuoteRight size={80} />
      </div>

      <div className="p-8 relative z-10">
        {/* Rating stars */}
        <div className="flex mb-6">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="mr-1 transform transition-all duration-300 hover:scale-125 hover:rotate-12"
            >
              <FiStar
                className={`text-2xl ${
                  i < (testimonial?.rating || 0)
                    ? 'text-yellow-400 fill-yellow-400 drop-shadow-[0_2px_4px_rgba(234,179,8,0.3)]'
                    : 'text-gray-200'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Testimonial text */}
        <div className="relative">
          <FaQuoteLeft className="absolute -top-4 -left-2 text-blue-200 text-3xl opacity-80 group-hover:text-blue-300 transition-colors duration-300" />
          <p className="text-gray-700 mb-8 text-lg leading-relaxed font-medium pl-6 pr-2 group-hover:text-gray-800 transition-colors duration-300">
            {testimonial?.content}
          </p>
          <FaQuoteRight className="absolute -bottom-6 right-0 text-blue-200 text-3xl opacity-80 group-hover:text-blue-300 transition-colors duration-300" />
        </div>

        {/* Author info */}
        <div className="flex items-center mt-10 group-hover:translate-x-1 transition-transform duration-300">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
              <span className="relative z-10">{testimonial?.name?.charAt(0)}</span>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute -inset-2 border-2 border-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div>
            <h4 className="font-bold text-gray-900 text-lg">{testimonial?.name}</h4>
            <p className="text-sm text-blue-600 font-medium">{testimonial?.role}</p>
            {testimonial?.company && (
              <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">
                @{testimonial.company}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Animated hover bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 opacity-10 -rotate-45 origin-bottom-left transform -translate-y-1/2 group-hover:opacity-20 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default TestimonialCard;
