'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/data/portfolio';
import { ArrowUpRight, Github } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-secondary/50 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-px bg-accent-orange" />
            <span className="text-sm text-accent-orange uppercase tracking-wider font-medium">
              Selected Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black"
          >
            <span className="text-white">FEATURED</span>
            <br />
            <span className="text-gradient">PROJECTS.</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              className="group"
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative aspect-video rounded-3xl overflow-hidden glass border border-white/5 group-hover:border-accent-orange/30 transition-all duration-500">
                    {/* Placeholder gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 via-purple-500/10 to-dark-secondary" />
                    
                    {/* Project number overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-9xl font-black text-white/5 group-hover:text-white/10 transition-all duration-500">
                        0{project.id}
                      </span>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-accent-orange/0 group-hover:bg-accent-orange/10 transition-all duration-500" />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-accent-orange rounded-full text-white font-bold shadow-lg">
                    {project.year}
                  </div>
                </div>

                {/* Project Info */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="mb-4">
                    <span className="text-sm text-accent-orange uppercase tracking-wider font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6 group-hover:text-accent-orange transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 text-sm bg-white/5 text-gray-300 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent-orange text-white rounded-full font-medium hover:bg-accent-orange/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent-orange/30"
                    >
                      View Project
                      <ArrowUpRight size={18} />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/10 text-white rounded-full font-medium hover:border-accent-orange/50 transition-all duration-300"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="inline-block text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-lg">Want to see more?</span>
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-accent-orange font-medium">Get in touch</span>
              <ArrowUpRight className="text-accent-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
