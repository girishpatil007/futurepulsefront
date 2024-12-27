import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto space-y-6"
      >
        <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full inline-block mb-4">
          Welcome
        </span>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Create something
          <span className="text-primary"> beautiful</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A minimalist design system for creating elegant and functional interfaces
          that prioritize user experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">
            Get Started
          </button>
          <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;