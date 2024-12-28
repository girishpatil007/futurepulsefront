import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-16 pb-8 text-center"
    >
      <div className="glass-card rounded-2xl p-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">FuturePulse</h3>
          <p className="text-gray-400">Predictive Analytics for Inventory Management</p>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400">&copy; 2024 FuturePulse. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;