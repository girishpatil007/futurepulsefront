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
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] rounded-full border-[#1877F2]/30 hover:border-[#1877F2] transition-all duration-300"
                onClick={() => handleShare('facebook')}
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] rounded-full border-[#25D366]/30 hover:border-[#25D366] transition-all duration-300"
                onClick={() => handleShare('whatsapp')}
              >
                <FaWhatsapp className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-[#E4405F]/10 hover:bg-[#E4405F]/20 text-[#E4405F] rounded-full border-[#E4405F]/30 hover:border-[#E4405F] transition-all duration-300"
                onClick={() => handleShare('instagram')}
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-[#EA4335]/10 hover:bg-[#EA4335]/20 text-[#EA4335] rounded-full border-[#EA4335]/30 hover:border-[#EA4335] transition-all duration-300"
                onClick={() => handleShare('email')}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;