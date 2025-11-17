import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    setIsScroll(window.scrollY > 300);
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <button className=" flex-center">
      <FaArrowUp
        className={isScroll ? "scrollToTop active" : "scrollToTop"}
        onClick={scrollTop}
      />
    </button>
  );
}

export default ScrollToTop;
