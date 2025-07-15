// src/components/LocationInfo.jsx
import React from "react";
import useGeolocation from "../hooks/useGeolocation";

const LocationInfo = () => {
  const { ref, coords, locationDetails, error, visible } = useGeolocation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } bg-gray-100 rounded-lg px-4 py-5 shadow`}
    >
      <h2 className="text-xl font-semibold mb-3 text-gray-800">
        📍 Your Location
      </h2>

      {error && <p className="text-red-600">{error}</p>}
      {!coords && !error && (
        <p className="text-gray-500">Detecting coordinates...</p>
      )}

      {coords && (
        <ul className="text-gray-100 space-y-1 text-sm">
          <li className="bg-gray-800 w-fit px-6 py-2 rounded-lg">
            Latitude: {coords.latitude.toFixed(4)}
          </li>
          <li className="bg-gray-800 w-fit px-6 py-2 rounded-lg">
            Longitude: {coords.longitude.toFixed(4)}
          </li>
          <li className="bg-gray-800 w-fit px-6 py-2 rounded-lg">
            Accuracy: ±{coords.accuracy} meters
          </li>
        </ul>
      )}

      {locationDetails && (
        <div className="text-sm text-gray-100 bg-gray-800 px-6 py-3 rounded-lg w-fit mt-4">
          <p>
            🏙️ <span className="font-semibold">City:</span>{" "}
            {locationDetails.city ||
              locationDetails.town ||
              locationDetails.village ||
              "N/A"}
          </p>
          <p>
            🗺️ <span className="font-semibold">State:</span>{" "}
            {locationDetails.state || "N/A"}
          </p>
          <p>
            🌎 <span className="font-semibold">Country:</span>{" "}
            {locationDetails.country || "N/A"}
          </p>
        </div>
      )}
    </div>
  );
};

export default LocationInfo;
