import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
  const [text, setText] = useState("");
  const fullText = "Unlock the power of predictive analytics for your inventory management.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="text-center mb-16">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text relative inline-block">
          Future<span className="text-white">pulse</span>
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg opacity-20 blur-lg"></div>
        </h1>
      </motion.div>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light"
      >
        {text}
        <span className="animate-pulse">|</span>
      </motion.p>
    </header>
  );
};

export default Header;