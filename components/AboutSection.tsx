import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Quote } from 'lucide-react';
import { PAGE_DATA } from '../data';

const AboutSection = () => {
  const { storyChapters, education, techStack } = PAGE_DATA.about;

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background with Noise */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-xs font-bold tracking-widest uppercase mb-4"
          >
            My Journey
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Evolution of a Strategist</h2>
        </div>

        {/* Horizontal Story Chapters */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
           
           {storyChapters.map((chapter, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="relative z-10"
             >
                <div className="flex flex-col items-center text-center lg:text-left lg:items-start p-6 rounded-2xl border border-white/5 bg-[#121212] h-full hover:border-white/10 transition-colors">
                   {/* Chapter Number */}
                   <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                     {chapter.chapter}
                   </div>
                   
                   {/* Indicator Dot */}
                   <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 -mt-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-orange-500 mb-6 lg:mb-0" />
                   
                   <h3 className="text-xl font-bold text-white mb-4">{chapter.title}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: chapter.description }} />
                   
                   <div className="flex flex-wrap gap-2 mt-auto justify-center lg:justify-start">
                     {chapter.tags.map(tag => (
                       <span key={tag} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-gray-400 uppercase tracking-wider">
                         {tag}
                       </span>
                     ))}
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
           {/* Academic Backbone */}
           <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-8">
                 <GraduationCap className="text-orange-400" size={24} />
                 <h3 className="text-2xl font-bold text-white">Academic Backbone</h3>
              </div>
              <div className="space-y-4">
                 {education.map((edu, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-6 rounded-2xl border border-white/10 bg-[#121212] flex items-start gap-4"
                    >
                       <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-2xl font-serif text-white/50">
                          {/* Placeholder logo or initial */}
                          {edu.school.charAt(0)}
                       </div>
                       <div>
                          <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                          <div className="text-gray-500 text-sm mb-2">{edu.school}</div>
                          <p className="text-gray-400 text-xs leading-relaxed">{edu.desc}</p>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>

           {/* Tech Stack & Quote */}
           <div className="lg:col-span-7 flex flex-col gap-6">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl border border-white/10 bg-slate-800/50 backdrop-blur-sm"
               >
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Technical Arsenal</h4>
                  <div className="flex flex-wrap gap-3">
                    {techStack.map((tech, i) => (
                      <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-blue-200 hover:bg-blue-500/20 hover:border-blue-500/30 transition-colors cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex-1 p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm flex items-center justify-center relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 p-10 opacity-10">
                    <Quote size={120} />
                  </div>
                  <div className="relative z-10 text-center">
                    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white italic">
                      "The best AI isn't just smart. It's human."
                    </p>
                  </div>
               </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;