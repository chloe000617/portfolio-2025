import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Brain, TrendingUp, Search, Briefcase } from 'lucide-react';
import { PAGE_DATA } from '../data';

const HomeSection = () => {
  const { hero, capabilities } = PAGE_DATA;

  // Map string icons from data.ts to actual Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain': return <Brain className="text-cyan-400" size={32} />;
      case 'chart': return <TrendingUp className="text-purple-400" size={32} />;
      case 'search': return <Search className="text-pink-400" size={32} />;
      case 'briefcase': return <Briefcase className="text-blue-400" size={32} />;
      default: return <Brain className="text-gray-400" size={32} />;
    }
  };

  // Helper for accent colors (bg opacity)
  const getAccentBg = (colorName: string) => {
      switch (colorName) {
          case 'cyan': return 'bg-cyan-500/10 border-cyan-500/20';
          case 'purple': return 'bg-purple-500/10 border-purple-500/20';
          case 'pink': return 'bg-pink-500/10 border-pink-500/20';
          case 'blue': return 'bg-blue-500/10 border-blue-500/20';
          default: return 'bg-white/5 border-white/10';
      }
  };

  return (
    <div className="flex flex-col gap-24 pb-20 overflow-x-hidden">
      {/* 1. Hero Section */}
      <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 px-4">
        {/* Background Effects */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold tracking-widest uppercase"
            >
              Product & Solution Strategist
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Business Goals</span> <br/>
              with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Technical Execution</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {hero.description}
            </motion.p>
            
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
             >
                <a href="#projects" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95">
                    View Selected Works <ArrowRight size={20} />
                </a>
             </motion.div>
          </div>

          {/* Floating Stats Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20" />
            <div className="relative bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 grid grid-cols-2 gap-10 shadow-2xl">
                {hero.stats.map((stat, idx) => (
                    <div key={idx} className="space-y-2">
                        <div className="text-4xl font-bold text-white tracking-tight">{stat.value}</div>
                        <div className="text-sm font-medium text-gray-400 uppercase tracking-wide">{stat.label}</div>
                    </div>
                ))}
            </div>
          </motion.div>
        </div>

        {/* Bouncing Arrow Element */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-500 cursor-pointer"
            onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
        >
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-gray-600">Problems I Solve</span>
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="bg-white/5 p-2 rounded-full border border-white/5"
            >
                <ArrowDown size={20} className="text-gray-400" />
            </motion.div>
        </motion.div>
      </section>

      {/* 2. Capabilities Section (Redesigned) */}
      <section id="capabilities" className="container mx-auto px-4">
         <div className="flex flex-col mb-16 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Core Capabilities</h2>
            <p className="text-gray-400 text-lg">My toolkit for navigating uncertainty.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
                <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 md:p-10 rounded-2xl border border-white/10 bg-[#121212] hover:border-white/20 transition-all duration-300 group flex flex-col items-start h-full"
                >
                    <div className={`p-4 rounded-xl mb-6 ${getAccentBg(cap.accentColor)}`}>
                       {getIcon(cap.icon)}
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">{cap.title}</h3>
                    
                    <p className="text-gray-400 leading-relaxed mb-8 flex-1 text-sm lg:text-base">
                        {cap.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {cap.tags.map((tag, tIdx) => (
                            <span 
                                key={tIdx} 
                                className="px-3 py-1.5 rounded-md text-xs font-medium bg-white/5 text-gray-400 border border-white/5"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default HomeSection;