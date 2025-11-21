import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Flexbox Container for Text + Image */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Text Side */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 mr-2"></span>
              Welcome to FitStart
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Fitness Made <span className="text-emerald-600">Simple</span> for Everyone
            </h1>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              We believe health shouldn't be complicated. Whether you want to build strength, improve cardio, or just move better, we provide the clear, simple guidance you need to get started today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <Link
                to="/workouts"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg transition-all duration-200"
              >
                See Workouts
              </Link>
              <Link
                to="/join"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 group"
              >
                Join Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Person tying running shoes preparing for workout"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};