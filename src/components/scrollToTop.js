import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Button = styled.button`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: #e01212ff;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #333;
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.onscroll > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  });
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <Button onClick={scrollToTop} show={visible} title="Go to top">
        Top
      </Button>
    </div>
  );
};

export default ScrollToTop;
