import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react'; // PDF icon

const Portfolio = () => {
  const portfolioPdf = './logos/portfolio.pdf'; // ✅ put your PDF in public folder
  const pdfThumbnail = '/portfolio-thumbnail.png'; // ✅ optional thumbnail image

  return (
    <section id="portfolio" className="py-20 bg-dark">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl font-display font-bold mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-light/60 text-xl max-w-2xl mx-auto">
            Explore my professional work and achievements in a single portfolio.
          </p>
        </motion.div>

        {/* Portfolio Card */}
        <motion.div
          className="max-w-sm mx-auto bg-dark/60 border border-light/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          whileHover={{ scale: 1.05 }}
        >
          {/* Thumbnail */}
          <img
            src={pdfThumbnail}
            alt="Portfolio Thumbnail"
            className="w-full h-64 object-cover"
          />

          {/* Card Content */}
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-light mb-4">My Portfolio</h3>
            <p className="text-light/60 mb-6">
              Click below to view or download my complete professional portfolio.
            </p>

            {/* Button */}
            <motion.a
              href={portfolioPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-dark px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={20} />
              View / Download PDF
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
