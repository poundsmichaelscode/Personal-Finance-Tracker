import React from "react";
import Dashboard from "./Components/pages/Dashboard";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
