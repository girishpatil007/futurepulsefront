import { motion } from "framer-motion";
import { Upload, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const UploadSection = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isPredicting, setIsPredicting] = useState(false);

  const handleUpload = async () => {
    setIsUploading(true);
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsUploading(false);
    toast.success("File uploaded successfully!");
  };

  const handlePredict = async () => {
    setIsPredicting(true);
    // Simulate prediction
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsPredicting(false);
    toast.success("Prediction completed!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto mb-16"
    >
      <div className="glass-card p-8 rounded-2xl space-y-4">
        <button
          onClick={handleUpload}
          disabled={isUploading}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl p-4 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          <Upload className="w-5 h-5" />
          <span>{isUploading ? "Uploading..." : "Upload Data in CSV/Excel"}</span>
          {isUploading && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          )}
        </button>

        <button
          onClick={handlePredict}
          disabled={isPredicting}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl p-4 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          <ArrowRight className="w-5 h-5" />
          <span>{isPredicting ? "Predicting..." : "Predict Future Inventory"}</span>
          {isPredicting && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default UploadSection;