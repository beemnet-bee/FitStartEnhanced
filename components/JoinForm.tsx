import React, { useState } from 'react';

export const JoinForm: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000); // Reset after 3s
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="bg-emerald-600 py-8 px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Join FitStart Today</h2>
          <p className="text-emerald-100 mt-2">Start your journey with us</p>
        </div>

        <div className="p-8 md:p-10">
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Success!</h3>
              <p className="text-slate-600">Your membership request has been sent.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                />
              </div>

              {/* Goal Dropdown */}
              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-slate-700 mb-1">Fitness Goal</label>
                <div className="relative">
                  <select
                    id="goal"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all appearance-none bg-white"
                  >
                    <option value="general">General Fitness</option>
                    <option value="strength">Build Strength</option>
                    <option value="weight_loss">Weight Loss</option>
                    <option value="flexibility">Flexibility</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white font-bold py-3.5 px-4 rounded-lg hover:bg-emerald-700 hover:shadow-lg transition-all transform active:scale-[0.99]"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};