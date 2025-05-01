import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

// Replace these with your actual Telegram bot token and chat ID:
const BOT_TOKEN = '8114272776:AAHHAjTqDT3IgiZtOlIaykomwZaD1FIG5Dc';
const CHAT_ID = '785027247';

// Escape HTML to avoid Telegram parse errors
const escapeHtml = (unsafe: string) =>
  unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct message in HTML (safer than Markdown)
    const text = `<b>New Contact Form Submission</b>\n
<b>Name:</b> ${escapeHtml(formData.name)}\n
<b>Email:</b> ${escapeHtml(formData.email)}\n
<b>Subject:</b> ${escapeHtml(formData.subject)}\n
<b>Message:</b> ${escapeHtml(formData.message)}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'HTML',
        }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        alert('Telegram error: ' + (data.description || 'Unknown error'));
      }
    } catch (error) {
      setSubmitStatus('error');
      alert('Network or unexpected error: ' + (error as any).message);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    { icon: <Mail size={20} />, text: 'shyamgupta4004@gmail.com' },
    { icon: <Phone size={20} />, text: '+91 96xxxxxx' },
    { icon: <MapPin size={20} />, text: 'Uttar Pradesh, India' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/ShyamGupta1', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/shyamgupta-', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/shyamgupta_8', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mx-auto">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-300 border border-dark-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-300 border border-dark-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-300 border border-dark-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-dark-300 border border-dark-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full py-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <Send size={16} className="ml-2" />
                    </span>
                  )}
                </button>

                {/* Submission status message */}
                {submitStatus === 'success' && (
                  <div className="p-3 bg-success-500/20 border border-success-500 rounded-md text-sm">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-3 bg-error-500/20 border border-error-500 rounded-md text-sm">
                    There was an error sending your message. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full flex flex-col">
              {/* Contact details */}
              <div className="glass p-6 md:p-8 mb-6">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <div className="p-2 rounded-full bg-dark-300 mr-3 text-primary-500">
                        {info.icon}
                      </div>
                      <span>{info.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                  <div className="flex space-x-3">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        aria-label={link.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-dark-300 text-gray-400 hover:text-white hover:bg-primary-500 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Availability card */}
              <div className="glass p-6 md:p-8 flex-grow">
                <h3 className="text-xl font-bold mb-4">Availability</h3>
                <p className="text-gray-300 mb-6">
                  Currently available for freelance work and collaborations. I'm particularly interested in challenging projects related to:
                </p>

                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Web application development</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Cyber security consultations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>Open source contributions</span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-dark-300">
                  <p className="text-gray-400 text-sm">
                    Expected response time: <span className="text-white">1-2 business days</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
