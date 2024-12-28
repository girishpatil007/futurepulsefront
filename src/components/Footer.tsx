import { motion } from "framer-motion";
import { Facebook, Mail, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const shareUrl = window.location.href;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(`Check out FuturePulse! ${shareUrl}`)}`;
        break;
      case 'instagram':
        // Instagram doesn't support direct sharing via URL, open Instagram profile instead
        url = 'https://instagram.com/futurepulse';
        break;
      case 'email':
        url = `mailto:?subject=Check out FuturePulse&body=I thought you might be interested in this: ${shareUrl}`;
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
            <h3 className="text-xl font-semibold mb-4 text-blue-400">FuturePulse</h3>
            <p className="text-gray-300 text-sm">
              FuturePulse revolutionizes inventory management through AI-powered predictive analytics, helping businesses optimize stock levels and make data-driven decisions.
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-[#1877F2] hover:bg-[#1877F2]/80 text-white rounded-full"
              onClick={() => handleShare('facebook')}
            >
              <Facebook className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-[#25D366] hover:bg-[#25D366]/80 text-white rounded-full"
              onClick={() => handleShare('whatsapp')}
            >
              <FaWhatsapp className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-[#E4405F] hover:bg-[#E4405F]/80 text-white rounded-full"
              onClick={() => handleShare('instagram')}
            >
              <Instagram className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-[#EA4335] hover:bg-[#EA4335]/80 text-white rounded-full"
              onClick={() => handleShare('email')}
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">&copy; 2024 FuturePulse. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;