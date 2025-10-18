import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Users, number: '800+', label: 'Happy Clients' },
    { icon: Award, number: '110+', label: 'Projects Completed' },
    { icon: Clock, number: '1.5+', label: 'Years Experience' },
    { icon: Heart, number: '100%', label: 'Client Satisfaction' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-dark/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl font-display font-bold mb-8">
              We Don’t Just Build Brands —
             <span className="text-primary"> We build brand legacies.</span>
            </h2>
            <p className="text-light/80 text-lg mb-6">
              At Business Volunteers, we're not just another creative studio,we're your dedicated growth partners. We believe every brand has a story worth remembering, and we're obsessed with turning that vision into a powerful, immersive experience. Our team of passionate designers and innovators doesn't stop at beautiful visuals, we engineer meaningful connections that drive real results, making your brand impossible to ignore.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="bg-dark/50 p-6 rounded-2xl border border-light/10 hover:border-primary/30 transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <stat.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold text-light mb-2">{stat.number}</h3>
                <p className="text-light/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
