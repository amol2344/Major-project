const testimonials = [
  { name: 'Sarah J.', quote: 'My back pain reduced significantly after a month!', rating: 5 },
  { name: 'Michael C.', quote: 'Clear plans and supportive team. Highly recommended.', rating: 5 },
  { name: 'Emily R.', quote: 'Loved the home exercise guidance and progress tracking.', rating: 4 }
];

const Star = ({ filled }) => (
  <svg className={`w-4 h-4 ${filled ? 'text-yellow-500' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.034a1 1 0 00-1.175 0l-2.802 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.951-.69l1.07-3.293z"/>
  </svg>
);

const Testimonials = () => (
  <div className="container-responsive py-12">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">What our patients say</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-6">
          <div className="flex mb-2" aria-label={`Rating: ${t.rating} out of 5`} role="img">
            {[1,2,3,4,5].map(n => <Star key={n} filled={n <= t.rating} />)}
          </div>
          <p className="text-gray-800 mb-3">“{t.quote}”</p>
          <p className="text-sm text-gray-600">— {t.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;


