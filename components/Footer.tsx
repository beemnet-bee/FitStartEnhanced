import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-base font-medium text-white mb-2">FitStart &copy; {new Date().getFullYear()}</p>
        <p className="text-sm text-slate-500">Dedicated to your health and wellness journey.</p>
      </div>
    </footer>
  );
};