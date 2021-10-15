import React, { ReactElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SwiperCore, { Autoplay } from "swiper";
import { Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Main } from "./Main";
SwiperCore.use([Navigation, Autoplay, Pagination]);
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
    <Div className="flex-center">
      <div className="container ">
        <Swiper pagination={true} loop autoplay>
          {movies.map((movie) => (
            <SwiperSlide>
              <Main movie={movie} isHero={true} slug={false} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Div>
  );
}

export default LandingPageHero;

const Div = styled.div`
  .container {
    position: relative;
    width: 100%;

    .swiper-pagination {
      display: none !important;
    }

    @media screen and (min-width: 1100px) {
      .swiper-pagination {
        display: block !important;
        background-color: #1414145c;
        padding: 2rem 2rem;
        align-self: center;
        position: absolute;
        margin-top: 2rem;
        width: unset !important;
        left: unset !important;
        right: 50px;
        z-index: 5;
        transform: translateY(-5rem);
        display: flex;
        z-index: 3;

        .swiper-pagination-bullet {
          width: 54px;
          cursor: pointer;
          box-sizing: border-box;
          height: clamp(2px, 3px, 5px);
          border-radius: 30px;
          margin: 0rem 5px;
          background-color: #d1d1d1;
          position: relative;

          &-active {
            background-color: #a8a8a8;
            box-shadow: 0 0 10px 0 white;
          }
        }
      }
    }
    @media screen and (min-width: 1920px) {
      width: 1920px;
    }
  }
`;
