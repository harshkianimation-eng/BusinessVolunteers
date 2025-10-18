import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      const phoneNumber = '+918586989832'; // Replace with your WhatsApp number
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-2 border-white bg-gradient-to-br from-[#25D366] to-[#128C7E]"
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
      >
        <img src='./logos/Whatsapp.svg' alt='WhatsappLogo' className='h-9 w-9'></img>
        {/* Notification Ping */}
        <motion.span
          className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-28 right-6 z-50 w-80 sm:w-96 rounded-2xl shadow-2xl overflow-hidden border border-gray-300 bg-gray-900 flex flex-col"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-br from-[#25D366] to-[#128C7E]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-transparent rounded-full flex items-center justify-center shadow-md">
                  <img src='./logos/Whatsapp.svg' alt='WhatsappLogo' className='h-9 w-9'></img>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Business Volunteers </h3>
                  <p className="text-green-100 text-sm">Online • Replies instantly</p>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-800">
              {/* Bot Message */}
              <motion.div
                className="mb-4 p-3 bg-gray-700 text-gray-100 rounded-2xl rounded-tl-sm shadow-md max-w-[85%]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <p className="text-sm leading-relaxed">
                  Hi there! 👋 Ready to start your next project? Send us a message and we'll get back to you instantly!
                </p>
                <p className="text-xs text-gray-300 mt-2">Business Volunteers Team</p>
              </motion.div>

              {/* Quick Options */}
              <motion.div
                className="mb-2 p-3 bg-gray-700 text-gray-100 rounded-2xl rounded-tl-sm shadow-md max-w-[85%]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
              >
                <p className="text-sm font-medium mb-2">Quick options:</p>
                <div className="flex flex-wrap gap-2">
                  {['Website Design', 'Logo Design', 'Branding', 'Get Quote'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setMessage(`I'm interested in ${opt}`)}
                      className="px-3 py-1 text-xs rounded-full bg-gray-600 hover:bg-green-500 hover:text-white transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Input */}
            <div className="flex items-center p-4 border-t border-gray-700 bg-gray-900 gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
              />
              <motion.button
                onClick={handleSendMessage}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-lg hover:shadow-xl text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!message.trim()}
                style={{ opacity: message.trim() ? 1 : 0.5 }}
              >
                <Send size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppChat;

