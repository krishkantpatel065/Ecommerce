import React from "react";
import styled from "styled-components";

const ListsWrapper = styled.div`
  margin-top: -50px;
  margin-left: 43px;
`;

const ListContainer = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  cursor: pointer;
  background-color: #ffffff;
  font-weight: 600;
  margin: 0;
`;

const List = styled.li`
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

const Category  = () => {
  return (
    <ListsWrapper>
      <ListContainer>
        <List>All Deals</List>
        <List>True Wireless Earbuds</List>
        <List>Smartwatches</List>
        <List>Speakers And Soundbars</List>
        <List>Neckbands And Headphones</List>
      </ListContainer>
    </ListsWrapper>
  );
};

export default Category;
