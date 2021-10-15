import React from "react";
import { BsFillClockFill, BsFillPlusSquareFill } from "react-icons/bs";
import { CgScrollV } from "react-icons/cg";
import { GoPlay } from "react-icons/go";
import styled, { css } from "styled-components";

export const Main = ({ movie, isHero, slug }) => {
  return (
    <Div
      isHero={isHero}
      imgSrc={movie.imgSrc}
      id="land-hero"
      className="flex-center"
    >
      <div className="container flex-center ">
        <div className="container__movie-details flex-center ">
          <div className="top-side-detail-holder">
            <div className="topside-details flex-center">
              <BsFillClockFill />
              <h4>
                Duration: {(movie.duration / 60).toFixed(0)}hr{" "}
                {movie.duration % 60} min
              </h4>
            </div>
            <div className="topside-details flex-center">
              <img
                src="/icons/Rotten Tomatoes Icon.svg"
                alt="Rotten Tomatoes"
              />
              <span>{movie.score.rt}</span>
              <img id="imdb" src="/icons/IMDB.svg" alt="IMDB" />
              <span>{movie.score.imdb}</span>

              <div className="divider"></div>
              <h4>
                Season: <span id="detail"> {movie.season}</span>
              </h4>
              <h4>
                Session: <span id="detail"> {movie.episode}</span>
              </h4>
            </div>
          </div>
          <h2 className="container__title">{movie.title}</h2>
          {isHero && (
            <p className="container__description">{movie.description}</p>
          )}
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
        {isHero && !slug && (
          <div id="scroll">
            <CgScrollV />
            <h2>scroll down!</h2>
          </div>
        )}
      </div>
    </Div>
  );
};

const Div = styled.section`
  width: 100%;

  .container {
    height: clamp(100vh, 110%, 1500px);
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-left: 1rem;
    padding-top: 15rem;
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

      ${(p) => `background: url(${p.imgSrc});`}
      /* background : url(${() => process.env.PUBLIC_URL + "/images/"}); */

      
    
      filter: blur(1.5px);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 30% 0%;
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
        word-wrap: unset;

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
    }

    ${(p) =>
      !p.isHero
        ? css`
            .top-side-detail-holder {
              transform: translateY(7rem);
            }

            h2.container__title {
              transform: translateY(-8rem);
              font-size: 3rem;
            }
            border-radius: 50px;
            height: 500px;

            ::after,
            ::before {
              height: 500px;
              border-radius: 50px;
            }

            @media screen and (min-width: 500px) {
              flex-direction: column;

              width: clamp(300px, 100%, 1920px);
              height: 500px;
              overflow: hidden;
            }

            @media screen and (min-width: 800px) {
              width: clamp(300px, 90%, 1920px);
              height: 440px;
              border-radius: 50px;
              padding: 0 5rem;
              padding-top: 9rem;

              .top-side-detail-holder {
                transform: translateY(7rem);
              }
            }

            @media screen and (min-width: 1000px) {
              height: 440px;
              overflow: hidden;
              justify-content: flex-start;
              width: clamp(300px, 90%, 1920px);
              padding: 8rem 8.7rem;

              .top-side-detail-holder {
                transform: translateY(9rem);
              }

              h2.container__title {
                transform: translateY(-8rem);
                font-size: 4rem;
              }
            }

            @media screen and (min-width: 1101px) {
              min-height: 440px;
              margin-bottom: 3rem;
            }
          `
        : ""}
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
