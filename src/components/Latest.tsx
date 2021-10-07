import React, { ReactElement } from "react";
import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./common/Card";
import MySwiper from "./common/MySwiper";

interface Props {
  foot: boolean;
}

export default function Activity({ foot }: Props): ReactElement {
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
  ];

  return (
    <Inherit className="flex-center">
      <div className="container flex-center">
        {!foot && (
          <>
            <div className="container__header flex-center">
              {/* use Environment variables for production instead of absolute URLs */}
              <img src="/icons/Activity.svg" />
              <h4> Latest Series </h4>
            </div>
            <div className="btn-slide-container">
              <MySwiper />
            </div>
            <div className="divider" />
          </>
        )}
        <div className="card-holder flex-center">
          <ul className="flex-center">
            {data.map((d) => (
              <li key={d.id}>
                <Card movie={d} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Inherit>
  );
}

export const Inherit = styled.section`
  .container {
    margin-top: 20px;
    overflow-x: hidden;
    padding-bottom: 5rem;
    flex-direction: column;
    align-items: flex-start;

    &__header {
      margin-bottom: 3.5rem;
      margin-left: 2rem;

      img {
        margin-right: 20px;
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
      padding: 0;
      margin: 0;
      flex-wrap: wrap;
    }

    @media screen and (min-width: 380px) {
      &__header {
        padding-left: 3.3rem;
      }
    }

    @media screen and (min-width: 1100px) {
      .btn-slide-container {
        width: 100%;
        display: flex;
        justify-content: center;
      }

      &__header {
        padding-left: 8.7rem;
      }

      .divider {
        transform: translateY(-80px) translateX(-100px);
      }
      .btn-holder {
        transform: translateY(25px);
      }
    }

    @media screen and (min-width: 1300px) {
      .card-holder {
        width: 100%;

        ul {
          width: 1300px;
        }
      }
    }
  }

  @media screen and (min-width: 2000px) {
    .container {
      width: 2000px;
    }
  }
`;
