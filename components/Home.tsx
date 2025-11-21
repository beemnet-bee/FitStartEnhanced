import React from 'react';
import { ArrowRight, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left space-y-8 animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-bold tracking-wide uppercase animate-fade-in">
                Start Your Journey
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Fitness Made <br/>
                <span className="text-emerald-600 relative inline-block">
                  Simple
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-2xl mx-auto md:mx-0 leading-relaxed delay-100 animate-slide-up">
                We believe health shouldn't be complicated. Get clear guidance, simple workouts, and a supportive community to help you move better today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4 delay-200 animate-slide-up">
                <Link
                  to="/workouts"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
                >
                  Start Training
                </Link>
                <Link
                  to="/about"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-lg font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:border-emerald-200 transition-all duration-200 group"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 w-full animate-slide-in-right delay-300">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 aspect-square group">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Fitness training"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex items-center gap-4 animate-slide-up delay-500">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Current Streak</p>
                    <p className="text-lg font-bold text-slate-900">14 Days 🔥</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow animate-slide-up delay-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Proven Methods</h3>
              <p className="text-slate-600">No fads. Just science-based movements that build real strength and longevity.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow animate-slide-up delay-300">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Simple Plans</h3>
              <p className="text-slate-600">Easy to follow daily schedules that fit into your busy lifestyle.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow animate-slide-up delay-500">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Results</h3>
              <p className="text-slate-600">Feel the difference in your energy levels within the first week of starting.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};