import React from "react";
import styled from "styled-components";
import "../styleFolder/spinner.css";
const Loadder = styled.div`
  position: absolute;
  top: 70px;
  right: 0%;
  left: 48%;
  border: 5px dotted gray;
  border-radius: 50%;
  border-top: 5px dotted red;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  margin-bottom: 20px;
`;

function Spinner({ loader }) {
  return loader ? <Loadder /> : null;
}

export default Spinner;
