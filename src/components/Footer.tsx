import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const shareUrl = window.location.href;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${shareUrl}&text=Check out FuturePulse!`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
        break;
    }
    window.open(url, '_blank');
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-16 pb-8"
    >
      <div className="glass-card rounded-2xl p-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="text-left max-w-md">
            <h3 className="text-xl font-semibold mb-4">FuturePulse</h3>
            <p className="text-gray-400 text-sm">
              FuturePulse revolutionizes inventory management through AI-powered predictive analytics, helping businesses optimize stock levels, reduce costs, and make data-driven decisions for improved efficiency and profitability.
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-blue-600/20"
              onClick={() => handleShare('facebook')}
            >
              <Facebook className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-sky-600/20"
              onClick={() => handleShare('twitter')}
            >
              <Twitter className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-blue-700/20"
              onClick={() => handleShare('linkedin')}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-purple-600/20"
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400">&copy; 2024 FuturePulse. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;