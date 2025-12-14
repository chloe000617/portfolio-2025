import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';
import { PAGE_DATA } from '../data';
import { Project } from '../types';
import ProjectDetail from './ProjectDetail';

const CATEGORIES = [
  "All",
  "Enterprise AI & System Solutions",
  "Product Growth & Commercial Strategy",
  "Market Research & Strategic Analysis"
] as const;

type Category = typeof CATEGORIES[number];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = PAGE_DATA.projects.find(p => p.id === 'smart-transport');
  
  // Filter logic
  const filteredProjects = PAGE_DATA.projects.filter(p => {
    // Always exclude the featured project from the main grid to avoid duplication
    if (p.id === 'smart-transport') return false;

    if (activeTab === "All") return true;
    if (activeTab === "Enterprise AI & System Solutions") return p.category === "Enterprise AI & System Solutions";
    if (activeTab === "Product Growth & Commercial Strategy") return p.category === "Product Growth Strategy";
    if (activeTab === "Market Research & Strategic Analysis") {
      return ["Customer Research", "Business Consulting"].includes(p.category);
    }
    return false;
  });

  return (
    <section id="projects" className="py-24 container mx-auto px-4">
       {/* Section Header */}
       <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4"
          >
            Portfolio
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Selected Works</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
      </div>

      {/* Featured Project - Highlighted at Top */}
      {featuredProject && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div 
            className="group relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-800 shadow-2xl cursor-pointer"
            onClick={() => setSelectedProject(featuredProject)}
          >
             <div className="grid lg:grid-cols-2 gap-0">
                 {/* Image */}
                 <div className="relative h-[400px] lg:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
                    <img 
                      src={featuredProject.style.headerBgImage} 
                      alt={featuredProject.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 z-20">
                         <span className="px-4 py-2 bg-white/90 text-slate-900 text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                             Featured Case Study
                         </span>
                    </div>
                 </div>

                 {/* Content */}
                 <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                    <div className="flex items-center gap-3 mb-6 opacity-80">
                         <span className="text-emerald-400 font-bold tracking-wide text-sm">{featuredProject.category}</span>
                         <span className="w-1 h-1 rounded-full bg-gray-500" />
                         <span className="text-gray-400 text-sm">{featuredProject.hashtag}</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-emerald-300 transition-colors">
                        {featuredProject.title}
                    </h3>

                    <p 
                        className="text-lg text-gray-400 mb-8 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: featuredProject.summary }}
                    />

                    <div className="grid grid-cols-2 gap-8 mb-10 border-t border-white/10 pt-8">
                         {featuredProject.stats.map((s, i) => (
                             <div key={i}>
                                 <div className="text-2xl font-bold text-white mb-1">{s.val}</div>
                                 <div className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</div>
                             </div>
                         ))}
                    </div>

                    <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                        Read Full Case Study <ArrowRight size={16} />
                    </div>
                 </div>
             </div>
          </div>
        </motion.div>
      )}

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {CATEGORIES.map((category) => (
            <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeTab === category 
                    ? 'bg-white text-slate-900 border-white' 
                    : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white'
                }`}
            >
                {category}
            </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
            {filteredProjects.map((project) => (
                <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={project.id}
                    className="group flex flex-col rounded-3xl border border-white/10 bg-slate-800/50 hover:bg-slate-800 hover:border-white/20 transition-all cursor-pointer overflow-hidden h-full"
                    onClick={() => setSelectedProject(project)}
                >
                    {/* Card Image */}
                    <div className="h-48 relative overflow-hidden">
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                        <img 
                            src={project.style.featuredCardImage || project.style.headerBgImage} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 z-20 p-2 bg-slate-900/80 backdrop-blur rounded-lg border border-white/10">
                            <img src={project.style.logoUrl} alt="logo" className="w-6 h-6 rounded-full" />
                        </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span 
                                className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded border bg-opacity-10"
                                style={{ borderColor: project.style.accentColor, color: project.style.accentColor, backgroundColor: `${project.style.accentColor}20` }}
                            >
                                {project.category === "Enterprise AI & System Solutions" ? "AI & Systems" : 
                                 project.category === "Product Growth Strategy" ? "Growth" : "Consulting"}
                            </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                            {project.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2" dangerouslySetInnerHTML={{ __html: project.summary }} />
                        
                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                            <div className="text-white font-bold text-sm">{project.impact}</div>
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <ArrowRight size={14} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
         {selectedProject && (
            <ProjectDetail 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
         )}
      </AnimatePresence>

    </section>
  );
};

export default ProjectsSection;