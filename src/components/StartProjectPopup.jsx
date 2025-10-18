import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { X, User, Mail, MessageSquare, Play } from "lucide-react";

const StartProjectPopup = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const services = [
        "Website Design",
        "Logo Design",
        "SEO",
        "Branding",
        "Web Development",
    ];

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                "service_j6hzkep", // your EmailJS service ID
                "template_3g2balw", // your EmailJS template ID
                formData,
                "KsozlRJrUmNX16yHu" // your EmailJS public key
            );
            alert("✅ Your project request has been sent successfully!");
            onClose();
        } catch (err) {
            console.error("Error:", err);
            alert("❌ Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-gray-900 text-white rounded-2xl p-8 w-full max-w-md relative border border-gray-700 shadow-xl"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                    >
                        <motion.button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-primary"
                            whileHover={{ scale: 1.2, rotate: 180 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <X size={22} />
                        </motion.button>

                        <h3 className="text-2xl font-semibold mb-6 text-center">
                            Start Your <span className="text-primary">Project</span>
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-primary outline-none text-white"
                                />
                            </div>

                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-primary outline-none text-white"
                                />
                            </div>

                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-primary outline-none text-white"
                            >
                                <option value="">Select a Service</option>
                                {services.map((srv) => (
                                    <option key={srv} value={srv}>
                                        {srv}
                                    </option>
                                ))}
                            </select>

                            <div className="relative">
                                <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full pl-10 pr-3 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-primary outline-none text-white resize-none"
                                />
                            </div>

                            {/* Updated Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={loading}
                                className="bg-primary text-dark px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 group w-full justify-center"
                                whileHover={{ scale: 1.05, backgroundColor: "#ff5252" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>{loading ? "Sending..." : "Send Request"}</span>
                                <Play size={20} className="ml-2" />
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StartProjectPopup;
