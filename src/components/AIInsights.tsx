import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Brain, TrendingUp, AlertTriangle } from "lucide-react";

const insights = [
  {
    icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    title: "Growth Trend",
    description: "Projected 15% increase in inventory turnover rate next quarter",
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />,
    title: "Stock Alert",
    description: "Consider restocking Product A within next 2 weeks",
  },
  {
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    title: "AI Recommendation",
    description: "Optimize storage allocation based on seasonal demand patterns",
  },
];

const AIInsights = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="my-8"
    >
      <div className="border-b border-gray-700 pb-4 mb-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          AI-Powered Insights
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="p-6 bg-black/40 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-800/50 rounded-lg">{insight.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{insight.title}</h3>
                  <p className="text-gray-400 text-sm">{insight.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AIInsights;