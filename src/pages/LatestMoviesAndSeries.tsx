import _ from "lodash";
import { parse } from "querystring";
import React, { ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import Latest from "../components/Latest";
import { Main } from "../components/Main";

interface Props {}

function LatestMoviesAndSeries({}: Props): ReactElement {
  const movie = {
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
    score: { imdb: 4.5, rt: 123 },
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  let data = [
    {
      id: 1,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      imgSrc: "/images/220px-Joker_(2019_film)_poster.jpg",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 2,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/Interstellar_film_poster.jpg",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 3,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 4,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/220px-Blade_Runner_(1982_poster).png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 5,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/220px-Joker_(2019_film)_poster.jpg",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 6,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/220px-Blade_Runner_(1982_poster).png",
      score: { imdb: 4.5, rt: 123 },
    },

    {
      id: 8,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/220px-Blade_Runner_(1982_poster).png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 7,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/Interstellar_film_poster.jpg",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 9,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/220px-Joker_(2019_film)_poster.jpg",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
    {
      id: 10,
      title: "Jungle Cruise",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",

      duration: 135,
      imgSrc: "/images/movie1.png",
      score: { imdb: 4.5, rt: 123 },
    },
  ];

  const [dataTimes, setDataTimes] = useState(1);

  const location = useLocation();

  const genreQuery = parse(location.search)["?genre"];
  const movieQuery = location.pathname.split("-")[1];

  return (
    <Div className="flex-center">
      <Main isHero={true} slug={true} movie={movie} />

      <div className="section-header-container flex-center">
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 0C34.1255 0 44 9.86975 44 22.0127C44 34.1302 34.1255 44 22 44C9.87452 44 0 34.1302 0 22.0127C0 9.86975 9.87452 0 22 0ZM19.4942 13.2658C19.027 13.2658 18.5811 13.3719 18.1564 13.5842C17.6255 13.8813 17.2008 14.3483 16.9672 14.9001C16.8185 15.2822 16.5849 16.4284 16.5849 16.4496C16.3514 17.7019 16.2239 19.7395 16.2239 21.9894C16.2239 24.1353 16.3514 26.0859 16.5425 27.3594C16.5637 27.3806 16.7973 28.8027 17.0521 29.2909C17.5193 30.1823 18.4324 30.7342 19.4093 30.7342H19.4942C20.1313 30.713 21.4691 30.1611 21.4691 30.1399C23.7201 29.206 28.1583 26.2981 29.9421 24.3666L30.0695 24.2393C30.3031 24.0058 30.6004 23.645 30.6641 23.5601C31.0039 23.1143 31.1737 22.5625 31.1737 22.0127C31.1737 21.3951 30.9826 20.822 30.6216 20.355C30.5367 20.2701 30.2181 19.9093 29.9208 19.6122C28.1795 17.7443 23.6351 14.6879 21.2568 13.754C20.8958 13.6075 19.9826 13.287 19.4942 13.2658Z"
            fill="white"
          />
        </svg>
        <h4 id="finder">
          {genreQuery[0].toUpperCase() + genreQuery.slice(1)}
          <span> {movieQuery[0].toUpperCase() + movieQuery.slice(1)} </span>
        </h4>
      </div>
      {_.range(0, dataTimes).map((n) => (
        //@ts-ignore
        <div key={n.id} className="load-container">
          <Latest foot={true} data={data} />
        </div>
      ))}
      <button
        //@ts-ignore
        onClick={() => setDataTimes((dataTimes) => dataTimes + 1)}
      >
        Load more...
      </button>
    </Div>
  );
}

export default LatestMoviesAndSeries;

const Div = styled.div`
  flex-direction: column;

  .load-container {
    .container {
      padding: 0;
      margin: 0;
    }
  }
  button {
    margin-top: 4rem;
  }
  .section-header-container {
    align-self: flex-start;
    justify-content: flex-start;
    padding-bottom: 3.5rem;
    padding-left: 1.5rem;
    padding-top: 3.5rem;
    margin-bottom: 3rem;
    background-color: #171717;
    width: 100%;

    svg {
      margin-right: 3rem;
    }

    h4#finder {
      transform: translateY(1rem);
      font-size: 2rem;
      font-family: my-font-bold;
      position: relative;
      color: #f50505;

      ::after {
        content: "finding";
        position: absolute;
        font-size: 1.6rem;
        top: -2rem;
        font-family: my-font-thin;
        left: 0;
        color: white;
      }

      span {
        font-size: 2rem;
        color: white;
      }
    }
  }
  @media screen and (min-width: 380px) {
    .section-header-container {
      padding-left: 3.3rem;
    }
  }
  @media screen and (min-width: 1100px) {
    .section-header-container {
      padding-left: 8.7rem;
    }
  }
`;
