import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const TransactionForm = ({ addTransaction, categories }) => {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !date || !category) return alert("Please fill in all required fields");

    const newTx = { id: Date.now(), type, amount: +amount, category, date, note };
    addTransaction(newTx);

    // reset fields
    setAmount("");
    setCategory("");
    setDate("");
    setNote("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-md p-6 mb-6 transition-transform hover:scale-[1.01]"
    >
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <FaPlusCircle className="text-indigo-500" /> Add Transaction
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <select
          className="border p-2 rounded-md"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          type="number"
          placeholder="Amount"
          className="border p-2 rounded-md"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          className="border p-2 rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="border p-2 rounded-md"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <textarea
          placeholder="Notes (optional)"
          className="border p-2 rounded-md md:col-span-2"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded-md mt-4 hover:bg-indigo-700 transition"
      >
        Add
      </button>
    </form>
  );
};

export default TransactionForm;
