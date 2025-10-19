import React, { useRef, useState } from 'react'; // ✅ added useState
import { motion, useInView } from 'framer-motion';
import { Palette, Code, Video, Smartphone, Monitor, Brush, TrendingUp, Layout, Film,Star,Target,Message-circle,Map-pin,Megaphone } from 'lucide-react';
import StartProjectPopup from '../components/StartProjectPopup'; // 👈 import popup

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [showPopup, setShowPopup] = useState(false); // 👈 popup state

    const services = [
        {
            icon: Code,
            title: 'Web Design',
            description:
                'Modern, responsive websites and web applications built with cutting-edge technologies.',
        },
        {
            icon: Palette,
            title: 'Logo Design',
            description:
                'Custom logo design that captures your brand identity and makes a lasting impression.',
        },
        {
            icon: Video,
            title: 'Influencer Video Promotions',
            description:
                'Let popular creators tell your story — authentic, relatable, and result-driven.',
        },
        {
            icon: Smartphone,
            title: 'Social Media Handling',
            description:
                'Complete social media management to grow your online presence and engagement.',
        },
        {
            icon: Brush,
            title: ' Posters & Graphics',
            description:
                'Creative designs that make your message impossible to ignore.',
        },
        {
            icon: Monitor,
            title: 'Campaign Planning & Management',
            description:
                'From strategy to success — we run marketing campaigns that truly convert.',
        },
        {
            icon: TrendingUp,
            title: 'Data Entry & Management',
            description:
                'Keep your records organized, accurate, and easily accessible.',
        },
        {
            icon: Layout,
            title: 'PPT Design & Modification',
            description:
                'Turn your presentations into visual stories that inspire and impress.',
        },
        {
            icon: Film,
            title: 'CGI & 3D Videos',
            description:
                'Add life to your brand with stunning visuals that wow your audience.',
        },
          {
            icon: Megaphone,
            title: 'Influencer Marketing',
            description:
                'Let popular creators tell your story — authentic, relatable, and result-driven.',
        },
          {
            icon: Map-pin,
            title: 'Google Business Location Setup',
            description:
                'Get discovered faster! We help you appear where your customers search the most.',
        },
          {
            icon: Message-circle,
            title: 'WhatsApp Business Setup',
            description:
                'Professional setup with catalogs that make communication and sales effortless.',
        },
        {
            icon: Target,
            title: 'Ad Campaigns',
            description:
                'Smart ads that reach the right audience — at the right time, every time.',
        },
        {
            icon: Star,
            title: 'Paid Reviews & Brand Mentions',
            description:
                'Build credibility fast with authentic voices sharing your story.',
        },
        
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <section id="services" ref={ref} className="py-20 bg-dark/50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-display font-bold mb-4">
                        Our <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-light/60 text-xl max-w-2xl mx-auto">
                        Comprehensive creative services to bring your digital vision to life with precision and
                        innovation.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={itemVariants}
                            className="bg-dark/60 p-8 rounded-2xl border border-light/10 hover:border-secondary/30 transition-all duration-300 group"
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                            </div>

                            <h3 className="text-2xl font-display font-bold text-light mb-4">{service.title}</h3>

                            <p className="text-light/60 mb-6">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Start Project Button */}
                <motion.div className="mt-16 text-center">
                    <motion.button
                        onClick={() => setShowPopup(true)} // 👈 open popup
                        className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 overflow-hidden relative"
                        whileHover={{ backgroundColor: '#ff6b6b', color: '#1a1a1a', scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Your Project Today
                        <motion.span
                            className="inline-block"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.2 }}
                        >
                            →
                        </motion.span>
                    </motion.button>
                </motion.div>
            </div>
            {/* Popup */}
            {showPopup && <StartProjectPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />}
        </section>
    );
};

export default Services;
