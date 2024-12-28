import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Brain, TrendingUp, AlertTriangle, BarChart, LineChart, DollarSign, Truck, ChartPie, ClipboardList } from "lucide-react";

const insights = [
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    title: "Demand Forecasting",
    description: "Based on our analysis of historical sales patterns and market trends, we project a 15% increase in demand for Category A products in Q3. Seasonal factors and upcoming promotional events suggest focusing inventory build-up on items A1, A2, and A3. Consider increasing safety stock levels by 20% for these high-demand items to maintain optimal service levels. Machine learning models indicate strong correlation between weather patterns and product demand, recommending dynamic adjustment of stock levels.",
  },
  {
    icon: <BarChart className="w-6 h-6 text-green-500" />,
    title: "Inventory Optimization",
    description: "Current stock levels for fast-moving items are 12% above optimal threshold. Recommend reducing inventory of SKUs 123-456 by 25% to minimize holding costs while maintaining 98% service level. Economic Order Quantity (EOQ) analysis suggests restructuring order frequencies for suppliers S1 and S2. Implementation of suggested changes could reduce carrying costs by approximately $45,000 annually while improving inventory turnover ratio from 8 to 10 times per year.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
    title: "Cost Management",
    description: "Analysis reveals potential for 18% reduction in carrying costs through optimized inventory levels. Identified $32,000 in avoidable rush shipping expenses from last quarter. Recommend consolidating orders from Supplier XYZ to qualify for bulk discounts, potentially saving 12% on unit costs. Working capital efficiency can be improved by 15% through better alignment of inventory levels with demand patterns. Strategic timing of bulk purchases could yield additional 7% cost savings.",
  },
  {
    icon: <Truck className="w-6 h-6 text-purple-500" />,
    title: "Supply Chain Planning",
    description: "Lead time analysis shows opportunity to reduce average delivery window by 3 days through optimized supplier coordination. Recommend adjusting reorder points for items with variable lead times, particularly during peak seasons. Machine learning models predict 92% accuracy in delivery time estimations, enabling more precise inventory planning. Integration of real-time tracking data suggests potential for 25% reduction in safety stock requirements through improved delivery reliability.",
  },
  {
    icon: <LineChart className="w-6 h-6 text-pink-500" />,
    title: "Performance Monitoring",
    description: "Inventory turnover has improved 23% year-over-year, with particular success in categories B and C. Stock accuracy metrics show 99.1% accuracy, exceeding industry benchmark of 97%. Sales velocity analysis reveals emerging patterns in seasonal demand, with peak periods shifting earlier by approximately 2 weeks compared to previous years. Real-time monitoring has reduced stockout incidents by 45% through early detection and intervention.",
  },
  {
    icon: <Brain className="w-6 h-6 text-indigo-500" />,
    title: "Decision Support",
    description: "AI analysis recommends immediate reorder of items X, Y, and Z based on current demand patterns and lead times. Optimal order quantities calculated: Item X (500 units), Item Y (750 units), Item Z (300 units). Promotion timing analysis suggests launching Category D promotions in weeks 28-30 for maximum impact. Predictive models indicate potential 28% improvement in inventory efficiency through implementation of suggested order patterns.",
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    title: "Risk Management",
    description: "Early warning system has identified potential stockout risks for 5 high-velocity SKUs within the next 30 days. Seasonal demand analysis suggests 40% probability of supply chain disruption for raw materials in Q4. Recommend increasing safety stock for critical components by 15%. Risk assessment models indicate need for diversification of supplier base for components C1 and C2 to mitigate single-source risks.",
  },
  {
    icon: <ChartPie className="w-6 h-6 text-cyan-500" />,
    title: "Resource Planning",
    description: "Warehouse space utilization analysis shows opportunity for 20% improvement through optimized layout and storage methods. Staffing model predicts need for 15% increase in warehouse personnel during weeks 45-52 based on forecasted demand. Delivery schedule optimization could reduce dock congestion by 30% through improved time slot allocation. Implementation of suggested changes could improve picking efficiency by 25%.",
  }
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="p-6 bg-black/40 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-colors h-full">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gray-800/50 rounded-lg">{insight.icon}</div>
                  <h3 className="font-semibold text-lg">{insight.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{insight.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AIInsights;