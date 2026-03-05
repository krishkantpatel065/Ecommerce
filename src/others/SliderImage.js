import React, { useEffect, useState } from "react";
import "../styleFolder/slidingImage.css";
function SlidingImage() {
  const [current, setCurrent] = useState(0);
  const TotalSlide = 4;
  const nextSlide = () => {
    setCurrent((prev) => (prev === TotalSlide - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? TotalSlide - 1 : prev - 1));
  };
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="slider">
      <div
        className="slides"
        style={{ transform: `translate(-${current * 100}%)` }}
      >
        <div className="slide">
          <img src="/assets/image.webp" alt="Product 1" />
        </div>
        <div className="slide">
          <img src="/assets/headphone.webp" alt="Product 2" />
        </div>
        <div className="slide">
          <img src="/assets/Frame.png" alt="Product 3" />
        </div>
        <div className="slide">
          <img src="/assets/Desktop1.webp" alt="Product 3" />
        </div>
         {/* <div className="slide">
          <img src="/Desktop1.webp" alt="Product 3" />
        </div> */}
      </div>

      <div className="dots">
        {[...Array(TotalSlide)].map((el, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
        {/* <div className="dot active" onClick={nextSlide}></div>
        <div className="dot" onClick={prevSlide}></div> */}
      </div>
    </section>
  );
}

export default SlidingImage;
