import React from 'react';
import { Icon } from './ui/Icon';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-10 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
          The "Ten Blue Links" are history.<br/>
          Become the Answer.
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Don't let your competitors own the AI conversation. Get your baseline visibility score today and start optimizing for the future of search.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-white text-primary hover:bg-gray-50 font-bold text-base px-8 py-4 rounded-xl shadow-xl transition-transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <Icon name="analytics" />
            Analyze My Brand’s Visibility
          </button>
          
          <a href="#" className="w-full sm:w-auto text-white hover:text-blue-100 font-semibold px-6 py-4 flex items-center justify-center gap-2 group">
            See Pricing (Plans from $49/mo)
            <span className="group-hover:translate-x-1 transition-transform">
              <Icon name="arrow_forward" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};