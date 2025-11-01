import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LiveChat: React.FC = () => {
  useEffect(() => {
    // Tawk.to Live Chat Integration with your specific ID
    const Tawk_API: any = (window as any).Tawk_API || {};
    const Tawk_LoadStart = new Date();
    
    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];
    
    s1.async = true;
    s1.src = 'https://embed.tawk.to/69061bfbbab7aa194fcf197e/1j8vtqjs7';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }

    return () => {
      const existingScript = document.querySelector('script[src*="tawk.to"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  const openChat = () => {
    if ((window as any).Tawk_API) {
      (window as any).Tawk_API.maximize();
    } else {
      alert('Chat is loading... Please wait a moment.');
    }
  };

  return (
    <>
      {/* Custom Chat Trigger Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={openChat}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
        title="Live Chat"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
          className="relative"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          
          {/* Online Indicator */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"
          />
        </motion.div>
        
        {/* Tooltip */}
        <div className="absolute right-14 bottom-1/2 transform translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          Live Chat with Ibrahim
        </div>
      </motion.button>
    </>
  );
};

export default LiveChat;