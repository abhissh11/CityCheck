import { useEffect, useRef, useState } from "react";

const useGeolocation = () => {
  const [coords, setCoords] = useState(null);
  const [locationDetails, setLocationDetails] = useState(null);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Get coordinates
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords(position.coords);
      },
      () => {
        setError("⚠️ Location access denied. Please allow to continue.");
      }
    );
  }, []);

  // Reverse geocode
  useEffect(() => {
    const fetchLocation = async () => {
      if (coords) {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`
          );
          const data = await res.json();
          setLocationDetails(data.address);
        } catch {
          setError("Unable to fetch City, State location.");
        }
      }
    };
    fetchLocation();
  }, [coords]);

  return {
    ref,
    coords,
    locationDetails,
    error,
    visible,
  };
};

export default useGeolocation;
