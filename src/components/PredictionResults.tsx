import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Toggle } from "./ui/toggle";
import { BarChart2, PieChart as PieChartIcon } from "lucide-react";

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
  const [showPieChart, setShowPieChart] = React.useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-8"
    >
      <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Prediction Results
        </h2>
        <div className="flex items-center gap-2">
          <BarChart2 className={`w-5 h-5 ${!showPieChart ? 'text-purple-400' : 'text-gray-400'}`} />
          <Toggle
            pressed={showPieChart}
            onPressedChange={setShowPieChart}
            className="data-[state=on]:bg-pink-600"
          />
          <PieChartIcon className={`w-5 h-5 ${showPieChart ? 'text-pink-400' : 'text-gray-400'}`} />
        </div>
      </div>

      <Card className="p-6 bg-black/40 backdrop-blur-sm border-gray-800">
        <AnimatePresence mode="wait">
          {!showPieChart ? (
            <motion.div
              key="bar"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="h-[400px]"
            >
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
            </motion.div>
          ) : (
            <motion.div
              key="pie"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="h-[400px]"
            >
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
                    animationBegin={0}
                    animationDuration={1000}
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
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.section>
  );
};

export default PredictionResults;