import React, { useState } from 'react';
import { Check, Mail, User, ChevronDown, Star, ArrowRight, Loader2 } from 'lucide-react';

export const JoinForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: 'general',
    experience: 'beginner'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call delay
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section className="min-h-[calc(100vh-64px)] bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row animate-slide-up border border-slate-100">
        
        {/* Left Side - Visual & Benefits */}
        <div className="lg:w-5/12 bg-emerald-900 relative flex flex-col justify-between p-8 sm:p-12 text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 opacity-40">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Gym background" 
                  className="w-full h-full object-cover" 
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 to-emerald-900/95"></div>

            {/* Content */}
            <div className="relative z-10 space-y-8">
                <div className="animate-fade-in delay-100">
                    <h2 className="text-3xl font-extrabold tracking-tight leading-tight">Start Your <br/>Transformation</h2>
                    <p className="mt-4 text-emerald-100 text-lg">Join thousands of members building strength and confidence every day.</p>
                </div>

                <div className="space-y-5 animate-fade-in delay-200">
                    <div className="flex items-center gap-4">
                        <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-sm">
                            <Star className="w-5 h-5 text-emerald-300" />
                        </div>
                        <span className="font-medium text-lg">Customized Workout Plans</span>
                    </div>
                     <div className="flex items-center gap-4">
                        <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-sm">
                            <Check className="w-5 h-5 text-emerald-300" />
                        </div>
                        <span className="font-medium text-lg">Progress Tracking</span>
                    </div>
                     <div className="flex items-center gap-4">
                        <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-sm">
                            <User className="w-5 h-5 text-emerald-300" />
                        </div>
                        <span className="font-medium text-lg">Expert Community Support</span>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-12 pt-8 border-t border-white/20 animate-fade-in delay-300">
                <p className="italic text-emerald-100 text-sm leading-relaxed">"The best decision I made for my health this year. The guides are so easy to follow!"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center font-bold text-emerald-900 text-xs">SJ</div>
                  <p className="font-bold text-sm">- Sarah J.</p>
                </div>
            </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-7/12 p-8 sm:p-12 bg-white relative">
            {status === 'success' ? (
                 <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 animate-bounce">
                        <Check className="w-12 h-12 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">Welcome Aboard!</h3>
                    <p className="text-lg text-slate-600 mb-10 max-w-sm mx-auto">Your profile has been created. Check your email for your starter guide.</p>
                    
                    <div className="flex flex-col gap-3 w-full max-w-xs">
                      <button onClick={() => window.location.hash = '#/workouts'} className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">
                        Browse Workouts
                      </button>
                      <button onClick={() => {
                        setStatus('idle');
                        setFormData({ name: '', email: '', goal: 'general', experience: 'beginner' });
                      }} className="w-full py-3 text-emerald-600 font-semibold hover:bg-emerald-50 rounded-xl transition-colors">
                        Register Another Person
                      </button>
                    </div>
                </div>
            ) : (
                <>
                <div className="mb-10">
                    <h3 className="text-3xl font-bold text-slate-900">Create account</h3>
                    <p className="text-slate-500 mt-2 text-lg">Get unlimited access to all workout guides.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="name">Full Name</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-emerald-500 transition-colors" />
                                <input 
                                    id="name"
                                    type="text" 
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-slate-50 focus:bg-white font-medium"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>
                         <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="email">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-emerald-500 transition-colors" />
                                <input 
                                    id="email"
                                    type="email" 
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-slate-50 focus:bg-white font-medium"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="goal">Primary Goal</label>
                        <div className="relative group">
                            <select 
                                id="goal"
                                value={formData.goal}
                                onChange={handleChange}
                                className="w-full pl-5 pr-10 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-slate-50 focus:bg-white appearance-none font-medium cursor-pointer"
                            >
                                <option value="general">💪 General Fitness</option>
                                <option value="strength">🏋️ Build Strength</option>
                                <option value="weight_loss">🔥 Lose Weight</option>
                                <option value="mobility">🧘 Improve Mobility</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none group-focus-within:text-emerald-500" />
                        </div>
                    </div>

                    <div className="space-y-3 pt-2">
                         <label className="text-sm font-bold text-slate-700 ml-1">Experience Level</label>
                         <div className="grid grid-cols-3 gap-3">
                            {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                                <label key={level} className={`cursor-pointer border rounded-xl p-3 flex flex-col items-center justify-center text-center transition-all duration-200 ${
                                  formData.experience === level.toLowerCase() 
                                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm ring-1 ring-emerald-500' 
                                    : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50 text-slate-600'
                                }`}>
                                    <input 
                                        type="radio" 
                                        name="experience" 
                                        value={level.toLowerCase()}
                                        checked={formData.experience === level.toLowerCase()}
                                        onChange={(e) => setFormData({...formData, experience: e.target.value})}
                                        className="sr-only"
                                    />
                                    <span className="font-semibold text-sm">{level}</span>
                                </label>
                            ))}
                         </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="w-full mt-6 bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-emerald-200 active:scale-[0.98]"
                    >
                        {status === 'submitting' ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Creating Profile...
                            </>
                        ) : (
                            <>
                                Create Account
                                <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                    </button>
                    <p className="text-xs text-center text-slate-400 mt-6">
                        By joining, you agree to our <span className="underline hover:text-slate-600 cursor-pointer">Terms of Service</span> and <span className="underline hover:text-slate-600 cursor-pointer">Privacy Policy</span>.
                    </p>
                </form>
                </>
            )}
        </div>
      </div>
    </section>
  );
};
