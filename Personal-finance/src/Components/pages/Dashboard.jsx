import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TransactionForm from "../TransactionForm";
import TransactionList from "../TransactionList";
import SummaryCharts from "../SummaryCharts";
import CategoryFilter from "../CategoryFilter";
import { getFromStorage, saveToStorage } from "../utils/storage";
import { exportToCSV } from "../utils/exportCSV";
import { FaFileCsv } from "react-icons/fa";

const Dashboard = () => {
  // Transaction & Category States
  const [transactions, setTransactions] = useState(() => getFromStorage("transactions"));
  const [categories, setCategories] = useState(() => getFromStorage("categories") || [
    "Food", "Transport", "Bills", "Salary", "Rent", "Shopping", "Investment",
  ]);

  // Persist Data
  useEffect(() => {
    saveToStorage("transactions", transactions);
  }, [transactions]);

  useEffect(() => {
    saveToStorage("categories", categories);
  }, [categories]);

  // Add new transaction
  const addTransaction = (newTx) => {
    setTransactions([newTx, ...transactions]);
  };

  return (
    <motion.div
      className="p-6 md:p-10 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* CATEGORY MANAGEMENT */}
      <CategoryFilter categories={categories} setCategories={setCategories} />

      {/* ADD TRANSACTION FORM */}
      <TransactionForm addTransaction={addTransaction} categories={categories} />

      {/* SUMMARY CHARTS */}
      <SummaryCharts transactions={transactions} />

      {/* TRANSACTION LIST */}
      <TransactionList transactions={transactions} setTransactions={setTransactions} />

      {/* EXPORT BUTTON */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => exportToCSV(transactions)}
          className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-green-700 transition"
        >
          <FaFileCsv className="text-xl" /> Export Transactions (CSV)
        </button>
      </div>
    </motion.div>
  );
};

export default Dashboard;
