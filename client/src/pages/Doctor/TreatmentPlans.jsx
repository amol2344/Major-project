// src/components/TreatmentPlans.jsx
import { useMemo, useState } from 'react';
import { exercises } from '../../data/exercises';
import { treatmentPlans } from '../../data/treatmentPlans';

const TreatmentPlans = () => {
  const [search, setSearch] = useState('');

  const plans = useMemo(() => {
    return treatmentPlans.filter(p =>
      p.patientName.toLowerCase().includes(search.toLowerCase()) ||
      p.diagnosis.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Treatment Plans</h1>
          <p className="text-gray-600">Create and manage patient treatment plans</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by patient or diagnosis"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
          />
        </div>
      </div>

      <div className="space-y-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-lg shadow p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{plan.patientName}</h3>
                <p className="text-sm text-gray-600">Diagnosis: {plan.diagnosis}</p>
                <p className="text-sm text-gray-600">Duration: {plan.startDate} → {plan.endDate}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                {plan.status}
              </span>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Goals</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {plan.goals.map((goal, i) => (
                  <li key={i}>{goal}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Exercises</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {plan.exercises.map((ex, i) => {
                  const meta = exercises.find(e => e.id === ex.exerciseId);
                  return (
                    <div key={i} className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-gray-900">{ex.name}</p>
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                          {meta?.category || 'N/A'}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        {ex.frequency} • {ex.sets} × {ex.reps} • {ex.duration}
                      </p>
                      {ex.notes && (
                        <p className="text-xs text-gray-700 mt-1">Notes: {ex.notes}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {plan.progressNotes?.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-2">Progress Notes</h4>
                <div className="space-y-2">
                  {plan.progressNotes.map((note, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded">
                      <p className="text-xs text-gray-500 mb-1">{note.date}</p>
                      <p className="text-sm text-gray-900">{note.notes}</p>
                      {note.nextSteps && (
                        <p className="text-xs text-gray-700 mt-1">Next: {note.nextSteps}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentPlans;