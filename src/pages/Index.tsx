import { motion } from "framer-motion";
import Header from "../components/Header";
import UploadSection from "../components/UploadSection";
import PredictionResults from "../components/PredictionResults";
import AIInsights from "../components/AIInsights";
import Footer from "../components/Footer";
import BackgroundEffects from "../components/BackgroundEffects";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white relative overflow-hidden">
      <BackgroundEffects />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 relative z-10"
      >
        <Header />
        <UploadSection />
        <PredictionResults />
        <AIInsights />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;