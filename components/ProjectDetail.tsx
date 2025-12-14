import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight, Target, Lightbulb, TrendingUp, Award, Quote } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const { content, style } = project;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:py-10"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="relative w-full max-w-5xl h-full max-h-[90vh] bg-slate-900 rounded-3xl border border-white/10 overflow-hidden flex flex-col shadow-2xl"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white transition-colors border border-white/10"
        >
          <X size={24} />
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          
          {/* Header Image */}
          <div className="relative h-64 md:h-96 w-full shrink-0">
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
             <img 
               src={style.headerBgImage} 
               alt={project.title} 
               className="w-full h-full object-cover"
             />
             <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md tracking-wide"
                    style={{ color: style.accentColor }}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-300 font-medium tracking-wide border border-white/20 px-3 py-1 rounded-full">{project.hashtag}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
                <div className="text-gray-300 text-lg">{project.role}</div>
             </div>
          </div>

          <div className="p-8 md:p-12 space-y-16 max-w-4xl mx-auto">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-xl md:text-3xl font-bold text-white tracking-tight">{stat.val}</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Main Content Layout */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-12">
              <div className="space-y-8">
                 {/* Sidebar / Context */}
                 <div className="sticky top-8">
                    <img 
                      src={style.logoUrl} 
                      alt="Company Logo" 
                      className="w-20 h-20 rounded-xl mb-6 object-cover border border-white/10"
                    />
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Overview</h3>
                    <p 
                      className="text-gray-300 leading-relaxed mb-6"
                      dangerouslySetInnerHTML={{ __html: project.summary }}
                    />
                    {content.image && (
                      <div className="rounded-xl overflow-hidden border border-white/10 mt-6">
                        <img src={content.image.url} alt="Project Context" className="w-full h-auto" />
                        <div className="p-2 bg-black/50 text-xs text-gray-500 text-center">{content.image.caption}</div>
                      </div>
                    )}
                 </div>
              </div>

              <div className="space-y-16">
                 {/* Challenge */}
                 <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-red-500/10 text-red-400">
                        <Target size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{content.challengeLabel || "The Challenge"}</h3>
                    </div>
                    <div 
                      className="text-gray-300 leading-relaxed space-y-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2"
                      dangerouslySetInnerHTML={{ __html: content.challenge }} 
                    />
                 </section>

                 {/* Solution */}
                 <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                        <Lightbulb size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{content.solutionLabel || "The Solution"}</h3>
                    </div>
                    <div className="space-y-6">
                      {content.solution.map((step, idx) => (
                        <div key={idx} className="flex gap-4">
                           <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold text-gray-400">
                              {idx + 1}
                           </div>
                           <div>
                              <div className="font-bold text-white mb-1">{step.step}</div>
                              <div className="text-gray-400 text-sm leading-relaxed">{step.desc}</div>
                           </div>
                        </div>
                      ))}
                    </div>
                 </section>

                 {/* Result */}
                 <section>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <TrendingUp size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{content.resultLabel || "The Impact"}</h3>
                    </div>
                    <div 
                      className="text-gray-300 leading-relaxed bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-2xl"
                      dangerouslySetInnerHTML={{ __html: content.result }} 
                    />
                 </section>

                 {/* Takeaway / Retrospective */}
                 {(content.takeaway || content.retrospective) && (
                   <section className="border-t border-white/10 pt-10">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                          <Award size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Retrospective & Learnings</h3>
                      </div>
                      
                      {content.takeaway && (
                        <div 
                          className="mb-8"
                          dangerouslySetInnerHTML={{ __html: content.takeaway }} 
                        />
                      )}

                      {content.retrospective && (
                         <div className="grid gap-4">
                            {content.retrospective.items.map((item, i) => (
                              <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                                <Quote className="shrink-0 text-gray-500 mt-1" size={20} />
                                <div>
                                   <div className="font-bold text-white text-sm mb-1">{item.title}</div>
                                   <div 
                                      className="text-gray-400 text-sm leading-relaxed" 
                                      dangerouslySetInnerHTML={{ __html: item.text }}
                                   />
                                </div>
                              </div>
                            ))}
                         </div>
                      )}
                   </section>
                 )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;