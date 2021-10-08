import React from "react";
import styled from "styled-components";

interface Props {}

export const LogoAndDesc = (props: Props) => {
  return (
    <Div className="flex-center">
      <svg
        width="88"
        height="19"
        viewBox="0 0 88 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.501842 14.7361C0.844011 15.5116 1.30024 16.2188 1.89333 16.8119C2.50923 17.405 3.19357 17.884 3.96915 18.2034C4.76755 18.5455 5.63437 18.7052 6.5012 18.7052C7.36803 18.7052 8.23486 18.5455 9.03325 18.2034C9.80883 17.884 10.4932 17.405 11.1091 16.8119C11.7022 16.2188 12.1584 15.5116 12.5006 14.7361C12.8427 13.9377 13.0024 13.0937 13.0024 12.204V1.14056L9.58072 0V6.47839C9.39823 6.38715 9.21574 6.2959 9.03325 6.22747C8.23486 5.8853 7.39084 5.72562 6.5012 5.72562C5.63437 5.72562 4.76755 5.8853 3.96915 6.22747C3.19357 6.54683 2.50923 7.02586 1.89333 7.61896C1.30024 8.21205 0.844011 8.9192 0.501842 9.69478C0.182485 10.4932 0 11.3372 0 12.204C0 13.0937 0.182485 13.9377 0.501842 14.7361ZM6.5012 9.1245C8.18923 9.1245 9.58072 10.516 9.58072 12.204C9.58072 13.9149 8.18923 15.2835 6.5012 15.2835C4.81317 15.2835 3.42168 13.9149 3.42168 12.204C3.42168 10.516 4.81317 9.1245 6.5012 9.1245Z" />
        <path d="M19.4086 18.5455V12.9339C19.4086 10.744 21.1879 8.94195 23.4006 8.94195V5.52026C22.3969 5.52026 21.416 5.72556 20.5036 6.11336C19.6367 6.47834 18.8383 7.02581 18.154 7.71014C17.4697 8.37167 16.945 9.17006 16.5572 10.0597C16.1694 10.9722 15.9869 11.9302 15.9869 12.9339V18.5455H19.4086Z" />
        <path d="M33.6302 5.70288L33.653 6.43284C32.7406 5.97661 31.7369 5.72569 30.7104 5.72569C29.8436 5.72569 28.9767 5.88537 28.1783 6.22754C27.4027 6.56971 26.7184 7.02593 26.1025 7.61903C25.5094 8.21212 25.0532 8.91927 24.711 9.69485C24.3917 10.4932 24.2092 11.3601 24.2092 12.2269C24.2092 13.0937 24.3917 13.9606 24.711 14.7589C25.0532 15.5345 25.5094 16.2189 26.1025 16.8348C26.7184 17.4279 27.4027 17.8841 28.1783 18.2263C28.9767 18.5456 29.8436 18.7281 30.7104 18.7281C31.7369 18.7281 32.7406 18.4772 33.653 18.021L33.6302 18.5456H37.0519V5.70288H33.6302ZM32.2615 14.873C31.8053 15.1467 31.2578 15.3064 30.7104 15.3064C29.0223 15.3064 27.6309 13.9149 27.6309 12.2269C27.6309 10.5389 29.0223 9.14738 30.7104 9.14738C31.3035 9.14738 31.8966 9.30706 32.3756 9.64923C32.8774 9.94577 33.2652 10.402 33.4934 10.9267C33.6987 11.3373 33.7899 11.7707 33.7899 12.2269C33.7899 12.7744 33.653 13.299 33.3793 13.7781C33.1056 14.2343 32.7406 14.6221 32.2615 14.873Z" />
        <path d="M56.9222 7.50497C55.8957 6.47846 54.5042 5.90818 53.0443 5.90818C51.63 5.90818 50.2841 6.43284 49.2804 7.41372C48.2539 6.43284 46.908 5.90818 45.4937 5.90818C44.7866 5.90818 44.0794 6.04505 43.4407 6.31878V5.70288H40.019V18.5456H43.4407V11.3829C43.4407 10.2651 44.3532 9.32987 45.4937 9.32987C46.6343 9.32987 47.5696 10.2651 47.5696 11.3829V18.5456H50.9912V11.3829C50.9912 10.2651 51.9037 9.32987 53.0443 9.32987C54.1848 9.32987 55.1201 10.2651 55.1201 11.3829V18.5456H58.5418V11.3829C58.5418 9.92296 57.9715 8.55429 56.9222 7.50497Z" />
        <path d="M70.1144 5.70288L70.1372 6.43284C69.2248 5.97661 68.2211 5.72569 67.1946 5.72569C66.3277 5.72569 65.4609 5.88537 64.6625 6.22754C63.8869 6.56971 63.2026 7.02593 62.5867 7.61903C61.9936 8.21212 61.5374 8.91927 61.1952 9.69485C60.8758 10.4932 60.6934 11.3601 60.6934 12.2269C60.6934 13.0937 60.8758 13.9606 61.1952 14.7589C61.5374 15.5345 61.9936 16.2189 62.5867 16.8348C63.2026 17.4279 63.8869 17.8841 64.6625 18.2263C65.4609 18.5456 66.3277 18.7281 67.1946 18.7281C68.2211 18.7281 69.2248 18.4772 70.1372 18.021L70.1144 18.5456H73.5361V5.70288H70.1144ZM68.7457 14.873C68.2895 15.1467 67.742 15.3064 67.1946 15.3064C65.5065 15.3064 64.115 13.9149 64.115 12.2269C64.115 10.5389 65.5065 9.14738 67.1946 9.14738C67.7877 9.14738 68.3807 9.30706 68.8598 9.64923C69.3616 9.94577 69.7494 10.402 69.9775 10.9267C70.1828 11.3373 70.2741 11.7707 70.2741 12.2269C70.2741 12.7744 70.1372 13.299 69.8635 13.7781C69.5898 14.2343 69.2248 14.6221 68.7457 14.873Z" />
        <path d="M83.9396 18.5455H88L83.3693 12.1583L87.9544 5.8396H83.8256L81.2935 9.37534L78.8071 5.8396H74.6098L79.2405 12.1355L74.6326 18.5455H78.6702L81.3163 15.0325L83.9396 18.5455Z" />
      </svg>
      <h5>
        Most updated movies, For You <span>!</span>
      </h5>
    </Div>
  );
};

