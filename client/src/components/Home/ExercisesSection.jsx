import { FiArrowRight } from "react-icons/fi";
import ExerciseCard from "../shared/ExerciseCard";

const ExercisesSection = ({ featuredExercises }) => {
  return (
    <section className="py-20 bg-[#F5F6F7] font-['Open_Sans']">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-[#1A3D6D] bg-[#EAF4FB] rounded-full mb-4">
              EXERCISE LIBRARY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D6D] mb-2 font-['Montserrat']">
              Evidence-Based <span className="text-[#76B041]">Protocols</span>
            </h2>
            <p className="text-[#4A4A4A] text-lg">
              Clinically-proven routines for targeted rehabilitation
            </p>
          </div>
          <a href="/exercises" className="inline-block">
            <button className="flex items-center px-6 py-3 bg-white text-[#1A3D6D] font-medium rounded-lg shadow-sm border border-gray-200 hover:bg-[#EAF4FB] hover:shadow-md transition-all">
              View all exercises <FiArrowRight className="ml-2" />
            </button>
          </a>
        </div>

        {/* Exercises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExercisesSection;
