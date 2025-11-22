import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { patients, patientProgress } from '../../data/patients';

const Progress = () => {
  const { user } = useAuth();
  const currentPatient = patients[0];
  const progressList = patientProgress.filter(p => p.patientId === currentPatient.id);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Progress Tracking</h1>
          <p className="text-gray-600">Monitor your recovery journey over time</p>
        </div>
      </div>

      {/* KPI Cards */}
      {progressList.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-sm text-gray-600">Latest Pain Level</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{progressList[progressList.length - 1].painLevel}/10</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-sm text-gray-600">Latest Mobility</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{progressList[progressList.length - 1].mobilityScore}/10</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-sm text-gray-600">Latest Strength</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{progressList[progressList.length - 1].strengthScore}/10</p>
          </div>
        </div>
      )}

      {/* Charts Placeholder */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Charts</h3>
        {/* Replace this placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Example using a charting library */}
          {/* <ResponsiveContainer width="100%" height={200}>
            <LineChart data={progressList}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="painLevel" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer> */}
          <div className="h-56 bg-gray-50 rounded-lg flex flex-col items-center justify-center">
            <div className="text-4xl mb-2">📈</div>
            <p className="text-gray-500">Pain Level over time</p>
            <p className="text-xs text-gray-400">Integrate Recharts/Chart.js here</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Timeline</h3>
        <div className="space-y-4">
          {progressList.slice().reverse().map((item) => (
            <div key={item.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2" />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-900">{new Date(item.date).toLocaleDateString()}</p>
                  <div className="flex space-x-4 text-sm">
                    <span>Pain: <span className="text-gray-900">{item.painLevel}/10</span></span>
                    <span>Mobility: <span className="text-gray-900">{item.mobilityScore}/10</span></span>
                    <span>Strength: <span className="text-gray-900">{item.strengthScore}/10</span></span>
                  </div>
                </div>
                <p className="text-gray-700">{item.notes}</p>
                {item.therapistNotes && (
                  <div className="bg-blue-50 p-3 rounded mt-2">
                    <p className="text-sm font-medium text-blue-900 mb-1">Therapist Notes</p>
                    <p className="text-sm text-blue-800">{item.therapistNotes}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;


