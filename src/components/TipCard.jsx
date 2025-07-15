// src/components/TipsSection.jsx
import React from "react";
import useTipsObserver from "../hooks/useTipsObserver";

const tips = [
  "🧴 Stay hydrated and carry a bottle.",
  "🔦 Avoid dark, isolated areas at night.",
  "📶 Download offline maps when network is weak.",
  "📱 Keep emergency contacts saved in your phone.",
];

const TipsSection = () => {
  const { refs, visible } = useTipsObserver(tips.length);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Helpful Outdoor Tips
      </h2>
      <div className="space-y-4">
        {tips.map((tip, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className={`transition-all duration-700 ease-out transform ${
              visible[i]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            } bg-gray-800 text-gray-100 rounded-lg px-4 py-3 shadow`}
          >
            {tip}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsSection;
