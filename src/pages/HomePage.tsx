import React, { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Activity from "../components/Activity";
import LandingPageHero from "../components/LandingPageHero";
import Latest from "../components/Latest";
import { Main } from "../components/Main";

interface Props {}

function HomePage({}: Props): ReactElement {
  const movie = {
    id: 6,
    title: "Lorem ipsum: 2021",
    season: 4,
    episode: 6,
    year: 2021,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
    duration: 135,
    imgSrc: "/images/hero.png",
    score: { imdb: 4.5, rt: 123 },
  };

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
  ];

  //@ts-ignore
  const isLoading = useSelector((state) => state.isLoading);

  const dispatch = useDispatch();

  return (
    <Div>
      <LandingPageHero />
      <Activity />
      <Latest data={data} foot={false} />
      <Main movie={movie} isHero={false} slug={false} />
      <Latest data={data} foot={true} />
    </Div>
  );
}

export default HomePage;

const Div = styled.main`
  overflow-x: hidden;
`;
