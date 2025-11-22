import { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | success | error

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row gap-3" aria-label="Newsletter signup">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
        aria-invalid={status==='error'}
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Subscribe</button>
      {status === 'success' && <span className="text-sm text-green-700" role="status">Thanks! Please check your inbox.</span>}
      {status === 'error' && <span className="text-sm text-red-700" role="alert">Please enter a valid email.</span>}
    </form>
  );
};

export default NewsletterSignup;


