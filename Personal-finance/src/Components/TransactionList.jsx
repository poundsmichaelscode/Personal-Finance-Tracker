import React, { useState } from "react";
import { FaTrashAlt, FaSortAmountDown, FaFilter } from "react-icons/fa";
import { motion } from "framer-motion";

const TransactionList = ({ transactions, setTransactions }) => {
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  const handleDelete = (id) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  const filtered = transactions.filter((t) =>
    filterType === "all" ? true : t.type === filterType
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "amount") return b.amount - a.amount;
    if (sortBy === "date") return new Date(b.date) - new Date(a.date);
    return 0;
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Transaction History</h2>

        <div className="flex items-center gap-2">
          <FaFilter />
          <select
            className="border p-1 rounded-md text-sm"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <FaSortAmountDown />
          <select
            className="border p-1 rounded-md text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
          </select>
        </div>
      </div>

      <motion.ul
        className="divide-y divide-gray-200 max-h-[400px] overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {sorted.length > 0 ? (
          sorted.map((t) => (
            <motion.li
              key={t.id}
              className={`p-3 flex justify-between items-center ${
                t.type === "income" ? "border-l-4 border-green-500" : "border-l-4 border-red-500"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <p className="font-semibold">{t.category}</p>
                <p className="text-sm text-gray-500">{t.date}</p>
                {t.note && <p className="text-xs italic">{t.note}</p>}
              </div>
              <div className="flex items-center gap-3">
                <p
                  className={`font-semibold ${
                    t.type === "income" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {t.type === "income" ? "+" : "-"}₦{t.amount.toLocaleString()}
                </p>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </motion.li>
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">No transactions yet.</p>
        )}
      </motion.ul>
    </div>
  );
};

export default TransactionList;

