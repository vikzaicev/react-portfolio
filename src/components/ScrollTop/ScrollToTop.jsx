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

// .scrollToTop {
//   position: fixed;
//   right: 0px;
//   bottom: 20px;
//   width: 45px;
//   height: 45px;
//   background: var(--second-color);
//   color: #fff;
//   font-size: var(--small-font-size);
//   border-radius: 3px;
//   cursor: pointer;
//   z-index: -1;
//   box-shadow: var(--box-shadow);
//   opacity: 0;
//   visibility: hidden;
//   transition: 0.3s linear;
// }

// .scrollToTop.flex-center {
//   justify-content: center;
// }

// .scrollToTop.active {
//   z-index: 10;
//   opacity: 1;
//   visibility: visible;
//   right: 20px;
// }
