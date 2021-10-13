import React, { ReactElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Main } from "./Main";

interface Props {}

function LandingPageHero({}: Props): ReactElement {
  const movies = [
    {
      id: 1,
      title: "Lorem ipsum: 2023",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      duration: 135,
      imgSrc: "/images/hero.png",
      // imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 2,
      title: "Lorem ipsum: 2020",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      duration: 135,
      imgSrc: "/images/hero2.png",
      // imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 6,
      title: "Lorem ipsum: 2025",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      duration: 135,
      imgSrc:
        "/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x.jpg",
      // imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 6,
      title: "Lorem ipsum: 2026",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      duration: 135,
      imgSrc: "/images/1460160453-e8dab22c63dcca7f1b65462fb805b0801085de63.jpg",
      score: { imdb: 4.5, rt: 123 },
    },
  ];
  const [movieState, setMovieState] = useState(0);

  const sliderRed = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sliderRed.current?.childNodes.forEach((s, indx) => {
      //@ts-ignore
      s.classList.remove("active");
      //@ts-ignore
      if (indx === movieState) s.classList.add("active");
    });
  }, [movieState]);

  useEffect(() => {
    const interv = setInterval(() => {
      setMovieState((movieState) => (movieState === 3 ? 0 : movieState + 1));
    }, 10000);
    return () => {
      clearTimeout(interv);
    };
  }, [movieState]);

  return (
    <Div>
      <div className="container ">
        <Main movie={movies[movieState]} isHero={true} slug={false} />
        <div className="slider flex-center" ref={sliderRed}>
          <div className="slide" onClick={() => setMovieState(0)}></div>
          <div className="slide" onClick={() => setMovieState(1)}></div>
          <div className="slide" onClick={() => setMovieState(2)}></div>
          <div className="slide" onClick={() => setMovieState(3)}></div>
        </div>
      </div>
    </Div>
  );
}

export default LandingPageHero;

const Div = styled.div`
  .container {
    .slider {
      background-color: #1414145c;
      padding: 2rem 2rem;
      align-self: center;
      margin-top: 2rem;
      z-index: 5;
      transform: translateY(-2rem);
      display: flex;
      z-index: 3;

      .slide {
        width: 54px;
        cursor: pointer;
        box-sizing: border-box;
        height: clamp(2px, 5px, 5px) !important;
        border-radius: 30px;
        margin: 0rem 5px;
        background-color: #747474;
        position: relative;

        &.active {
          background-color: #e2e2e2;
          box-shadow: 0 0 25px 0 #d1d1d1;
        }
      }
    }

    @media screen and (min-width: 1100px) {
      .slider {
        right: 100px;
        bottom: 50px;
        position: absolute;
      }
    }
  }
`;
