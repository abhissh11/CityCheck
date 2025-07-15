import { useEffect, useRef, useState } from "react";

const useTipsObserver = (itemCount, threshold = 0.3) => {
  const [visible, setVisible] = useState(Array(itemCount).fill(false));
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
          }
        });
      },
      { threshold }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => refs.current.forEach((ref) => ref && observer.unobserve(ref));
  }, [itemCount, threshold]);

  return { refs, visible };
};

export default useTipsObserver;
