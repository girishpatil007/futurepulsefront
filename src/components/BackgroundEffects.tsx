import { motion } from "framer-motion";

const BackgroundEffects = () => {
  return (
    <>
      <div className="fixed inset-0 bg-[#0B0F1A]" />
      <div className="fixed inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
      <div className="fixed inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5,
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [null, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default BackgroundEffects;