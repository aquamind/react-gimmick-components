import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState<Number>(window.scrollY);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollY };
};

export default useScroll;
