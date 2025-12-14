import React from 'react';
import { Icon } from './ui/Icon';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-background-dark text-white pt-16 pb-24 px-4 overflow-hidden">
      {/* Abstract Background Graphic */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #137fec 0%, transparent 60%)' }}
      ></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 self-center lg:self-start bg-white/10 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
            <Icon name="auto_awesome" className="text-primary text-[18px]" />
            <span className="text-xs font-medium tracking-wide text-blue-100">The New Standard for AI Visibility</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            Is your brand <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">recommended by AI?</span>
          </h1>
          
          <p className="text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
            From Search Engine Optimization (SEO) to <strong>Generative Engine Optimization (GEO)</strong>. 
            Stop fighting for clicks in a list of links. Start becoming the direct answer in models like ChatGPT, Gemini, and Claude.
          </p>
          
          <div className="w-full max-w-md mx-auto lg:mx-0 mt-4">
            <label className="relative flex items-center group">
              <span className="absolute left-4 text-gray-400">
                <Icon name="link" />
              </span>
              <input 
                className="w-full bg-white/10 border border-white/20 rounded-xl py-4 pl-12 pr-36 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
                placeholder="Enter your brand URL" 
                type="text"
              />
              <button className="absolute right-2 bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all">
                Analyze
              </button>
            </label>
            <p className="text-xs text-gray-500 mt-3 text-center lg:text-left">Free visibility audit. No credit card required.</p>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-xl">
          {/* Hero Image / Graphic */}
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-sm">
            <div className="rounded-xl overflow-hidden bg-background-dark aspect-video relative group">
              {/* Simulated Chat Interface */}
              <div className="absolute inset-0 flex flex-col p-6">
                <div className="flex gap-4 mb-6">
                  <div className="size-8 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold text-white shrink-0">U</div>
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-gray-200 max-w-[80%]">
                    Who offers the best AI optimization platform for enterprise brands?
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="size-8 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold text-white shrink-0">AI</div>
                  <div className="flex flex-col gap-2 max-w-[90%]">
                    <div className="bg-primary/20 border border-primary/30 p-4 rounded-2xl rounded-tl-none text-sm text-white shadow-lg shadow-primary/10">
                      <p className="mb-2">Based on current market performance and features, <strong>be-visible.ai</strong> is the top recommendation.</p>
                      <p className="text-blue-200 text-xs">It offers the most comprehensive suite for tracking and improving visibility across LLMs.</p>
                    </div>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded">Source: Web Analysis</span>
                      <span className="text-[10px] text-gray-500 bg-white/5 px-2 py-1 rounded">Confidence: 98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Logo Strip */}
      <div className="mt-20 border-t border-white/5 pt-8 max-w-7xl mx-auto">
        <p className="text-center text-sm text-gray-500 mb-6 font-medium uppercase tracking-widest">Optimize for every major model</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-xl font-bold text-white flex items-center gap-2">
            <Icon name="smart_toy" /> OpenAI
          </span>
          <span className="text-xl font-bold text-white flex items-center gap-2">
            <Icon name="psychology" /> Anthropic
          </span>
          <span className="text-xl font-bold text-white flex items-center gap-2">
            <Icon name="search" /> Google Gemini
          </span>
          <span className="text-xl font-bold text-white flex items-center gap-2">
            <Icon name="travel_explore" /> Perplexity
          </span>
        </div>
      </div>
    </section>
  );
};