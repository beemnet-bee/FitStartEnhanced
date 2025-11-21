import React from 'react';
import { Users, Target, Trophy } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-base font-bold text-emerald-600 tracking-wide uppercase">About Us</h2>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            We Make Fitness Accessible
          </h1>
        </div>

        {/* Main Content - Flexbox Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 animate-slide-in-left delay-200">
            <div className="relative">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Gym team discussing workout" 
                className="relative rounded-2xl shadow-2xl border-4 border-white transform transition-transform hover:scale-[1.02] duration-500"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block animate-slide-up delay-500">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Community</p>
                    <p className="font-bold text-slate-900 text-lg">5,000+ Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-8 animate-slide-in-right delay-300">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in 2025, FitStart was born from a simple idea: fitness information is too complicated. We wanted to strip away the noise and provide a clean, simple starting point for anyone looking to improve their health.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mt-4">
                We don't believe in crash diets or impossible routines. We believe in consistency, basic movements, and building habits that last a lifetime.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900">Clear Goals</h4>
                <p className="text-sm text-slate-600">Defined paths for every fitness level.</p>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <Trophy className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900">Real Success</h4>
                <p className="text-sm text-slate-600">Celebrating every milestone you reach.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};