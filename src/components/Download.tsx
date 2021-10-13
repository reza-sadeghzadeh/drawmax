import React, { ReactElement } from "react";
import styled from "styled-components";
import DownloadsCommon from "./common/DownloadsCommon";
import MySwiper from "./common/MySwiper";

interface Props {}

export default function Download({}: Props): ReactElement {
  // Get this from store or parent component (It should be some part of movie object)
  const data = {
    movieQuality: ["480", "720", "1080"],
    sub: {
      lanqs: ["English", "Arabic", "French"],
      qualities: ["720", "1080"],
    },
  };

  return (
    <Div>
      <div className="container flex-center">
        <div className="head flex-center">
          <Subs text="English" />
          <Subs text="United State" />
        </div>
        <h4>Downlaod Now</h4>
        <DownloadsCommon data={data.movieQuality} />
        <div className="sub-buttons flex-center">
          <h4>Download subtitle</h4>
          <MySwiper forSeries={false} data={data.sub.lanqs} cast={false} />
        </div>
        <DownloadsCommon data={data.movieQuality} />
      </div>
    </Div>
  );
}

const Div = styled.section`
  .container {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 10px;

    .head {
      z-index: 20;
      align-self: center;
      transform: translateY(-53px) translateX(-2rem);
      height: 86px;
      background-color: #000;
      border-radius: 75px;
      justify-content: space-around;
      width: clamp(350px, 80%, 1200px);
    }

    .sub-buttons {
      overflow-x: hidden;
      width: 100%;
      flex-direction: column;
      align-items: flex-start;

      h4 {
        align-self: flex-start;
        margin-bottom: 3rem;
      }
    }

    @media screen and (min-width: 400px) {
      h4 {
        padding-left: 3.3rem;
        padding-right: 3.3rem;
      }

      //unlike UI
      ul {
        li {
          h4 {
            padding: 0;
          }
        }
      }

      .head {
        transform: translateY(-53px) translateX(-1.15rem);
      }
      h4 {
        font-family: my-font-bold;
      }
    }
    @media screen and (min-width: 800px) {
      padding-left: 6rem;
      padding-right: 6rem;
    }
    @media screen and (min-width: 1100px) {
      padding-left: 8.7rem;

      .sub-buttons {
        width: 100%;
        flex-direction: column;
        align-items: flex-end;

        h4 {
          align-self: flex-start;
          margin-bottom: 3rem;
        }
      }
    }
  }
`;

function Subs({ text }: { text: string }): ReactElement {
  return (
    <Small className="flex-center">
      <img src="/icons/vector.svg" alt="web icon" />
      <h5>{text}</h5>
    </Small>
  );
}

const Small = styled.div`
  img {
    margin-right: 1rem;
  }

  h5 {
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
    font-family: my-font-bold;
  }
`;
