'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '@/data/portfolio';
import { Briefcase, CheckCircle } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-px bg-accent-orange" />
            <span className="text-sm text-accent-orange uppercase tracking-wider font-medium">
              Career Journey
            </span>
            <span className="w-12 h-px bg-accent-orange" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            <span className="text-white">WORK</span>{' '}
            <span className="text-gradient">EXPERIENCE</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-orange via-accent-orange/50 to-transparent" />

          <div className="space-y-16">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:grid-flow-dense'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-accent-orange rounded-full border-4 border-dark-bg shadow-lg shadow-accent-orange/50" />

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'} pl-8 md:pl-0`}>
                  <div className="glass rounded-3xl p-8 border border-white/5 hover:border-accent-orange/30 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-accent-orange/10 rounded-lg">
                        <Briefcase className="text-accent-orange" size={24} />
                      </div>
                      <span className="text-sm text-accent-orange font-medium">
                        {job.period}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-orange transition-colors duration-300">
                      {job.position}
                    </h3>

                    <h4 className="text-lg text-gray-400 mb-4">
                      {job.company}
                    </h4>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2">
                          <CheckCircle className="text-accent-orange mt-1 flex-shrink-0" size={16} />
                          <span className="text-sm text-gray-400">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
