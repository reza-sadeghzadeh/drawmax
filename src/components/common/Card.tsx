import React from "react";
import LazyLoad from "react-lazyload";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

interface Props {
  movie: {
    id: number;
    title: string;
    year: number;
    duration?: number;
    season: number;
    episode: number;
    description: string;
    imgSrc: string;
    score: { imdb: number; rt: number };
  };
}

export const Card: React.FC<Props> = ({ movie }) => {
  const history = useHistory();
  //instead of hardcoding, use movie prop
  return (
    <Div onClick={() => history.push(`/movie/${movie.id}`)}>
      <LazyLoad height={300} offset={100} once>
        <img src="images/movie1.png" alt="movie image" />
      </LazyLoad>
      <h5>Jungle Cruise</h5>
      <div className="bottom-title flex-center">
        <p>2021</p>
        <div className="score flex-center">
          <img src="icons/Rotten Tomatoes Icon.svg" alt="rotton tomato" />
          <span>145</span>
          <img src="icons/IMDB.svg" alt="rotton tomato" />
          <span>9.6</span>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  margin: 3rem 1rem;
  cursor: pointer;
  padding: 0;

  img {
    width: 176px;
    height: 284px;
    border-radius: 30px;
    object-fit: cover;
  }

  h5 {
    margin-top: 1.5 rem;
    margin-bottom: 1rem;
    font-family: my-font-bold;
    font-size: 1.5rem;
    transition: 0.2s ease all;
  }

  :hover {
    .bottom-title {
      opacity: 1;
    }
  }

  .bottom-title {
    opacity: 0.5;
    transition: 0.2s ease all;
    justify-content: space-between;

    p {
      font-family: my-font-bold;
      font-size: 1.4rem;
    }

    .score {
      img {
        width: 17px;
        height: 17px;
        object-fit: contain;
        margin-right: 0.5rem;
      }
      span {
        font-family: my-font-light;
        margin-right: 1.1rem;
      }
    }
  }

  @media screen and (min-width: 1100px) {
    margin: 3rem 2rem;

    h5 {
      font-size: 1.8rem;
    }
    img {
      width: 219px;
      height: 354px;
    }
  }
`;
