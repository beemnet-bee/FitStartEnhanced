import React, { useState } from 'react';
import { Dumbbell, Heart, PersonStanding, X, Clock, Target, ChevronRight } from 'lucide-react';

interface Workout {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  duration: string;
  level: string;
  exercises: string[];
}

export const Workouts: React.FC = () => {
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);

  const workouts: Workout[] = [
    {
      title: 'Strength Training',
      description: 'Build muscle and increase power with our foundational lifting guides. Perfect for beginners and intermediates.',
      icon: <Dumbbell className="w-6 h-6 text-emerald-600" />,
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '45-60 mins',
      level: 'Intermediate',
      exercises: [
        'Barbell Squats: 3 sets x 8-10 reps', 
        'Bench Press: 3 sets x 8-12 reps', 
        'Deadlifts: 3 sets x 6-8 reps', 
        'Overhead Press: 3 sets x 10-12 reps'
      ]
    },
    {
      title: 'Cardio Fitness',
      description: 'Boost your endurance and heart health with varied routines ranging from HIIT to steady-state running.',
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      image: 'https://images.unsplash.com/photo-1434596922112-19c563067271?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '30-45 mins',
      level: 'Beginner Friendly',
      exercises: [
        'Warm-up Jog: 5 mins', 
        'High Intensity Intervals: 20 mins', 
        'Steady State Run: 15 mins', 
        'Cool-down Walk: 5 mins'
      ]
    },
    {
      title: 'Stretching & Mobility',
      description: 'Improve flexibility, reduce injury risk, and recover faster with our daily stretching flows.',
      icon: <PersonStanding className="w-6 h-6 text-indigo-500" />,
      image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '15-20 mins',
      level: 'All Levels',
      exercises: [
        'Forward Fold: 60 seconds', 
        'Cat-Cow Stretch: 10 reps', 
        'Pigeon Pose: 2 mins per side', 
        'Hamstring Stretch: 1 min per side'
      ]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Workout Programs</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Choose a category to get started. We offer specialized plans tailored to your fitness goals.
        </p>
      </div>

      {/* 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {workouts.map((workout, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col border border-slate-100"
          >
            {/* Card Image */}
            <div className="h-56 overflow-hidden relative">
              <img 
                src={workout.image} 
                alt={workout.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-sm">
                {workout.icon}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{workout.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                {workout.description}
              </p>
              <button 
                onClick={() => setSelectedWorkout(workout)}
                className="w-full py-2.5 px-4 border border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors flex items-center justify-center group"
              >
                View Details
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedWorkout && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedWorkout(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-slide-up relative flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedWorkout(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur-md hover:bg-white rounded-full shadow-sm transition-colors"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            {/* Modal Header Image - Fixed at top */}
            <div className="h-48 relative shrink-0">
              <img 
                src={selectedWorkout.image} 
                alt={selectedWorkout.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-6 text-white">
                <div className="flex items-center gap-2 mb-1">
                   {/* Clone icon element to change color to white for header */}
                   {React.cloneElement(selectedWorkout.icon as React.ReactElement, { className: "w-5 h-5 text-white" })}
                   <span className="text-emerald-300 font-bold text-sm uppercase tracking-wider">Program Details</span>
                </div>
                <h3 className="text-2xl font-bold">{selectedWorkout.title}</h3>
              </div>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
              
              {/* Metadata Chips */}
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-md">
                  <Clock className="w-4 h-4 text-slate-500" />
                  {selectedWorkout.duration}
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-md">
                  <Target className="w-4 h-4 text-slate-500" />
                  {selectedWorkout.level}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  {selectedWorkout.description} This program is designed to help you achieve consistent results through structured progression.
                </p>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <span className="w-1.5 h-5 bg-emerald-500 rounded-full mr-2"></span>
                    Sample Routine
                  </h4>
                  <ul className="space-y-3">
                    {selectedWorkout.exercises.map((exercise, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-700">
                        <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
                        {exercise}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => setSelectedWorkout(null)}
                className="w-full py-3.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 hover:shadow-lg transition-all active:scale-[0.98]"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};