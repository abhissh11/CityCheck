import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-800 to-purple-800 flex items-center justify-center px-6 py-10">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-100 leading-tight mb-6">
          🌍 Welcome to <span className="text-pink-600">CityCheck</span>
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Your smart outdoor assistant. Get your current location, network
          condition, and helpful safety tips — all in one place, before stepping
          out.
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg cursor-pointer hover:bg-purple-700 transition duration-300 font-medium"
        >
          Let’s Explore
        </button>
      </div>
    </div>
  );
};

export default Home;
