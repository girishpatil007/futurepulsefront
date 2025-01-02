import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
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

// Enhanced color palette
const COLORS = ['#9b87f5', '#D946EF', '#F97316', '#0EA5E9', '#8E9196'];

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
        <Card className="p-6 bg-[#0B0F1A]/80 backdrop-blur-sm border border-purple-500/20 rounded-3xl shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-white bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {showPieChart ? "Demand Distribution" : "Predicted Sales Analysis"}
            </h2>
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-purple-500/20 backdrop-blur-sm">
              <span className={`text-sm transition-colors duration-200 ${showPieChart ? 'text-purple-400' : 'text-gray-400'}`}>
                {showPieChart ? "Distribution" : "Comparison"}
              </span>
              <Switch
                checked={showPieChart}
                onCheckedChange={setShowPieChart}
                className="data-[state=checked]:bg-purple-500 data-[state=unchecked]:bg-gray-700"
              />
              <span className={`text-sm transition-colors duration-200 ${!showPieChart ? 'text-purple-400' : 'text-gray-400'}`}>
                {!showPieChart ? "View" : "View"}
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!showPieChart ? (
              <motion.div
                key="bar"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={barData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
                    <XAxis
                      dataKey="category"
                      stroke="#94A3B8"
                      tick={{ fill: '#94A3B8' }}
                    />
                    <YAxis
                      stroke="#94A3B8"
                      tick={{ fill: '#94A3B8' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                      labelStyle={{ color: '#E5E7EB' }}
                      itemStyle={{ color: '#E5E7EB' }}
                    />
                    <Legend
                      wrapperStyle={{
                        padding: "20px 0",
                      }}
                    />
                    <Bar
                      dataKey="current"
                      name="Current"
                      fill="#9b87f5"
                      radius={[4, 4, 0, 0]}
                      animationDuration={1500}
                    />
                    <Bar
                      dataKey="predicted"
                      name="Predicted"
                      fill="#D946EF"
                      radius={[4, 4, 0, 0]}
                      animationDuration={1500}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            ) : (
              <motion.div
                key="pie"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
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
                      animationDuration={1500}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={{ stroke: '#94A3B8', strokeWidth: 1 }}
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth={1}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                      labelStyle={{ color: '#E5E7EB' }}
                      itemStyle={{ color: '#E5E7EB' }}
                    />
                    <Legend
                      layout="vertical"
                      align="right"
                      verticalAlign="middle"
                      wrapperStyle={{
                        paddingLeft: "20px",
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