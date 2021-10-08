import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

interface Props {}

function Search({}: Props): ReactElement {
  const history = useHistory();

  return (
    <Div>
      <div className="container flex-center">
        <svg
          onClick={() => history.push("/")}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M28.68 0H11.34C4.56 0 0 4.76 0 11.84V28.18C0 35.24 4.56 40 11.34 40H28.68C35.46 40 40 35.24 40 28.18V11.84C40 4.76 35.46 0 28.68 0Z"
            fill="white"
          />
          <path
            d="M26.0314 23.541L22.4734 19.985L26.0294 16.429C26.7134 15.747 26.7134 14.637 26.0294 13.955C25.3454 13.267 24.2394 13.269 23.5554 13.953L19.9974 17.509L16.4394 13.949C15.7554 13.265 14.6474 13.269 13.9634 13.949C13.2814 14.633 13.2814 15.743 13.9634 16.425L17.5234 19.985L13.9714 23.535C13.2874 24.219 13.2874 25.329 13.9714 26.009C14.3134 26.353 14.7594 26.523 15.2074 26.523C15.6574 26.523 16.1034 26.353 16.4454 26.011L19.9974 22.459L23.5574 26.017C23.8994 26.359 24.3454 26.529 24.7934 26.529C25.2414 26.529 25.6894 26.357 26.0314 26.017C26.7154 25.333 26.7154 24.225 26.0314 23.541Z"
            fill="white"
          />
        </svg>
        <h3>Search in out database</h3>
        <div className="search">
          <input
            autoComplete="off"
            type="text"
            name="input-search"
            id="search"
          />
        </div>
      </div>
    </Div>
  );
}

export default Search;

const Div = styled.section`
  top: 0;
  min-height: 100vh;
  width: 100%;
  z-index: 10;
  background-color: #141010;
  opacity: 0.95;
  position: absolute;

  .container {
    flex-direction: column;
    padding-left: 2rem;
    align-items: flex-start;

    svg {
      cursor: pointer;
      position: absolute;
      right: 32px;
      top: 47px;
    }
    h3 {
      font-size: 2rem;
      font-family: my-font-bold;
      margin-top: 120px;
    }
    .search {
      margin-top: 2rem;
      width: clamp(300px, 90%, 480px);

      input {
        font-size: 1.4rem;
        width: 100%;
        padding: 2rem 3rem;
        border-radius: 500px;
        background-color: #343434;
        border: 0;
        outline: none;
        color: white;
      }
    }
  }
`;