const Div = styled.div`
  flex-direction: column;

  svg {
    width: 100px;
    height: 30px;

    path:nth-child(1) {
      animation: blink 1s ease-out 0s 1 alternate;
      fill: #fff;
    }
    path:nth-child(2) {
      animation: blink 1s ease-out 0.2s 1 alternate;
      fill: #fff;
    }
    path:nth-child(3) {
      animation: blink 1s ease-out 0.4s 1 alternate;
      fill: #fff;
    }
    path:nth-child(4) {
      animation: blink 1s ease-out 0.6s 1 alternate;
      fill: #fff;
    }
    path:nth-child(5) {
      animation: blink 1s ease-out 0.8s 1 alternate;
      fill: #fff;
    }
    path:nth-child(6) {
      animation: blink 1s ease-out 1s 1 alternate;
      fill: #fff;
    }

    @keyframes blink {
      0% {
        fill: white;
      }
      50% {
        fill: red;
      }
      100% {
        fill: white;
      }
    }
  }
  h5 {
    font-size: 1rem;
    font-family: my-font-thin;
    position: relative;

    span {
      color: #f50505;
      opacity: 1 !important;
      bottom: -1px;
      right: -17px;
      position: absolute;
      transform: rotate(10deg);
    }
  }

  @media screen and (min-width: 800px) {
    svg {
      width: 127px;
      height: 40px;
    }
    h5 {
      font-size: 1.4rem;
    }

    svg#rocket {
      width: 71px;
      height: 71px;
      top: -35px;
    }
  }
`;