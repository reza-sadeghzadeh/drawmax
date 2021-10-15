import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/reducers";
import { Card } from "./common/Card";
import MySwiper from "./common/MySwiper";
import { Skeleton } from "./common/Skeleton";

interface Props {
  foot: boolean;
  data: any[];
}

export default function Activity({ data, foot }: Props): ReactElement {
  const genres = ["Animations", "Action", "Horror", "Biography", "Drama"];

  const skeleton = useSelector(
    (state: RootState) => state.skeleton.showSkeletonForLatestSeries
  );

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

            <MySwiper loop={true} forSeries={true} data={genres} cast={false} />

            <div className="divider" />
          </>
        )}
        <div className="card-holder flex-center ">
          <ul className="flex-center ">
            {!skeleton &&
              //@ts-ignore
              data.map((d: object) => <li key={d.id}>{<Card movie={d} />}</li>)}
            {skeleton &&
              //@ts-ignore
              data.map((d: object) => <li key={d.id}>{<Skeleton />}</li>)}
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
    width: 100%;

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
