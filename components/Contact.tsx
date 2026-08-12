'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo } from '@/data/portfolio';
import { Mail, Github, Linkedin, Twitter, ArrowRight, MapPin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-secondary/50 to-dark-bg" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-orange/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-px bg-accent-orange" />
              <span className="text-sm text-accent-orange uppercase tracking-wider font-medium">
                Get In Touch
              </span>
              <span className="w-12 h-px bg-accent-orange" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="text-white">LET'S BUILD</span>
              <br />
              <span className="text-white">SOMETHING</span>
              <br />
              <span className="text-gradient">EXTRAORDINARY.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-400 mb-8"
            >
              Have a project in mind? Let's discuss how we can work together.
            </motion.p>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-orange/20 mb-12"
            >
              <span className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">{personalInfo.availability}</span>
            </motion.div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Email Card */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group glass rounded-3xl p-8 border border-white/5 hover:border-accent-orange/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-accent-orange/10 rounded-xl">
                  <Mail className="text-accent-orange" size={24} />
                </div>
                <ArrowRight className="text-gray-500 group-hover:text-accent-orange group-hover:translate-x-1 transition-all duration-300" size={20} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email Me</h3>
              <p className="text-gray-400 break-all">{personalInfo.email}</p>
            </motion.a>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass rounded-3xl p-8 border border-white/5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-accent-orange/10 rounded-xl">
                  <MapPin className="text-accent-orange" size={24} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Location</h3>
              <p className="text-gray-400">{personalInfo.location}</p>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="glass rounded-3xl p-8 border border-white/5"
          >
            <h3 className="text-lg font-bold text-white mb-6 text-center">Connect With Me</h3>
            <div className="flex justify-center gap-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-accent-orange/50 hover:bg-accent-orange/10 transition-all duration-300 group"
              >
                <Github className="text-gray-400 group-hover:text-accent-orange transition-colors duration-300" size={24} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-accent-orange/50 hover:bg-accent-orange/10 transition-all duration-300 group"
              >
                <Linkedin className="text-gray-400 group-hover:text-accent-orange transition-colors duration-300" size={24} />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-accent-orange/50 hover:bg-accent-orange/10 transition-all duration-300 group"
              >
                <Twitter className="text-gray-400 group-hover:text-accent-orange transition-colors duration-300" size={24} />
              </a>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-3 px-10 py-5 bg-accent-orange text-white rounded-full text-lg font-bold hover:bg-accent-orange/90 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-orange/30 hover:scale-105"
            >
              Start a Conversation
              <ArrowRight size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
