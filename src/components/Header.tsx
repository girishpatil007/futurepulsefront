import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LogIn, UserPlus, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
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
    <header className="text-center mb-16 relative">
      <div className="absolute right-4 top-4 flex gap-2">
        <Button 
          variant="outline" 
          className="flex items-center gap-2 bg-purple-600 text-white hover:bg-purple-700 border-none"
          onClick={() => navigate("/login")}
        >
          <LogIn className="w-4 h-4" />
          Login
        </Button>
        <Button 
          variant="default" 
          className="flex items-center gap-2 bg-pink-600 text-white hover:bg-pink-700"
          onClick={() => navigate("/signup")}
        >
          <UserPlus className="w-4 h-4" />
          Sign Up
        </Button>
        <Button 
          variant="outline" 
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-none"
          onClick={() => navigate("/feedback")}
        >
          <MessageSquare className="w-4 h-4" />
          Feedback
        </Button>
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex items-center justify-center gap-2"
      >
        <img 
          src="https://www.svgrepo.com/show/366974/dtr.svg" 
          alt="FuturePulse Logo" 
          className="w-20 h-20"
        />
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text relative inline-block">
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