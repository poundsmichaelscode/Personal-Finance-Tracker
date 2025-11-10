import React from "react";
import { FaWallet } from "react-icons/fa";

const navbar = () => (
  <nav className="bg-indigo-600 text-white py-4 px-6 flex items-center justify-between shadow-lg">
    <div className="flex items-center gap-2">
      <FaWallet className="text-2xl" />
      <h1 className="text-xl font-semibold">Finance Tracker</h1>
    </div>
  </nav>
);

export default navbar;
