import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ibrahim Sobur Bamidele. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Web3 Developer • AI Prompt Engineer • Software Engineering Student
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Built with React, TypeScript, TailwindCSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
