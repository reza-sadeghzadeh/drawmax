import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import {
  SHOW_SKELETON_FOR_LATEST_MOVIES,
  SHOW_SKELETON_FOR_LATEST_SERIES,
} from "../../store/actions/showSckeleton";
SwiperCore.use([Navigation]);

interface SwiperProp {
  data: any[];
  cast: boolean;
  loop: boolean;
  forSeries: boolean;
}

const MySwiper: React.FC<SwiperProp> = ({ forSeries, data, cast, loop }) => {
  const btnHolder = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!cast)
      btnHolder.current?.querySelector("button")!.classList.add("active");
  }, []);

  const handlebuttonActivation = (e: any) => {
    // logic like fetching and... here.

    if (forSeries)
      dispatch({
        type: SHOW_SKELETON_FOR_LATEST_SERIES,
        payload: { showSkeletonForLatestSeries: true },
      });
    else
      dispatch({
        type: SHOW_SKELETON_FOR_LATEST_MOVIES,
        payload: { showSkeletonForLatestMovies: true },
      });

    setTimeout(() => {
      if (forSeries)
        dispatch({
          type: SHOW_SKELETON_FOR_LATEST_SERIES,
          payload: { showSkeletonForLatestSeries: false },
        });
      else
        dispatch({
          type: SHOW_SKELETON_FOR_LATEST_MOVIES,
          payload: { showSkeletonForLatestMovies: false },
        });
    }, 1000);

    btnHolder.current
      ?.querySelectorAll("button")
      .forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
  };

  return (
    <Div className={cast ? " " : "flex-center"} ref={btnHolder}>
      <ReactTooltip effect={"solid"} />
      <Sswiper
        breakpoints={{
          300: {
            width: 300,
            slidesPerView: 1.5,
          },
          // 1500: {
          //   width: 1500,
          //   slidesPerView: 7,
          // },
        }}
        className="flex-center"
        spaceBetween={90}
        slidesPerView={2}
      >
        {!cast &&
          data.map((g) => (
            <SwiperSlide className="swiper-slide my-siwper flex-center">
              <div key={g.id} className="btn-holder flex-center">
                <button onClick={(e) => handlebuttonActivation(e)}>{g}</button>
              </div>
            </SwiperSlide>
          ))}
        {cast &&
          data.map((g) => (
            <SwiperSlide className="swiper-slide my-cast-siwper flex-center">
              <div className="cast-holder flex-center">
                <li key={g.id}></li>
              </div>
            </SwiperSlide>
          ))}
      </Sswiper>
      {!cast && (
        <svg
          id="latest-svg"
          data-tip={`show all the ${
            forSeries ? "series" : "movies"
          } for this genre`}
          onClick={() =>
            history.push(
              `/latest-${
                forSeries ? "series" : "movies"
              }?genre=${btnHolder.current
                ?.querySelector(".active")
                ?.innerHTML.toLowerCase()}`
            )
          }
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M20 2.01477e-06C31.03 1.02211e-06 40 8.972 40 20C40 31.028 31.03 40 20 40C8.972 40 -1.90482e-07 31.028 -4.24614e-07 20C-6.58747e-07 8.972 8.972 3.00725e-06 20 2.01477e-06Z"
            fill="white"
          />
          <path
            d="M15.2161 22.0434C16.6966 22.0434 17.8831 23.2414 17.8831 24.7325V28.312C17.8831 29.7925 16.6966 31 15.2161 31H11.667C10.197 31 9 29.7925 9 28.312V24.7325C9 23.2414 10.197 22.0434 11.667 22.0434H15.2161ZM27.3334 22.0434C28.8034 22.0434 30.0004 23.2414 30.0004 24.7325V28.312C30.0004 29.7925 28.8034 31 27.3334 31H23.7843C22.3038 31 21.1173 29.7925 21.1173 28.312V24.7325C21.1173 23.2414 22.3038 22.0434 23.7843 22.0434H27.3334ZM15.2161 10C16.6966 10 17.8831 11.2075 17.8831 12.6891V16.2686C17.8831 17.7596 16.6966 18.9566 15.2161 18.9566H11.667C10.197 18.9566 9 17.7596 9 16.2686V12.6891C9 11.2075 10.197 10 11.667 10H15.2161ZM27.3334 10C28.8034 10 30.0004 11.2075 30.0004 12.6891V16.2686C30.0004 17.7596 28.8034 18.9566 27.3334 18.9566H23.7843C22.3038 18.9566 21.1173 17.7596 21.1173 16.2686V12.6891C21.1173 11.2075 22.3038 10 23.7843 10H27.3334Z"
            fill="white"
          />
        </svg>
      )}
    </Div>
  );
};

const Div = styled.div`
  position: relative;
  width: 100%;
  justify-content: flex-end;

  svg {
    cursor: pointer;
    transform: translateY(-93px);
    position: absolute;
    right: 15px;
    z-index: 10;
    background-color: #141010;
  }

  @media screen and (min-width: 400px) {
    svg {
      right: 30px;
    }
  }
  @media screen and (min-width: 1100px) {
    svg {
      right: 70px;
    }
  }
`;

const Sswiper = styled(Swiper)`
  width: 100%;
  z-index: 5;
  justify-content: flex-start;
  padding-left: 5rem;
  padding-bottom: 3rem;

  .my-cast-siwper {
    margin-right: 2rem !important;
    padding: 0 !important;
    width: 61px !important;
    height: 61px !important;

    .cast-holder {
      margin-top: 2rem;
      padding-left: 0;

      li {
        width: 61px;
        height: 61px;
        border-radius: 50%;
        background-color: #252525;
      }
    }
  }

  @media screen and (min-width: 1100px) {
    padding-left: 100px;
  }
`;

export default MySwiper;
