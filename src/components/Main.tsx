import React from "react";
import styled from "styled-components";
import { BsFillClockFill } from "react-icons/bs";
import { GoPlay } from "react-icons/go";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { CgScrollV } from "react-icons/cg";

interface Props {}

export const Main = (props: Props) => {
  const moive = {
    durtaion: 93,
    score: {
      rottenTomato: 140,
      imdb: 9.5,
    },
    season: 5,
    episode: 14,
    title: "The Walking Dead: 2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate inventore maiores. Nisi, dolore. Inventore et doloribus in, dolorem totam officia magnam eum quibusdam, magni harum perspiciatis deleniti saepe, delectus quam. Minus?",
  };

  return (
    <Div className="flex-center">
      <div className="container flex-center ">
        <div className="container__movie-details flex-center ">
          <div className="topside-details flex-center">
            <BsFillClockFill />
            <h4>
              Duration: {(moive.durtaion / 60).toFixed(0)}hr{" "}
              {moive.durtaion % 60} min
            </h4>
          </div>
          <div className="topside-details flex-center">
            <img src="/icons/Rotten Tomatoes Icon.svg" alt="Rotten Tomatoes" />
            <span>{moive.score.rottenTomato}</span>
            <img id="imdb" src="/icons/IMDB.svg" alt="IMDB" />
            <span>{moive.score.imdb}</span>
            <div className="divider"></div>
            <h4>
              Season: <span id="detail"> {moive.season}</span>
            </h4>
            <h4>
              Session: <span id="detail"> {moive.episode}</span>
            </h4>
          </div>
          <h2 className="container__title">{moive.title}</h2>
          <p className="container__description">{moive.description}</p>
        </div>
        <div className="container__button flex-center">
          <button className="active flex-center">
            <GoPlay />
            Watch Now!
          </button>
          <button className="flex-center">
            <BsFillPlusSquareFill />
            Watch Later!
          </button>
        </div>
        <div id="scroll">
          <CgScrollV />
          <h2>scroll down!</h2>
        </div>
        <div className="slider">
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide active"></div>
          <div className="slide"></div>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.main`
  width: 100%;

  .container {
    height: clamp(100vh, 110%, 1500px);
    position: relative;
    width: 100%;
    /* background : url(${() => process.env.PUBLIC_URL + "/images/"}); */
    overflow: hidden;
    padding-left: 1rem;
    padding-top: 15rem;
    /* padding-bottom: 10rem; */
    color: white;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    ::after {
      content: "";
      position: absolute;
      width: 100%;
      z-index: 1;
      height: 100%;
      background-color: black;
      opacity: 0.57;
      top: 0;
      left: 0;
    }
    ::before {
      content: "";
      transform: scale(1.1);
      position: absolute;
      width: 100%;
      z-index: 1;
      height: 100%;
      background: url("/images/hero.png");
      filter: blur(3px);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 40% 50%;
      object-fit: cover;
      top: 0;
      left: 0;
    }

    .slider {
      display: none;
    }

    &__movie-details {
      z-index: 2;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      /* margin-top: 5rem; */

      .topside-details {
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 2.5rem;

        h4 {
          font-size: 1.4rem;
        }

        span#detail {
          color: #f50505;
          margin-left: 0.2rem;
        }

        .divider {
          height: 29px;
          width: 1px;
          background-color: white;
          transform: translateY(-5px);
          margin-right: 0.9rem;
        }
        svg,
        img {
          width: 17px;
          height: 17px;
          margin-right: 0.7rem;

          &#imdb {
            width: 24px;
          }
        }
      }

      h2.container__title {
        font-size: 2.5rem;
        margin: 2rem 0;
      }

      p.container__description {
        font-size: 1.4rem;
        max-width: 300px;
        /* line-height: 2rem; */
      }
    }

    &__button {
      z-index: 2;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 15rem;

      button {
        justify-content: flex-start;
        margin-top: 2.5rem;

        :nth-child(2) {
          margin-top: 1.2rem;
        }
        /* align-items: center; */

        svg {
          margin-right: 3rem;
          width: 27px;
          height: 27px;
          border-radius: 5px;
        }
      }
    }

    #scroll {
      color: white;
      position: absolute;
      left: 50%;
      bottom: 30px;
      z-index: 5;

      h2 {
        transform: translateX(-50%);
      }
      svg {
        transform: translateX(-50%);
        width: 30px;
        height: 30px;
        animation: scroll-anim 1s ease-in-out 0s infinite alternate;
      }
      @keyframes scroll-anim {
        from {
          transform: translateY(0) translateX(-50%);
        }
        to {
          transform: translateY(-10px) translateX(-50%);
        }
      }
    }

    @media screen and (min-width: 400px) {
      padding-left: 3.3rem;
    }

    @media screen and (min-width: 800px) {
      padding-top: 20rem;

      &__button {
        z-index: 2;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 15rem;

        button {
          :nth-child(2) {
            margin-top: 2.5rem;
            margin-left: 2.5rem;
          }

          svg {
            margin-right: 3rem;
            width: 27px;
            height: 27px;
            border-radius: 5px;
          }
        }
      }
    }
    @media screen and (min-width: 1100px) {
      padding-left: 8.7rem;
      justify-content: center;
      min-height: 100vh;

      .topside-details {
        span {
          margin-right: 1.6rem;
        }
      }

      h2.container__title {
        font-size: 4.7rem;
      }

      p.container__description {
        font-size: 1.4rem;
        max-width: 500px;
      }

      .slider {
        position: absolute;
        right: 100px;
        bottom: 50px;
        display: flex;
        z-index: 3;

        .slide {
          width: 54px;
          height: 3px;
          border-radius: 30px;
          margin: 0 5px;
          background-color: #555555;
          position: relative;

          &.active {
            background-color: #c4c4c4;
          }
        }
      }
    }
  }

  @media screen and (min-width: 2000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #141010;

    .container {
      width: 2000px;
    }
  }
`;
