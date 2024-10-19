import { useEffect, useState } from "react";

const useIsAndroid = () => {
  const [isAndroid, setIsAndroid] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 767) {
        setIsAndroid(true);
      } else {
        setIsAndroid(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return isAndroid;
};

export default useIsAndroid;
