import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { LogoAndDesc } from "../components/common/LogoAndDesc";
import { RootState } from "../store/reducers";

interface Props {}

export const Loading = (props: Props) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.isLoading);

  return (
    <Div className="flex-center">
      <LogoAndDesc />
      <div className="spinner">
        <h4>Loading...</h4>
      </div>
    </Div>
  );
};

const Div = styled.section`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #1b1b1b;

  @media screen and (max-height: 500px) {
    justify-content: space-between;

    svg {
      margin-top: 4rem;
    }

    .spinner {
      bottom: 2rem;
      padding-top: 4rem;

      h4 {
        margin-top: 4rem;
      }
    }
  }
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  svg {
    path {
      fill: #f50505;
    }
  }
  .spinner {
    position: absolute;
    bottom: 4rem;

    ::after {
      content: "";
      bottom: calc(4rem + 1.5px);
      position: absolute;
      border-radius: 50%;
      background-color: #141010;
      width: 20px;
      z-index: 2;
      height: 20px;
      left: calc(50% - 10px);
    }
    ::before {
      content: "";
      position: absolute;
      background-repeat: no-repeat;
      bottom: 4rem;
      border-radius: 50%;
      border: 0;
      outline: none;
      background-position: 0 0, 100% 0, 0 100%, 100% 100%;
      background-size: 50% 50%, 50% 50%, 50% 50%, 50% 50%;
      background-image: linear-gradient(#f50505, #f50505),
        linear-gradient(#4e4b4b, #4e4b4b), linear-gradient(#4e4b4b, #4e4b4b),
        linear-gradient(#4e4b4b, #4e4b4b);
      /* background-color: red; */
      background-repeat: no-repeat;
      width: 23px;
      height: 23px;
      left: calc(50% - 11.5px);
      animation: rotate 2s linear infinite;
    }
    @keyframes rotate {
      100% {
        transform: rotate(1turn);
      }
    }

    h4 {
      font-family: my-font-thin;
      font-size: 1.6rem;
    }
  }
`;
