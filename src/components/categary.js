import React from "react";
import "../styleFolder/category.css"
import styled from "styled-components";
const List = styled.li`
  ${"" /* border: 2px solid wheat; */}
  border-radius: 50px;
  text-align: center;
  font-size: 14px;
  word-spacing: 2px;
  padding: 3px 10px;
  color: #5e5e5eff;
  margin-top: 20px;
  font-family: system-ui;
  &:hover {
    border: 2px solid #ff8e8e;
    color: #ff8e8e;
  }
`;
const Catogary = () => {
  return (
    <div className="lists">
      <div 
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "left",
          listStyle: "none",
          padding: "0px",
          cursor: "pointer",
          backgroundColor: "#ffffff",
          fontWeight: "600",
          marginTop: "-50px",
          marginLeft: "43px",
        }}
      >
        <List>All Deals</List>

        <List>True Wireless Earbuds</List>
        <List>Smartwatches</List>
        <List>Speakers And Soundbars</List>
        <List>Neckbands And Headphones</List>
      </div>
    </div>
  );
};

export default Catogary;
