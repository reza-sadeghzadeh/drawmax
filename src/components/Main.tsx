import React from "react";
import styled from "styled-components";

interface Props {}

export const Main = (props: Props) => {
  return (
    <Div>
      <h1>main</h1>
      <button className="">Heyyy</button>
      <button className="active">Heyyy</button>
      <button id="nav-button">sign up</button>
    </Div>
  );
};

const Div = styled.main`
  height: 2000px;
  background-color: #1b1b1b;
  color: white;

  h1 {
    padding: 10rem;
    font-size: 6rem;
  }
`;
