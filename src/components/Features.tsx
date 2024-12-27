import { motion } from "framer-motion";
import { Sparkles, Palette, Zap } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Beautiful Design",
    description: "Create stunning interfaces with our minimalist design system.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Customizable",
    description: "Easily customize components to match your brand.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Performance",
    description: "Optimized for speed and smooth user experience.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl hover-scale"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;