'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { services } from '@/data/portfolio';
import { Code, Palette, Sparkles, Brain, Target, Zap } from 'lucide-react';

const iconMap: { [key: string]: any } = {
  code: Code,
  palette: Palette,
  sparkles: Sparkles,
  brain: Brain,
  target: Target,
  zap: Zap,
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl" />

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
              What I Do
            </span>
            <span className="w-12 h-px bg-accent-orange" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            <span className="text-white">SERVICES &</span>
            <br />
            <span className="text-gradient">CAPABILITIES</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Comprehensive digital solutions tailored to your needs
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group glass rounded-3xl p-8 border border-white/5 hover:border-accent-orange/30 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-accent-orange/10 border border-accent-orange/20 flex items-center justify-center mb-6 group-hover:bg-accent-orange/20 transition-all duration-300">
                  <Icon className="text-accent-orange" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-orange transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-2 text-accent-orange text-sm font-medium">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
