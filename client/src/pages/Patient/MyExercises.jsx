import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { patients, patientExercises } from '../../data/patients';
import { exercises } from '../../data/exercises';

const MyExercises = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showExerciseModal, setShowExerciseModal] = useState(false);

  // Mock patient data - in real app, this would come from user context
  const currentPatient = patients[0]; // Sarah Johnson
  const patientExs = patientExercises.filter(ex => ex.patientId === currentPatient.id);

  const completedExercises = patientExs.filter(ex => ex.status === 'Completed');
  const pendingExercises = patientExs.filter(ex => ex.status === 'Pending');
  const overdueExercises = patientExs.filter(ex => 
    ex.status === 'Pending' && new Date(ex.dueDate) < new Date()
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-600 bg-green-100';
      case 'Pending': return 'text-yellow-600 bg-yellow-100';
      case 'Overdue': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return (
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'Pending':
        return (
          <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'Overdue':
        return (
          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Core Strengthening': 'bg-blue-100 text-blue-800',
      'Flexibility': 'bg-green-100 text-green-800',
      'Leg Strengthening': 'bg-purple-100 text-purple-800',
      'Posture Correction': 'bg-orange-100 text-orange-800',
      'Upper Body': 'bg-pink-100 text-pink-800',
      'Mobility': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const filteredExercises = () => {
    let exercises = patientExs;
    
    switch (activeTab) {
      case 'completed':
        exercises = completedExercises;
        break;
      case 'pending':
        exercises = pendingExercises;
        break;
      case 'overdue':
        exercises = overdueExercises;
        break;
      default:
        exercises = patientExs;
    }

    if (searchTerm) {
      exercises = exercises.filter(ex => 
        ex.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ex.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ex.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== 'all') {
      exercises = exercises.filter(ex => ex.category === categoryFilter);
    }

    if (statusFilter !== 'all') {
      exercises = exercises.filter(ex => ex.status === statusFilter);
    }

    return exercises;
  };

  const handleMarkComplete = (exerciseId) => {
    // In real app, this would be an API call to update the exercise status
    // console.log('Mark exercise complete:', exerciseId);
    // Example:
    // api.updateExerciseStatus(exerciseId, 'Completed').then(() => {
    //   // refresh data
    // });
  };

  const handleViewDetails = (exercise) => {
    setSelectedExercise(exercise);
    setShowExerciseModal(true);
  };

  const ExerciseCard = ({ exercise }) => {
    const isOverdue = exercise.status === 'Pending' && new Date(exercise.dueDate) < new Date();
    const status = isOverdue ? 'Overdue' : exercise.status;
    
    return (
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{exercise.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(exercise.category)}`}>
                {exercise.category}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {getStatusIcon(status)}
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
              {status}
            </span>
          </div>
        </div>

        <p className="text-gray-600 text-sm">{exercise.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="font-medium text-gray-600">Frequency</p>
            <p className="text-gray-900">{exercise.frequency}</p>
          </div>
          <div>
            <p className="font-medium text-gray-600">Sets & Reps</p>
            <p className="text-gray-900">{exercise.sets} × {exercise.reps}</p>
          </div>
          <div>
            <p className="font-medium text-gray-600">Duration</p>
            <p className="text-gray-900">{exercise.duration}</p>
          </div>
          <div>
            <p className="font-medium text-gray-600">Due Date</p>
            <p className={`text-gray-900 ${isOverdue ? 'text-red-600 font-medium' : ''}`}>
              {new Date(exercise.dueDate).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex space-x-3 pt-4 border-t border-gray-200">
          <button
            onClick={() => handleViewDetails(exercise)}
            className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            View Details
          </button>
          {exercise.status === 'Pending' && (
            <button
              onClick={() => handleMarkComplete(exercise.id)}
              className="px-4 py-2 text-sm font-medium text-green-600 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
            >
              Mark Complete
            </button>
          )}
        </div>
      </div>
    );
  };

  const ExerciseModal = () => {
    if (!selectedExercise) return null;

    const fullExercise = exercises.find(ex => ex.id === selectedExercise.exerciseId) || selectedExercise;

    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
        <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{fullExercise.name}</h3>
            <button
              onClick={() => setShowExerciseModal(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Description</h4>
              <p className="text-gray-600">{fullExercise.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Category</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(fullExercise.category)}`}>
                  {fullExercise.category}
                </span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Difficulty</h4>
                <p className="text-gray-600">{fullExercise.difficulty}</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Instructions</h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-600">
                {fullExercise.instructions?.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Benefits</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {fullExercise.benefits?.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            {fullExercise.contraindications && fullExercise.contraindications.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Precautions</h4>
                <ul className="list-disc list-inside space-y-1 text-red-600">
                  {fullExercise.contraindications.map((contraindication, index) => (
                    <li key={index}>{contraindication}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 border-t border-gray-200">
              <h4 className="font-medium text-gray-900 mb-2">Your Assignment</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-gray-600">Frequency</p>
                  <p className="text-gray-900">{selectedExercise.frequency}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Sets & Reps</p>
                  <p className="text-gray-900">{selectedExercise.sets} × {selectedExercise.reps}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Duration</p>
                  <p className="text-gray-900">{selectedExercise.duration}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-600">Due Date</p>
                  <p className="text-gray-900">{new Date(selectedExercise.dueDate).toLocaleDateString()}</p>
                </div>
              </div>
              {selectedExercise.notes && (
                <div className="mt-3">
                  <p className="font-medium text-gray-600 mb-1">Notes</p>
                  <p className="text-gray-900">{selectedExercise.notes}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Exercises</h1>
          <p className="text-gray-600">Track your assigned therapy exercises</p>
        </div>
        <button className="mt-4 sm:mt-0 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Log Exercise
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="p-2 bg-blue-100 rounded-lg w-fit mx-auto mb-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-900">{patientExs.length}</p>
          <p className="text-sm text-gray-600">Total Assigned</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="p-2 bg-green-100 rounded-lg w-fit mx-auto mb-3">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-900">{completedExercises.length}</p>
          <p className="text-sm text-gray-600">Completed</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="p-2 bg-yellow-100 rounded-lg w-fit mx-auto mb-3">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-900">{pendingExercises.length}</p>
          <p className="text-sm text-gray-600">Pending</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 text-center">
          <div className="p-2 bg-red-100 rounded-lg w-fit mx-auto mb-3">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-900">{overdueExercises.length}</p>
          <p className="text-sm text-gray-600">Overdue</p>
        </div>
      </div>

      {/* Tabs and Filters */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 px-6">
            {[
              { key: 'all', label: 'All', count: patientExs.length },
              { key: 'pending', label: 'Pending', count: pendingExercises.length },
              { key: 'completed', label: 'Completed', count: completedExercises.length },
              { key: 'overdue', label: 'Overdue', count: overdueExercises.length }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab.key
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search exercises..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="sm:w-48">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="Core Strengthening">Core Strengthening</option>
                <option value="Flexibility">Flexibility</option>
                <option value="Leg Strengthening">Leg Strengthening</option>
                <option value="Posture Correction">Posture Correction</option>
                <option value="Upper Body">Upper Body</option>
                <option value="Mobility">Mobility</option>
              </select>
            </div>
            <div className="sm:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>

          {/* Exercises List */}
          <div className="space-y-6">
            {filteredExercises().length > 0 ? (
              filteredExercises().map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))
            ) : (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No exercises found</h3>
                <p className="text-gray-600">
                  {searchTerm || categoryFilter !== 'all' || statusFilter !== 'all'
                    ? 'Try adjusting your search or filters'
                    : `No ${activeTab} exercises at the moment`
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Exercise Detail Modal */}
      {showExerciseModal && <ExerciseModal />}
    </div>
  );
};

export default MyExercises;
