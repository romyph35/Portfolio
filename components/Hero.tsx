'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-orange/20 mb-8"
            >
              <span className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">{personalInfo.availability}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6"
            >
              <span className="block text-white">BUILDING</span>
              <span className="block text-white">DIGITAL</span>
              <span className="block">
                <span className="text-white">EXPERIENCES</span>
              </span>
              <span className="block text-gradient">THAT MATTER.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group px-8 py-4 bg-accent-orange text-white rounded-full font-medium flex items-center gap-2 hover:bg-accent-orange/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent-orange/30"
              >
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 glass border border-white/10 text-white rounded-full font-medium hover:border-accent-orange/50 transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/5"
            >
              {personalInfo.about.stats.slice(0, 3).map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-accent-orange mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-full border border-accent-orange/20 animate-spin-slow" style={{ animationDuration: '20s' }} />
              
              {/* Inner Circle */}
              <div className="absolute inset-12 rounded-full glass border border-white/5 flex items-center justify-center">
                <Sparkles className="text-accent-orange" size={80} />
              </div>

              {/* Floating Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-accent-orange/20 blur-xl animate-float" />
              <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-purple-500/20 blur-xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
          <ArrowDown className="text-gray-500 animate-bounce" size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
