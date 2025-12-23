import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Button = styled.button`
  display: ${(props) => (props.$show ? "block" : "none")};
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 10px;
  border: none;
  outline: none;
  background-color: #e01212ff;
  color: white;
  cursor: pointer;
  padding: 10px;
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
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button onClick={scrollToTop} $show={visible} title="Go to top">
     <i className="fa-solid fa-arrow-up"></i>
    </Button>
  );
};

export default ScrollToTop;
