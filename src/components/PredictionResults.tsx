import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const barData = [
  { category: "Electronics", current: 3000, predicted: 4000 },
  { category: "Clothing", current: 2500, predicted: 3000 },
  { category: "Food", current: 1800, predicted: 2000 },
  { category: "Books", current: 2200, predicted: 2780 },
  { category: "Sports", current: 1500, predicted: 1890 },
];

const pieData = [
  { name: "High Demand", value: 400 },
  { name: "Medium Demand", value: 300 },
  { name: "Low Demand", value: 300 },
];

const COLORS = ["#8B5CF6", "#EC4899", "#F43F5E"];

const PredictionResults = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-8"
    >
      <div className="border-b border-gray-700 pb-4 mb-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Prediction Results
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4 bg-black/40 backdrop-blur-sm border-gray-800">
          <h3 className="text-lg font-semibold mb-4">Sales Comparison by Category</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="category" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid #333",
                  }}
                />
                <Bar dataKey="current" name="Current Sales" fill="#8B5CF6" />
                <Bar dataKey="predicted" name="Predicted Sales" fill="#EC4899" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-4 bg-black/40 backdrop-blur-sm border-gray-800">
          <h3 className="text-lg font-semibold mb-4">Demand Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid #333",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </motion.section>
  );
};

export default PredictionResults;