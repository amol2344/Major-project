const faqs = [
  { q: 'How do I book an appointment?', a: 'Go to Appointment page or the dashboard and select a time that works for you.' },
  { q: 'Can I change my password?', a: 'Yes, from Settings → Security in your dashboard.' },
  { q: 'Is my data secure?', a: 'We recommend deploying behind HTTPS and following best-practice security headers.' }
];

const FAQ = () => (
  <div className="container-responsive py-12">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
    <div className="space-y-4">
      {faqs.map((item, idx) => (
        <details key={idx} className="bg-white rounded-lg shadow p-4" aria-label={`FAQ item ${idx+1}`}>
          <summary className="cursor-pointer text-gray-900 font-medium">{item.q}</summary>
          <p className="text-gray-600 mt-2">{item.a}</p>
        </details>
      ))}
    </div>
  </div>
);

export default FAQ;


