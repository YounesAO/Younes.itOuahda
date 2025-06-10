import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Github, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Button from './ui/Button';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      if (!formRef.current) return;
      
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: import.meta.env.VITE_GITHUB_URL,
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: import.meta.env.VITE_LINKEDIN_URL,
      label: 'LinkedIn'
    },
    {
      icon: <Twitter size={20} />,
      href: import.meta.env.VITE_TWITTER_URL,
      label: 'Twitter'
    }
  ];
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
        >
          Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Have a question or want to work together? Feel free to contact me!
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="lg:col-span-1"
          >
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8"
              >
                <motion.div variants={fadeIn} className="flex items-start">
                  <motion.div 
                    className="mr-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <Mail size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</h4>
                    <motion.a 
                      href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {import.meta.env.VITE_CONTACT_EMAIL}
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="flex items-start">
                  <motion.div 
                    className="mr-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <Phone size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Phone</h4>
                    <motion.a 
                      href={`tel:${import.meta.env.VITE_CONTACT_PHONE}`}
                      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {import.meta.env.VITE_CONTACT_PHONE}
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="flex items-start">
                  <motion.div 
                    className="mr-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                  </motion.div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Location</h4>
                    <p className="text-gray-900 dark:text-white">
                      {import.meta.env.VITE_CONTACT_LOCATION}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mt-10"
              >
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a 
                      key={link.label}
                      href={link.href}
                      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <motion.div 
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Send Me a Message</h3>
              
              <AnimatePresence mode="wait">
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex items-center bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 p-4 rounded-lg mb-6"
                  >
                    <CheckCircle size={20} className="mr-2 flex-shrink-0" />
                    <p>Thank you for your message! I'll get back to you as soon as possible.</p>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex items-center bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 p-4 rounded-lg mb-6"
                  >
                    <XCircle size={20} className="mr-2 flex-shrink-0" />
                    <p>Oops! Something went wrong. Please try again later.</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div variants={fadeIn}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.name 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors`}
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-1 text-sm text-red-600 dark:text-red-400"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.email 
                          ? 'border-red-500 dark:border-red-500' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors`}
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-1 text-sm text-red-600 dark:text-red-400"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
                
                <motion.div variants={fadeIn}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.subject 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors`}
                  />
                  <AnimatePresence>
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-1 text-sm text-red-600 dark:text-red-400"
                      >
                        {errors.subject}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.message 
                        ? 'border-red-500 dark:border-red-500' 
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors resize-none`}
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-1 text-sm text-red-600 dark:text-red-400"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                <motion.div variants={fadeIn}>
                  <Button
                    type="submit"
                    primary
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;