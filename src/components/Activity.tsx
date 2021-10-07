import React, { ReactElement } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./common/Card";
import MySwiper from "./common/MySwiper";

interface Props {}

export default function Activity({}: Props): ReactElement {
  let data = [
    {
      id: 1,
      title: "Jungle Cruise",
      year: 2021,
      imgSrc: "/images/movie1.png",
      scores: { imdb: 4.5, rt: 123 },
    },
    {
      id: 2,
      title: "Jungle Cruise",
      year: 2021,
      imgSrc: "/images/movie1.png",
      scores: { imdb: 4.5, rt: 123 },
    },
    {
      id: 3,
      title: "Jungle Cruise",
      year: 2021,
      imgSrc: "/images/movie1.png",
      scores: { imdb: 4.5, rt: 123 },
    },
    {
      id: 4,
      title: "Jungle Cruise",
      year: 2021,
      imgSrc: "/images/movie1.png",
      scores: { imdb: 4.5, rt: 123 },
    },
    {
      id: 5,
      title: "Jungle Cruise",
      year: 2021,
      imgSrc: "/images/movie1.png",
      scores: { imdb: 4.5, rt: 123 },
    },
    {
      id: 6,
      title: "Jungle Cruise",
      year: 2021,
      imgSrc: "/images/movie1.png",
      scores: { imdb: 4.5, rt: 123 },
    },
    {
      id: 7,
      title: "Jungle Cruise",
      year: 2021,
      imgSrc: "/images/movie1.png",
      scores: { imdb: 4.5, rt: 123 },
    },
    {
      id: 8,
      title: "Jungle Cruise",
      year: 2021,
      imgSrc: "/images/movie1.png",
      scores: { imdb: 4.5, rt: 123 },
    },
    {
      id: 9,
      title: "Jungle Cruise",
      year: 2021,
      imgSrc: "/images/movie1.png",
      scores: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      year: 2021,
      imgSrc: "/images/movie1.png",
      scores: { imdb: 4.5, rt: 123 },
    },
    {
      id: 11,
      title: "Jungle Cruise",
      year: 2021,
      imgSrc: "/images/movie1.png",
      scores: { imdb: 4.5, rt: 123 },
    },
    {
      id: 12,
      title: "Jungle Cruise",
      year: 2021,
      imgSrc: "/images/movie1.png",
      scores: { imdb: 4.5, rt: 123 },
    },
  ];

  return (
    <Div>
      <div className="container flex-center">
        <div className="container__header flex-center">
          {/* use Environment variables for production instead of absolute URLs */}
          <img src="/icons/Activity.svg" />
          <h4>activity</h4>
        </div>
        <MySwiper />
        <div className="divider" />
        <div className="card-holder flex-center">
          <ul className="flex-center">
            {data.map((d) => (
              <li key={d.id}>
                <Card movie={d} />
              </li>
            ))}
          </ul>
        </div>
        <div className="desktop-swipe">
          <Swiper
            breakpoints={{
              1100: {
                slidesPerView: 5,
              },
              1400: {
                slidesPerView: 6,
              },
              1700: {
                slidesPerView: 7,
              },
              1950: {
                width: 1900,
                slidesPerView: 8,
              },
            }}
            className="flex-center"
            spaceBetween={0}
            slidesPerView={5}
          >
            {data.map((d) => (
              <SwiperSlide className="swiper-slide my-siwper flex-center">
                <Card movie={d} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Div>
  );
}

const Div = styled.section`
  .container {
    margin-top: 70px;
    overflow-x: hidden;
    padding-left: 2rem;
    flex-direction: column;
    align-items: flex-start;

    &__header {
      margin-bottom: 3.5rem;

      img {
        margin-right: 20px;
      }
    }
    &__buttons {
      overflow-x: scroll;
      margin-top: 40px;
      button {
        margin-right: 1.2rem;
      }
    }

    .divider {
      overflow-x: hidden;
      transform: translateX(-30px);
      width: 130%;
      height: 0.3px;
      background-color: #e1e1e1;
      margin-bottom: 2.5rem;
      opacity: 0.3;
    }

    .card-holder ul {
      transform: translateX(-1rem);
      padding: 0;
      margin: 0;
      flex-wrap: wrap;
    }

    .desktop-swipe {
      display: none;
    }

    @media screen and (min-width: 380px) {
      padding-left: 3.3rem;
    }

    @media screen and (min-width: 1000px) {
      .card-holder {
        display: none;
      }

      .desktop-swipe {
        padding-top: 3rem;
        display: flex;
        width: 100vw;
        transform: translateX(-2rem);
      }
    }
  }
`;
