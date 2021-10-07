/* eslint-disable no-restricted-globals */
import React, { ReactElement } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./common/Card";
import MySwiper from "./common/MySwiper";
import { Inherit } from "./Latest";

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
    <Div className="flex-center">
      <div className="container flex-center">
        <div className="container__header flex-center">
          {/* use Environment variables for production instead of absolute URLs */}
          <img src="/icons/Activity.svg" />
          <h4> Latest Movies</h4>
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
              1110: {
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 4.5,
              },
              1400: {
                slidesPerView: 5,
              },
              1500: {
                slidesPerView: 5.5,
              },
              1700: {
                slidesPerView: 6,
              },
              1800: {
                width: 1800,
                slidesPerView: 6.5,
              },
            }}
            className="my-swiper-container flex-center"
            spaceBetween={50}
            slidesPerView={4.3}
            pagination={{ clickable: true }}
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

const Div = styled(Inherit)`
  margin-top: 5rem;

  .desktop-swipe {
    display: none;
  }

  @media screen and (min-width: 1000px) {
    .card-holder {
      display: none;
    }

    .desktop-swipe {
      padding-top: 3rem;
      padding-left: 10rem;
      display: flex;
      width: 100vw;
      transform: translateX(-5rem);
      overflow: hidden;
    }
  }
  @media screen and (min-width: 2000px) {
    .container {
      width: 2000px;
    }
  }
`;
