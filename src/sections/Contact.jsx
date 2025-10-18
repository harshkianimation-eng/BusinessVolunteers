import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser'; // ✅ import EmailJS

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                'service_j6hzkep',    // replace with your EmailJS service ID
                'template_4kkb36j',   // replace with your EmailJS template ID
                formData,
                'KsozlRJrUmNX16yHu'     // replace with your EmailJS public key
            )
            .then(
                (result) => {
                    alert('Message sent successfully!');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                },
                (error) => {
                    alert('Oops! Something went wrong. Try again.');
                    console.error(error.text);
                }
            );
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'contact.businessvolunteers@gmail.com',
            href: 'mailto:contact.businessvolunteers@gmail.com'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 8586989832',
            href: 'tel:+918586989832'
        },
        {
            icon: MapPin,
            label: 'Address',
            value: 'Jasnawali khurd post-Dhemera kirat Bulandshahar-203001',
            href: '#'
        }
    ];

    return (
        <section id="contact" className="py-20 bg-dark">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-display font-bold mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-light/60 text-xl max-w-2xl mx-auto">
                        Ready to start your next project? Let's discuss how we can bring your ideas to life.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-display font-bold text-light mb-8">
                            Let's Talk
                        </h3>

                        <div className="space-y-6 mb-8">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-dark/50 border border-light/10 hover:border-primary/30 transition-all duration-300 group"
                                    whileHover={{ x: 10 }}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <item.icon className="w-6 h-6 text-primary group-hover:text-dark" />
                                    </div>
                                    <div>
                                        <p className="text-light/60 text-sm">{item.label}</p>
                                        <p className="text-light font-semibold">{item.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-dark/50 p-6 rounded-2xl border border-light/10"
                        >
                            <h4 className="text-xl font-semibold text-light mb-4">Working Hours</h4>
                            <div className="space-y-2 text-light/60">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form Section */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-light mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-dark/50 border border-light/10 rounded-xl text-light placeholder-light/40 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-light mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-dark/50 border border-light/10 rounded-xl text-light placeholder-light/40 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-light mb-2">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-dark/50 border border-light/10 rounded-xl text-light placeholder-light/40 focus:outline-none focus:border-primary transition-colors"
                                placeholder="Project Discussion"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-light mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                className="w-full px-4 py-3 bg-dark/50 border border-light/10 rounded-xl text-light placeholder-light/40 focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="Tell us about your project..."
                                required
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="w-full bg-primary text-dark py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Send Message
                            <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
