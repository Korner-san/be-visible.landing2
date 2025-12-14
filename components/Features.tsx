import React from 'react';
import { Icon } from './ui/Icon';

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-start">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-black text-[#0d141b] mb-6 leading-tight">
              Total Visibility Command.<br/>
              <span className="text-primary">Don't guess. Know.</span>
            </h2>
            <p className="text-lg text-gray-500">
              Traditional SEO tools are blind to AI. Our platform gives you the tools to monitor, improve, and dominate AI recommendations with precision data.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            {/* Stat Badge */}
            <div className="bg-background-light p-6 rounded-2xl border border-gray-200 shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="trending_up" className="text-green-500" />
                <span className="text-sm font-bold text-gray-500">Average Client Growth</span>
              </div>
              <div className="text-4xl font-black text-[#0d141b]">+420%</div>
              <div className="text-sm text-gray-400 mt-1">Increase in AI mentions in 90 days</div>
            </div>
          </div>
        </div>
        
        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="group rounded-2xl bg-background-light border border-gray-200 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <div className="p-8">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-primary flex items-center justify-center mb-4">
                <Icon name="monitoring" />
              </div>
              <h3 className="text-xl font-bold text-[#0d141b] mb-2">Visibility Command Center</h3>
              <p className="text-gray-500 mb-6">Real-time dashboard tracking your share of voice across ChatGPT, Gemini, and Claude.</p>
            </div>
            <div className="h-64 bg-gray-200 mt-auto relative overflow-hidden">
              <img 
                className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm7LP1tgNC3anCiU-A-0i2xvWU7uNONhwDbX0pA2ZVhBcwjFabrZrWLwA92UhuaMbAPB2N-Uata2YmY0UchO-0ijVI1_G-mneWKPDuAczwQrHyoN6B6KDd8BAtAsHS_j63ibzNdO1H111aAda3BswmoiCirVB3J2JKfpNt5HIYoDglvKBye482C1mZiDuMIKLao73rZzR2PrCL3PdgWyRgDWHmrAFxp5Vqmb5AurUHd5qx5KVJOfbKZNUZn2uhDsM53-xaR9Y-LA"
                alt="Dashboard"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-light to-transparent opacity-20"></div>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="group rounded-2xl bg-background-light border border-gray-200 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <div className="p-8">
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                <Icon name="build" />
              </div>
              <h3 className="text-xl font-bold text-[#0d141b] mb-2">Improvement Engine</h3>
              <p className="text-gray-500 mb-6">AI-driven suggestions on exactly what content to change to win the recommendation.</p>
            </div>
            <div className="h-64 bg-gray-200 mt-auto relative overflow-hidden">
              <img 
                className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2kLx6aJVpOmV8eT6i6NnySIctZY1rQA43drvMkmQSIO0-xpplnQjSrJ_9TCfpP5RUD5qy23yH_GKxD4PoIdidWUVeUBORPRwz7ojaoFCUa3SEKFHS4LPqaUaPPSV55sYKtbltqFgK_WhRyMd4wpOFkLME-Sr1Mnwof8MHtEbIm28RMPMXFFTxWHMa4ZUKd-rdFD52o9nkw4vIewjTiZ32w_xROot7tkayho8MdjOAc5O0HULNzdZzRMxmDgg4TkYUUEzFIfipOw"
                alt="Code Editor"
              />
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="group rounded-2xl bg-background-light border border-gray-200 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <div className="p-8">
              <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <Icon name="bolt" />
              </div>
              <h3 className="text-xl font-bold text-[#0d141b] mb-2">Content Auto-Generator</h3>
              <p className="text-gray-500 mb-6">Automatically generate optimized snippets and citations that AI models trust.</p>
            </div>
            <div className="h-64 bg-gray-200 mt-auto relative overflow-hidden">
              <img 
                className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcqG6jeMj9sBkK5WD1boJQ0AZMq8Z4mspHxdJyuKpJCFKJXtBrkHC0L3ZmyjfRWs14wSOA4zzi2aDcU4Xo6WB54GLHF5aapmTQDpI6_qeMAOD2ZlAokV0M0QkxI7RRBpPSgyX8-RBOfEvXnWB_iaCYz3n4QFEfu7EWI1R2Om_mUnIPLI729iBx817j2iEe8V0Z986K2srcVU6QhZ-GxXtqyr3Nzag8P3AQXjGhOGw40MPG24ff52-5Ks-FQwWNuZSqmEL_7AFNPA"
                alt="Split Screen"
              />
            </div>
          </div>
          
          {/* Feature 4 */}
          <div className="group rounded-2xl bg-background-light border border-gray-200 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
            <div className="p-8">
              <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-4">
                <Icon name="emoji_events" />
              </div>
              <h3 className="text-xl font-bold text-[#0d141b] mb-2">Gradual Dominance</h3>
              <p className="text-gray-500 mb-6">Track your Visibility Score improvement week-over-week against competitors.</p>
            </div>
            <div className="h-64 bg-gray-200 mt-auto relative overflow-hidden">
              <img 
                className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuC_simHAd-XVP4JMhcSbqbdiZQ8YySE0fKHdjUB-gvuODvXEg-VenQeL_JVjEFB626r8nLjtgy31C5-XCTlyDofzYafZcIQ-HxFRgTlDywxyHJbYwrQdaM8wKEQiUjZk4FEukyqSAyYiTmSUztLpRy8VjMt2moBJi6YMpjsYy1Upk5EALzP-qV2DP27PCt2MTRr48KSD_0W-ejMvX9MopA8feLQG861Ivc555PTk5uULXawdVufY4fs1KAyPWvCJkif9q_xWiUQ"
                alt="Bar Chart"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};