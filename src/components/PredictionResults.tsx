import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Switch } from "./ui/switch";

const barData = [
  { category: "Item 1", current: 2, predicted: 5 },
  { category: "Item 2", current: 7, predicted: 13 },
  { category: "Item 3", current: 15, predicted: 18 },
];

const pieData = [
  { name: "High Demand", value: 45 },
  { name: "Medium Demand", value: 25 },
  { name: "Low Demand", value: 15 },
  { name: "Seasonal", value: 10 },
  { name: "Other", value: 5 },
];

const COLORS = ["#67E8F9", "#F59E0B", "#8B5CF6", "#22C55E", "#EC4899"];

const PredictionResults = () => {
  const [showPieChart, setShowPieChart] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-8 space-y-8"
    >
      <div className="flex flex-col space-y-8">
        <Card className="p-6 bg-[#F8FAFC]/5 backdrop-blur-sm border-gray-800 rounded-3xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">
              {showPieChart ? "Demand Distribution" : "Predicted Sales by"}
            </h2>
            <Switch
              checked={showPieChart}
              onCheckedChange={setShowPieChart}
              className="data-[state=checked]:bg-blue-500"
            />
          </div>

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
                  <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="category" stroke="#94A3B8" />
                    <YAxis stroke="#94A3B8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(30, 41, 59, 0.9)",
                        border: "1px solid #475569",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="current" name="Series 1" fill="#67E8F9" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="predicted" name="Series 2" fill="#2563EB" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            ) : (
              <motion.div
                key="pie"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={140}
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
                        backgroundColor: "rgba(30, 41, 59, 0.9)",
                        border: "1px solid #475569",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </div>
    </motion.section>
  );
};

export default PredictionResults;