import { useState, useEffect } from 'react';
import { FiUsers, FiSearch, FiPlus } from 'react-icons/fi';

const DoctorPatients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Debounce search input
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchPatients();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, filterStatus]);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/patients?search=${searchTerm}&status=${filterStatus}`);
      if (!response.ok) throw new Error('Failed to fetch patients');
      const data = await response.json();
      setItems(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  const handleView = (id) => {
    console.log(`View patient ${id}`);
    // navigate(`/patients/${id}`);
  };

  const handlePlan = (id) => {
    console.log(`Open treatment plan for ${id}`);
    // openModal(id);
  };

  const handleMessage = (id) => {
    console.log(`Message patient ${id}`);
    // triggerChat(id);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container-responsive py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">My Patients</h1>
          <p className="text-gray-600">Manage your patient caseload and treatment plans</p>
        </div>

        <div className="card p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search patients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-10 w-64"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="input-field"
              >
                <option value="all">All Patients</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="completed">Treatment Completed</option>
              </select>
            </div>
            <button className="btn-primary flex items-center">
              <FiPlus className="mr-2" />
              Add Patient
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Therapist</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  [...Array(5)].map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                        <div className="h-3 bg-gray-100 rounded w-1/3"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                      </td>
                    </tr>
                  ))
                ) : items.length > 0 ? (
                  items.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{p.name}</div>
                        <div className="text-xs text-gray-500">Joined: {new Date(p.joinDate).toLocaleDateString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{p.email || '—'}</div>
                        <div className="text-sm text-gray-500">{p.phone || '—'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{p.therapist || 'Not assigned'}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          p.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : p.status === 'Completed'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button onClick={() => handleView(p.id)} className="text-blue-600 hover:text-blue-900">View</button>
                          <button onClick={() => handlePlan(p.id)} className="text-purple-600 hover:text-purple-900">Plan</button>
                          <button onClick={() => handleMessage(p.id)} className="text-green-600 hover:text-green-900">Message</button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                      <FiUsers className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-sm font-medium text-gray-900">No patients found</h3>
                      <p className="mt-1 text-sm text-gray-500">Adjust your search or filter criteria.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPatients;
