import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Linkedin, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "chloe.li@example.com"; // Placeholder based on prompt context

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Status Indicator */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider">Open to New Opportunities</span>
          </div>

          <div className="mt-12 mb-10 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Let's create impact together.</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to transform your data into strategy? I'm currently available for full-time roles and consulting projects.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
             {/* Copy Email Button */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-200" />
              <button 
                onClick={handleCopy}
                className="relative flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-full border border-white/10 hover:bg-slate-800 transition-all active:scale-95 w-full md:w-auto min-w-[300px] justify-between"
              >
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-full">
                        <Mail size={18} className="text-blue-400" />
                    </div>
                    <span className="font-mono text-gray-200">{email}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest pl-4 border-l border-white/10">
                    {copied ? (
                        <>
                            <Check size={14} className="text-green-500" />
                            <span className="text-green-500">Copied</span>
                        </>
                    ) : (
                        <>
                            <span className="group-hover:text-white transition-colors">Copy</span>
                            <Copy size={14} />
                        </>
                    )}
                </div>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-4">
                 <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-semibold">
                    <Linkedin size={20} /> LinkedIn
                 </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;