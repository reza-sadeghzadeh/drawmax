/* eslint-disable no-restricted-globals */
import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { RootState } from "../store/reducers";
import { Card } from "./common/Card";
import MySwiper from "./common/MySwiper";
//@ts-ignore
import { Skeleton } from "./common/Skeleton";
import { Inherit } from "./Latest";

interface Props {}

export default function Activity({}: Props): ReactElement {
  let data = [
    {
      id: 1,
      season: 2,
      episode: 6,
      title: "Interstaller",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      year: 2014,
      duration: 99,
      imgSrc: "/images/Interstellar_film_poster.jpg",
      score: { imdb: 8.4, rt: 123 },
    },
    {
      id: 2,
      season: 2,
      episode: 6,
      title: "Jungle Cruise",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      duration: 99,
      year: 2021,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 3,
      season: 2,
      episode: 6,
      title: "Jungle Cruise",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      duration: 99,
      year: 2021,
      imgSrc: "/images/220px-Blade_Runner_(1982_poster).png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 4,
      season: 2,
      episode: 6,
      title: "Joker",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      duration: 99,
      year: 2021,
      imgSrc: "/images/220px-Joker_(2019_film)_poster.jpg",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 5,
      season: 2,
      episode: 6,
      title: "Jungle Cruise",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      duration: 99,
      year: 2021,
      imgSrc: "/images/220px-Blade_Runner_(1982_poster).png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 6,
      season: 2,
      episode: 6,
      title: "Jungle Cruise",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      duration: 99,
      year: 2021,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 7,
      season: 2,
      episode: 6,
      title: "Joker",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      duration: 99,
      year: 2021,
      imgSrc: "/images/220px-Joker_(2019_film)_poster.jpg",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 8,
      season: 2,
      episode: 6,
      title: "Jungle Cruise",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      duration: 99,
      year: 2021,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 9,
      season: 2,
      episode: 6,
      title: "Jungle Cruise",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      duration: 99,
      year: 2021,
      imgSrc: "/images/220px-Blade_Runner_(1982_poster).png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      season: 2,
      episode: 6,
      title: "Jungle Cruise",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      duration: 99,
      year: 2021,
      imgSrc: "/images/220px-Blade_Runner_(1982_poster).png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 11,
      season: 2,
      episode: 6,
      title: "Joker",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      duration: 99,
      year: 2021,
      imgSrc: "/images/220px-Joker_(2019_film)_poster.jpg",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 12,
      season: 2,
      episode: 6,
      title: "Jungle Cruise",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      duration: 99,
      year: 2021,
      imgSrc: "/images/220px-Blade_Runner_(1982_poster).png",
      score: { imdb: 4.5, rt: 123 },
    },
  ];
  // showSkeletonForLatestSeries: false,

  const skeleton = useSelector(
    (state: RootState) => state.skeleton.showSkeletonForLatestMovies
  );

  const genres = [
    "Animations",
    "Animations",
    "Animations",
    "Animations",
    "Animations",
    "Animations",
    "Animations",
    "Animations",

    "Horror",
    "Biography",
    "Drama",
  ];

  return (
    <Div className="flex-center">
      <div className="container flex-center">
        <div className="container__header flex-center">
          {/* use Environment variables for production instead of absolute URLs */}
          <img src="/icons/Activity.svg" />
          <h4> Latest Movies</h4>
        </div>
        <MySwiper forSeries={false} loop={true} data={genres} cast={false} />
        <div className="divider" />
        <div className="card-holder flex-center">
          <ul className="flex-center">
            {!skeleton &&
              data.map((d) => (
                <li key={d.id}>
                  <Card movie={d} />
                </li>
              ))}
            {skeleton &&
              data.map((d) => (
                <li key={d.id}>
                  <Skeleton />
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
          >
            {!skeleton &&
              data.map((d) => (
                <SwiperSlide
                  key={d.id}
                  className="swiper-slide my-siwper flex-center"
                >
                  <Card movie={d} />
                </SwiperSlide>
              ))}
            {skeleton &&
              data.map((d) => (
                <SwiperSlide
                  key={d.id}
                  className="swiper-slide my-siwper flex-center"
                >
                  <Skeleton />
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
      padding-left: 10rem; //make 5rem
      width: 100vw; // remove
      display: flex;
      transform: translateX(-5rem);
      overflow: hidden;
      @media screen and (min-width: 1920px) {
        width: 1920px;
      }
    }
  }
  @media screen and (min-width: 2000px) {
    .container {
      width: 2000px;
    }
  }
`;
