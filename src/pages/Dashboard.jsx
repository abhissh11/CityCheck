import React, { useState } from "react";
import LocationInfo from "../components/LocationInfo";
import NetworkInfo from "../components/NetworkInfo";
import TipsSection from "../components/TipCard";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("location");

  const tabStyle = (tab) =>
    `px-4 py-2 rounded-t-lg transition-all font-medium ${
      activeTab === tab
        ? "bg-white border-t-2 border-purple-500 text-purple-600"
        : "bg-gray-100 text-gray-500 hover:text-purple-500"
    }`;

  return (
    <div className="min-h-screen px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-200">
        🧭 <span className="text-pink-600">CityCheck</span> Dashboard
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-1 mb-4 border-b">
        <button
          onClick={() => setActiveTab("location")}
          className={tabStyle("location")}
        >
          📍 Location
        </button>
        <button
          onClick={() => setActiveTab("network")}
          className={tabStyle("network")}
        >
          📶 Network
        </button>
        <button
          onClick={() => setActiveTab("tips")}
          className={tabStyle("tips")}
        >
          💡 Tips
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-gray-100 rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
        {activeTab === "location" && <LocationInfo />}
        {activeTab === "network" && <NetworkInfo />}
        {activeTab === "tips" && <TipsSection />}
      </div>
    </div>
  );
};

export default Dashboard;
