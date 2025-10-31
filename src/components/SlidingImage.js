import React, { useState } from "react";
import styled from "styled-components";
import "../styleFolder/slidingImage.css";
function SlidingImage() {
  const [current, setCurrent] = useState(0);

  const slidesEl = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");
  const total = dots.length;

  function goToSlide(index) {
    setCurrent = index;
    // console.log(current);

    slidesEl.style.transform = `translate( -${100 * current}%)`;
    // slidesEl.style.transform = `translate(-${100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
  }

  function nextSlide() {
    // setCurrent = (current + 1) % total;
    // console.log(current);
    // goToSlide(current);
  }

  setInterval(nextSlide, 7000);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => goToSlide(i));
  });
  return (
    <section className="slider">
      <div className="slides">
        <div className="slide">
          <img src="/image.webp" alt="Product 1" />
        </div>
        <div className="slide">
          <img src="/slideimg3.webp" alt="Product 2" />
        </div>
        <div className="slide">
          <img src="/headphone.webp" alt="Product 3" />
        </div>
        <div className="slide">
          <img src="/Desktop1.webp" alt="Product 3" />
        </div>
      </div>

      <div className="dots">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  );
}

export default SlidingImage;
