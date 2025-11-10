import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const COLORS = ["#34d399", "#f87171", "#60a5fa", "#fbbf24"];

const SummaryCharts = ({ transactions }) => {
  const income = transactions.filter(t => t.type === "income");
  const expense = transactions.filter(t => t.type === "expense");

  const data = [
    { name: "Income", value: income.reduce((a, b) => a + b.amount, 0) },
    { name: "Expense", value: expense.reduce((a, b) => a + b.amount, 0) },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-lg font-semibold mb-4">Income vs Expenses</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <PieChart width={200} height={200}>
          <Pie data={data} cx="50%" cy="50%" outerRadius={80} dataKey="value">
            {data.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <BarChart width={300} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#6366f1" />
        </BarChart>
      </div>
    </div>
  );
};

export default SummaryCharts;
