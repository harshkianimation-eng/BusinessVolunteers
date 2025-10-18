import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Twitter, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

// Define the social links data structure
const socialLinks = [
  {
    name: 'Twitter',
    Icon: Twitter,
    url: 'https://x.com/Business8920' // <-- Update with your actual URL
  },
  {
    name: 'Instagram',
    Icon: Instagram,
    url: ' https://www.instagram.com/thebusinessvolunteers/ ' // <-- Update with your actual URL
  },
  {
    name: 'Facebook',
    Icon: Facebook,
    url: 'https://www.facebook.com/people/Business-Volunteers/61579138254807/?rdid=i4EyO8xizvqVtNrE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1YBYLsan5L%2F'
  },
  { 
    name: 'Youtube',
    Icon: Youtube,
    url: 'https://www.youtube.com/@TheBusinessVolunteers' // <-- Update with your actual URL
  },
  { 
    name: 'Linkedin',
    Icon: Linkedin,
    url: 'https://www.linkedin.com/company/business-volunteers1' // <-- Update with your actual URL
  },
];

const Footer = () => {
  return (
    <footer className="bg-dark/80 py-12 border-t border-light/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            className="text-2xl font-display font-bold text-primary"
            whileHover={{ scale: 1.05 }}
          >
            BUSINESS.VOLUNTEERS
          </motion.div>

          {/* Social Media Links with Icons */}
          <div className="flex gap-6">
            {socialLinks.map(({ name, Icon, url }) => (
              <motion.a
                key={name}
                href={url}
                target="_blank" // Recommended for external links
                rel="noopener noreferrer" // Security best practice
                className="text-light/60 hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                aria-label={`Visit our ${name} page`}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>

          <motion.div
            className="flex items-center text-light/60"
            whileHover={{ scale: 1.05 }}
          >
            Made with <Heart size={16} className="mx-2 text-primary" fill="currentColor" /> by Business Volunteers team
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-8 pt-8 border-t border-light/10 text-light/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p>&copy; 2024 Business Volunteers. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;