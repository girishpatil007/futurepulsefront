import { motion } from "framer-motion";
import { Upload, ArrowRight, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";

const UploadSection = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isPredicting, setIsPredicting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileType = file.name.split('.').pop()?.toLowerCase();
    if (fileType !== 'csv' && fileType !== 'xlsx') {
      toast.error('Please upload a CSV or Excel file');
      return;
    }

    setIsUploading(true);
    // Simulate upload - replace with actual upload logic
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsUploading(false);
    toast.success("File uploaded successfully!");
  };

  const handlePredict = async () => {
    setIsPredicting(true);
    // Simulate prediction - replace with actual prediction logic
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
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleUpload}
          accept=".csv,.xlsx"
          className="hidden"
        />
        
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl p-4 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          {isUploading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Upload className="w-5 h-5" />
          )}
          <span>{isUploading ? "Uploading..." : "Upload Data in CSV/Excel"}</span>
        </button>

        <button
          onClick={handlePredict}
          disabled={isPredicting}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl p-4 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          {isPredicting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <ArrowRight className="w-5 h-5" />
          )}
          <span>{isPredicting ? "Predicting..." : "Predict Future Inventory"}</span>
        </button>
      </div>
    </motion.div>
  );
};

export default UploadSection;