// src/components/NetworkInfo.jsx
import React, { useEffect, useState } from "react";

const NetworkInfo = () => {
  const [networkType, setNetworkType] = useState("");

  useEffect(() => {
    const connection = navigator.connection || navigator.webkitConnection;
    if (connection) {
      setNetworkType(connection.effectiveType);
    } else {
      setNetworkType("Not supported by browser");
    }
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Network Information
      </h2>
      <p className="text-gray-100 bg-gray-800 w-fit px-6 py-2 rounded-lg transition-all duration-700 ease-out transform">
        Connection Type: <span className="font-medium">{networkType}</span>
      </p>
    </div>
  );
};

export default NetworkInfo;
