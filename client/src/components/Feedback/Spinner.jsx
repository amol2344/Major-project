const Spinner = ({ label = 'Loading...' }) => (
  <div className="w-full flex items-center justify-center py-12" role="status" aria-live="polite">
    <svg className="animate-spin h-6 w-6 text-blue-600 mr-3" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>
    <span className="text-sm text-gray-600">{label}</span>
  </div>
);

export default Spinner;


