import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./BackToTop.css";

function BackToTop() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {backToTop && (
        <button className="scroll-btn" onClick={scrollUp}>
          {<AiOutlineArrowUp className="scroll-icon" />}
        </button>
      )}
    </div>
  );
}

export default BackToTop;
