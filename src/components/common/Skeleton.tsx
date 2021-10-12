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
  margin: 3rem 1rem;
  padding: 0;
  flex-direction: column;
  /* overflow: visible; */
  align-items: flex-start;
  justify-content: flex-start;
  width: 176px !important;
  /* overflow: hidden; */
  position: relative;
  animation: blink-s 0.5s ease 0s infinite alternate;
  padding-bottom: 0.75rem;

  .img {
    background-color: #5f5f5f;
    width: 176px !important;
    height: 300px;
    top: 0;
    border-radius: 30px;
    /* height: 284px; */
    object-fit: cover;
  }

  .h5 {
    margin-top: 1.5rem;
    margin-left: 1rem;
    background-color: #525252;
    width: 100px;
    height: 10px;
    border-radius: 10px;
    margin-bottom: 1rem;
    z-index: 5;
    font-family: my-font-bold;
    font-size: 1.5rem;
    transition: 0.2s ease all;
  }

  .bottom-title {
    opacity: 0.5;
    margin-left: 1rem;
    transition: 0.2s ease all;
    width: 80%;
    justify-content: space-between;

    .p {
      background-color: #666666;
      font-size: 1.4rem;
      width: 30px;
      border-radius: 30px;
      height: 10px;
    }

    .score {
      align-self: flex-end;
      .img {
        opacity: 0.7;
        padding-right: 50px;
        width: 15px;
        height: 10px;
        width: 70%;
        object-fit: contain;
        margin-right: 0.2rem;
      }
      span {
        width: 30px;
        height: 10px;
        border-radius: 30px;
        background-color: #666666;
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

  @keyframes blink-s {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
