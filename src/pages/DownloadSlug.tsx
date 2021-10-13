import React, { ReactElement, useEffect } from "react";
import styled from "styled-components";
import Cast from "../components/Cast";
import Download from "../components/Download";
import { Main } from "../components/Main.js";

interface Props {
  movie?: {
    id: number;
    title: string;
    duration: number;
    season: number;
    description: string;
    episode: number;
    year: number;
    imgSrc: string;
    score: { imdb: number; rt: number };
  };
}

function DownloadSlug({ movie }: Props): ReactElement {
  //Query DB with the id
  //Or use state if user clicks on the card. In this case no need to call the DB

  // const params = useParams();

  let data;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  if (!movie) {
    data = {
      id: 10,
      title: "The Walking Dead: 2021",
      season: 4,
      episode: 6,
      year: 2021,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
      duration: 135,
      imgSrc: "/images/hero2.png",
      score: { imdb: 4.5, rt: 123 },
    };
  }

  return (
    <Div>
      <Main movie={data} isHero={true} slug={true} />
      <Cast />
      <Download />
    </Div>
  );
}

export default DownloadSlug;

const Div = styled.main`
  width: 100%;

  @media screen and (min-width: 1920px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

    .container {
      width: 1920px;
    }
  }
`;
