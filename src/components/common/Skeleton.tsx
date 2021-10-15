import React from "react";
import styled from "styled-components";

interface Props {}

export const Skeleton: React.FC<Props> = () => {
  return (
    <Div className="flex-center">
      <div className="img" />
      <div className="h5" />
      <div className="bottom-title flex-center">
        <div className="p" />
        <div className="score flex-center">
          <div className="img score" />
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  margin: 3rem 0.5rem;
  padding: 0;
  flex-direction: column;
  align-self: flex-start !important;
  align-items: flex-start;
  justify-content: flex-start;
  width: 156px !important;
  position: relative;
  padding-bottom: 1.77rem;

  .img {
    background-color: #5f5f5f;
    width: 156px !important;
    height: 254px;
    top: 0;
    border-radius: 30px;
    position: relative;
    object-fit: cover;
    overflow: hidden;

    ::after {
      content: "";
      position: absolute;
      transform: rotate(30deg);
      width: 30px;
      top: -50%;
      height: 300%;
      background-color: #868686;
      z-index: 5;
      animation: move 1.5s ease-in-out 0s infinite forwards;
    }
  }

  .h5 {
    margin-top: 1.5rem;
    margin-left: 1rem;
    background-color: #5f5f5f;
    width: 100px;
    height: 10px;
    border-radius: 10px;
    margin-bottom: 1rem;
    z-index: 5;
    transition: 0.2s ease all;
    overflow: hidden;
    position: relative;

    ::after {
      content: "";
      position: absolute;
      transform: rotate(30deg);
      width: 20px;
      top: -30px;
      left: -100px;
      height: 50px;
      background-color: #979797;
      z-index: 5;
      animation: move 1s ease-in-out 0s infinite forwards;
    }
  }

  .bottom-title {
    margin-left: 1rem;
    transition: 0.2s ease all;
    width: 80%;
    justify-content: space-between;

    .score {
      align-self: flex-end;
      overflow: hidden;
      position: relative;

      ::after {
        content: "";
        position: absolute;
        transform: rotate(30deg);
        width: 20px;
        top: -30px;
        height: 50px;
        background-color: #6b6b6b;
        z-index: 5;
        left: -20px;
        animation: move 1.5s ease-in-out 0s infinite forwards;
      }

      .img {
        opacity: 0.7;
        padding-right: 50px;
        width: 15px;
        height: 10px;
        width: 70%;
        object-fit: contain;
        margin-right: 0.2rem;
      }
    }
  }

  @media screen and (min-width: 400px) {
    margin: 3rem 1rem;
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 176px !important;
    position: relative;
    padding-bottom: 1rem;

    .img {
      background-color: #5f5f5f;
      width: 176px !important;
      height: 300px;
      top: 0;
      border-radius: 30px;
      position: relative;
      object-fit: cover;
      overflow: hidden;

      ::after {
        content: "";
        position: absolute;
        transform: rotate(30deg);
        width: 30px;
        top: -50%;
        height: 300%;
        background-color: #868686;
        z-index: 5;
        animation: move 1.5s ease-in-out 0s infinite forwards;
      }
    }

    .h5 {
      margin-top: 1.5rem;
      margin-left: 1rem;
      background-color: #5f5f5f;
      width: 100px;
      height: 10px;
      border-radius: 10px;
      margin-bottom: 1rem;
      z-index: 5;
      transition: 0.2s ease all;
      overflow: hidden;
      position: relative;

      ::after {
        content: "";
        position: absolute;
        transform: rotate(30deg);
        width: 20px;
        top: -30px;
        left: -100px;
        height: 50px;
        background-color: #979797;
        z-index: 5;
        animation: move 1s ease-in-out 0s infinite forwards;
      }
    }

    .bottom-title {
      margin-left: 1rem;
      transition: 0.2s ease all;
      width: 80%;
      justify-content: space-between;

      .score {
        align-self: flex-end;
        overflow: hidden;
        position: relative;

        ::after {
          content: "";
          position: absolute;
          transform: rotate(30deg);
          width: 20px;
          top: -30px;
          height: 50px;
          background-color: #6b6b6b;
          z-index: 5;
          left: -20px;
          animation: move 1.5s ease-in-out 0s infinite forwards;
        }

        .img {
          opacity: 0.7;
          padding-right: 50px;
          width: 15px;
          height: 10px;
          width: 70%;
          object-fit: contain;
          margin-right: 0.2rem;
        }
      }
    }
  }

  @media screen and (min-width: 1100px) {
    margin: 3rem 2rem;
    width: 219px !important;
    z-index: 56;
    overflow: visible;

    .img {
      width: 219px !important;
      height: 354px;
    }

    .h5 {
      font-size: 1.8rem;
    }
  }

  @keyframes move {
    from {
      left: -100%;
    }
    to {
      left: 160%;
    }
  }
`;
