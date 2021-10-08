import React, { ReactElement } from "react";
import styled from "styled-components";
import { LogoAndDesc } from "./LogoAndDesc";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <Div>
      <div className="container flex-center">
        <LogoAndDesc />
        <svg
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          id="rocket"
          width="71"
          height="71"
          viewBox="0 0 71 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="71" height="71" rx="23" fill="white" />
          <path
            d="M39.4793 40.5242C39.4793 40.5242 52.1855 31.355 50.7761 20.861C50.7622 20.6828 50.6915 20.5138 50.5745 20.3786C50.4446 20.2582 50.2778 20.1852 50.1011 20.1716C39.8465 18.7298 30.8879 31.7312 30.8879 31.7312C23.1155 30.8006 23.6807 32.3504 20.1347 40.868C19.4561 42.4916 20.5559 43.0514 21.7619 42.5942L25.6283 41.1344L30.2903 45.9008L28.8629 49.859C28.4165 51.0938 28.9619 52.2188 30.5513 51.5258C38.8745 47.897 40.3901 48.4766 39.4793 40.5242ZM41.2955 29.8754C40.7777 29.3403 40.4882 28.6248 40.4882 27.8801C40.4882 27.1355 40.7777 26.42 41.2955 25.8848C41.5487 25.6239 41.8517 25.4164 42.1866 25.2747C42.5215 25.1331 42.8813 25.0601 43.2449 25.0601C43.6085 25.0601 43.9684 25.1331 44.3033 25.2747C44.6381 25.4164 44.9411 25.6239 45.1943 25.8848C45.7122 26.42 46.0017 27.1355 46.0017 27.8801C46.0017 28.6248 45.7122 29.3403 45.1943 29.8754C44.9411 30.1364 44.6381 30.3438 44.3033 30.4855C43.9684 30.6272 43.6085 30.7002 43.2449 30.7002C42.8813 30.7002 42.5215 30.6272 42.1866 30.4855C41.8517 30.3438 41.5487 30.1364 41.2955 29.8754Z"
            fill="#FF0000"
          />
        </svg>
      </div>
    </Div>
  );
}

const Div = styled.footer`
  .container {
    margin-top: 1rem;
    background-color: #1e1a1a;
    height: 12rem;
    width: 100%;
    flex-direction: column;
    position: relative;

    svg#rocket {
      cursor: pointer;
      width: 50px;
      height: 50px;
      position: absolute;
      right: 7vh;
      top: -25px;
    }

    @media screen and (min-width: 800px) {
      height: 17rem;
      margin-top: 5rem;

      svg#rocket {
        width: 71px;
        height: 71px;
        top: -35px;
      }
    }
  }
`;
