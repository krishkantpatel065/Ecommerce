import React from "react";
import styled from "styled-components";
import "../styleFolder/spinner.css";
const Loadder = styled.div`
  position: absolute;
  top: -7px;
  right: 0%;
  left: 48%;
  border: 5px solid #c7c3c3;
  border-radius: 50%;
  border-top: 5px solid #0599fc;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
`;

function Spinner({ top }) {
  return (
   
      <Loadder top={top} />
    
  );
}

export default Spinner;
