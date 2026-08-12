'use client';

import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold inline-block mb-4">
              <span className="text-white">ALEX</span>
              <span className="text-accent-orange">.</span>
            </a>
            <p className="text-gray-400 text-sm mb-4">
              Building digital experiences that matter.
            </p>
            <div className="flex gap-3">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-accent-orange/50 hover:bg-accent-orange/10 transition-all duration-300"
              >
                <Github size={18} className="text-gray-400 hover:text-accent-orange" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-accent-orange/50 hover:bg-accent-orange/10 transition-all duration-300"
              >
                <Linkedin size={18} className="text-gray-400 hover:text-accent-orange" />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg border border-white/10 hover:border-accent-orange/50 hover:bg-accent-orange/10 transition-all duration-300"
              >
                <Twitter size={18} className="text-gray-400 hover:text-accent-orange" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-accent-orange transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-gray-400 hover:text-accent-orange transition-colors duration-300 text-sm"
              >
                {personalInfo.email}
              </a>
              <p className="text-gray-400 text-sm">{personalInfo.location}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-orange/10 border border-accent-orange/20">
                <span className="w-1.5 h-1.5 bg-accent-orange rounded-full animate-pulse" />
                <span className="text-xs text-gray-300">{personalInfo.availability}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Designed & Built with <Heart className="text-accent-orange" size={14} fill="currentColor" /> by {personalInfo.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
