import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Reports = () => {
  const { user } = useAuth();
  const [selectedReport, setSelectedReport] = useState(null);
  const [dateRange, setDateRange] = useState({
    start: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
    end: new Date().toISOString().split('T')[0]
  });

  // Mock data - in real app, this would come from API
  const reports = [
    {
      id: 1,
      name: 'User Registration Report',
      description: 'Monthly user registration statistics and trends',
      type: 'user',
      format: 'PDF',
      lastGenerated: '2024-01-20',
      size: '2.3 MB',
      icon: '👥'
    },
    {
      id: 2,
      name: 'Appointment Analytics',
      description: 'Comprehensive appointment data and scheduling patterns',
      type: 'appointment',
      format: 'Excel',
      lastGenerated: '2024-01-19',
      size: '1.8 MB',
      icon: '📅'
    },
    {
      id: 3,
      name: 'Revenue Summary',
      description: 'Financial performance and revenue breakdown',
      type: 'financial',
      format: 'PDF',
      lastGenerated: '2024-01-18',
      size: '3.1 MB',
      icon: '💰'
    },
    {
      id: 4,
      name: 'Doctor Performance Report',
      description: 'Individual doctor statistics and patient satisfaction',
      type: 'performance',
      format: 'Excel',
      lastGenerated: '2024-01-17',
      size: '2.7 MB',
      icon: '👨‍⚕️'
    },
    {
      id: 5,
      name: 'Patient Demographics',
      description: 'Patient age, gender, and location distribution',
      type: 'demographics',
      format: 'PDF',
      lastGenerated: '2024-01-16',
      size: '1.5 MB',
      icon: '📊'
    },
    {
      id: 6,
      name: 'System Usage Report',
      description: 'Platform usage statistics and user engagement',
      type: 'system',
      format: 'Excel',
      lastGenerated: '2024-01-15',
      size: '2.1 MB',
      icon: '💻'
    }
  ];

  const quickStats = [
    { label: 'Total Users', value: '1,234', change: '+12%', trend: 'up' },
    { label: 'Active Appointments', value: '156', change: '+8%', trend: 'up' },
    { label: 'Monthly Revenue', value: '$45,678', change: '+15%', trend: 'up' },
    { label: 'System Uptime', value: '99.9%', change: '+0.1%', trend: 'up' }
  ];

  const handleGenerateReport = (report) => {
    setSelectedReport(report);
    // In real app, this would trigger API call to generate report
    setTimeout(() => {
      alert(`Generating ${report.name}... This would download the report in a real application.`);
      setSelectedReport(null);
    }, 2000);
  };

  const handleDownloadReport = (report) => {
    // In real app, this would trigger actual download
    alert(`Downloading ${report.name}... This would download the file in a real application.`);
  };

  const handleExportData = (format) => {
    // In real app, this would export data in specified format
    alert(`Exporting data in ${format} format... This would download the file in a real application.`);
  };

  const getReportTypeColor = (type) => {
    switch (type) {
      case 'user': return 'bg-blue-100 text-blue-800';
      case 'appointment': return 'bg-green-100 text-green-800';
      case 'financial': return 'bg-yellow-100 text-yellow-800';
      case 'performance': return 'bg-purple-100 text-purple-800';
      case 'demographics': return 'bg-indigo-100 text-indigo-800';
      case 'system': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getFormatIcon = (format) => {
    switch (format) {
      case 'PDF': return '📄';
      case 'Excel': return '📊';
      case 'CSV': return '📋';
      default: return '📁';
    }
  };

  if (user?.role !== 'admin') {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">🚫</div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Access Denied</h2>
        <p className="text-gray-600">You don't have permission to access this page.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Generate and download comprehensive system reports</p>
        </div>
        <div className="flex space-x-3 mt-4 sm:mt-0">
          <button
            onClick={() => handleExportData('CSV')}
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            <span className="mr-2">📊</span>
            Export CSV
          </button>
          <button
            onClick={() => handleExportData('Excel')}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span className="mr-2">📈</span>
            Export Excel
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <span className={`text-lg ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.trend === 'up' ? '↗️' : '↘️'}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-1">from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Date Range Filter */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Date Range</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items:end">
            <button
              onClick={() => {
                setDateRange({
                  start: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
                  end: new Date().toISOString().split('T')[0]
                });
              }}
              className="w-full px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Reset to Current Month
            </button>
          </div>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div key={report.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                {report.icon}
              </div>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getReportTypeColor(report.type)}`}>
                {report.type}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{report.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{report.description}</p>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Format:</span>
                <span className="flex items-center">
                  {getFormatIcon(report.format)} {report.format}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Last Generated:</span>
                <span>{report.lastGenerated}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Size:</span>
                <span>{report.size}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleGenerateReport(report)}
                disabled={selectedReport?.id === report.id}
                className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {selectedReport?.id === report.id ? 'Generating...' : 'Generate'}
              </button>
              <button
                onClick={() => handleDownloadReport(report)}
                className="px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                title="Download"
              >
                ⬇️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Trends</h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">📊</div>
            <p className="text-gray-500">Interactive charts would be displayed here</p>
            <p className="text-sm text-gray-400">Integration with Chart.js, Recharts, or similar library</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Report Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-sm">✅</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">User Registration Report generated successfully</p>
              <p className="text-xs text-gray-500">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items:center justify-center">
              <span className="text-sm">📊</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">Appointment Analytics exported to Excel</p>
              <p className="text-xs text-gray-500">15 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-yellow-100 rounded-full hidden" />
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-sm">💰</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">Revenue Summary scheduled for generation</p>
              <p className="text-xs text-gray-500">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
