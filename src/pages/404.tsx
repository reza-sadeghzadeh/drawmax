import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {}

function NotFound({}: Props): ReactElement {
  return (
    <Div className="flex-center">
      <h1>404</h1>
    </Div>
  );
}

export default NotFound;

const Div = styled.div`
  height: calc(100vh - 120px);

  h1 {
    color: red;
    font-family: my-font-bold;
    font-size: 7rem;
  }

  @media screen and (min-width: 800px) {
    height: calc(100vh - 220px);
  }
`;
