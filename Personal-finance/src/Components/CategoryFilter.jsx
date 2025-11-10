import React, { useState } from "react";
import { FaPlus, FaTag } from "react-icons/fa";

const CategoryFilter = ({ categories, setCategories }) => {
  const [newCategory, setNewCategory] = useState("");

  const addCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim() && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
        <FaTag /> Manage Categories
      </h2>

      <div className="flex flex-wrap gap-2 mb-3">
        {categories.map((cat, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
          >
            {cat}
          </span>
        ))}
      </div>

      <form onSubmit={addCategory} className="flex gap-2">
        <input
          type="text"
          placeholder="Add new category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="border p-2 rounded-md flex-1"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default CategoryFilter;
