import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: import.meta.env.VITE_GITHUB_URL,
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      href: import.meta.env.VITE_LINKEDIN_URL,
      label: 'LinkedIn',
    },
    {
      icon: <Twitter size={20} />,
      href: import.meta.env.VITE_TWITTER_URL,
      label: 'Twitter',
    },
    {
      icon: <Mail size={20} />,
      href: `mailto:${import.meta.env.VITE_CONTACT_EMAIL}`,
      label: 'Email',
    }
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600" />

      {/* Subtle decorative element */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <a href="#home" className="inline-block mb-4">
              <span className="text-3xl font-bold text-blue-400">YounesAO</span>
            </a>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              Building exceptional digital experiences with clean code and modern technologies.
              Let's create something amazing together.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors" />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                <span className="text-sm text-gray-500 block mb-1">Email</span>
                <a
                  href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {import.meta.env.VITE_CONTACT_EMAIL || 'contact@example.com'}
                </a>
              </p>
              <p className="text-gray-400">
                <span className="text-sm text-gray-500 block mb-1">Location</span>
                Morocco 🇲🇦
              </p>
              <div className="pt-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/30 text-green-400 text-sm border border-green-800">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Available for Internship
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray-500 text-sm flex items-center gap-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {currentYear} Younes Ait Ouahda. Made with
              <Heart size={14} className="text-red-500 mx-1" />
              using React & TailwindCSS
            </motion.p>

            <motion.div
              className="flex items-center gap-6 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                Designed for excellence
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;