
import { FiClock, FiActivity, FiHeart, FiPlay, FiBarChart2, FiStar, FiUser } from 'react-icons/fi';

const ExerciseCard = ({ exercise, isFavorite, onToggleFavorite }) => {
  const formattedDifficulty =
    exercise.difficulty.charAt(0).toUpperCase() + exercise.difficulty.slice(1);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 relative border border-gray-100/50">
      {/* Floating favorite button */}
      <button
        onClick={onToggleFavorite}
        className="absolute top-5 right-5 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg hover:shadow-md transition-all"
        aria-label="Add to favorites"
      >
        <FiHeart
          className={`text-gray-400 group-hover:text-red-500 transition-colors duration-300 ${
            isFavorite ? 'text-red-500' : ''
          }`}
        />
      </button>

      {/* Image container */}
      <div className="relative overflow-hidden h-72">
        <img
          src={exercise.image}
          alt={exercise.title}
          loading="lazy"
          className="w-full h-full object-cover absolute inset-0 transform scale-100 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        {/* Difficulty badge */}
        <div className="absolute top-5 left-5">
          <span
            className={`inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full shadow-md ${
              formattedDifficulty === 'Beginner'
                ? 'bg-green-50 text-green-800 border border-green-100'
                : formattedDifficulty === 'Intermediate'
                ? 'bg-blue-50 text-blue-800 border border-blue-100'
                : 'bg-purple-50 text-purple-800 border border-purple-100'
            }`}
          >
            {formattedDifficulty}
          </span>
        </div>

        {/* Therapist Info */}
        {exercise.therapist && (
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="bg-blue-100 p-1.5 rounded-full mr-2">
                <FiUser className="text-blue-600 text-sm" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-900">{exercise.therapist.name}</p>
                <p className="text-xs text-gray-500">{exercise.therapist.specialty}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">{exercise.title}</h3>
          <div className="flex items-center bg-yellow-50 px-2.5 py-1 rounded-full border border-yellow-100">
            <FiStar className="text-yellow-400 mr-1 text-sm" />
            <span className="text-xs font-medium text-yellow-800">{exercise.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-5 text-sm leading-relaxed">{exercise.description}</p>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-gray-50 p-2 rounded-xl text-center border border-gray-100 hover:bg-gray-100 transition-all">
            <FiClock className="mx-auto text-blue-500 mb-1" />
            <span className="text-xs font-medium text-gray-700">{exercise.duration}</span>
          </div>
          <div className="bg-gray-50 p-2 rounded-xl text-center border border-gray-100 hover:bg-gray-100 transition-all">
            <FiActivity className="mx-auto text-green-500 mb-1" />
            <span className="text-xs font-medium text-gray-700">{exercise.calories} cal</span>
          </div>
          <div className="bg-gray-50 p-2 rounded-xl text-center border border-gray-100 hover:bg-gray-100 transition-all">
            <FiBarChart2 className="mx-auto text-purple-500 mb-1" />
            <span className="text-xs font-medium text-gray-700">{exercise.completed || '—'}+</span>
          </div>
        </div>

        {/* Equipment */}
        {exercise.equipment && exercise.equipment !== 'None' && (
          <div className="mb-4">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
              Requires: {exercise.equipment.join(', ')}
            </span>
          </div>
        )}

        {/* Action button */}
        <div className="relative overflow-hidden rounded-xl group">
          <button className="w-full flex items-center justify-center py-3.5 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
            <FiPlay className="mr-2 group-hover:animate-pulse" />
            <span>Start Exercise</span>
          </button>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-20 rounded-xl -z-10 blur-md transition-opacity duration-300" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-teal-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
};

export default ExerciseCard;
