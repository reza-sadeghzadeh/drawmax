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
  //@ts-ignore
  const isLoading = useSelector((state) => state.isLoading);

  const dispatch = useDispatch();

  return (
    <Div>
      <LandingPageHero />
      {/* <button
        onClick={() =>
          dispatch({ type: IS_LOADING, payload: { isLoading: true } })
        }
      >
        Clickiy Click
      </button> */}

      <Activity />
      <Latest foot={false} />
      <Main movie={movie} isHero={false} slug={false} />
      <Latest foot={true} />
    </Div>
  );
}

export default HomePage;

const Div = styled.main`
  overflow-x: hidden;
`;
