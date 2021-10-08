import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/swiper-bundle.css";

interface SwiperProp {
  data: any[];
  cast: boolean;
}

const MySwiper: React.FC<SwiperProp> = ({ data, cast }) => {
  const btnHolder = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cast)
      btnHolder.current?.querySelector("button")!.classList.add("active");
  }, []);

  const handlebuttonActivation = (e: any) => {
    // logic like fetching and... here.

    btnHolder.current
      ?.querySelectorAll("button")
      .forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
  };

  return (
    <div ref={btnHolder}>
      <Sswiper
        breakpoints={{
          150: {
            width: 200,
            slidesPerView: 1,
          },
          300: {
            width: 300,
            slidesPerView: 2,
          },
          //   900: {
          //     width: 900,
          //     slidesPerView: 6,
          //     spaceBetween: 160,
          //   },
        }}
        className="flex-center"
        spaceBetween={90}
        slidesPerView={2}
      >
        {!cast &&
          data.map((g) => (
            <SwiperSlide className="swiper-slide my-siwper flex-center">
              <div className="btn-holder flex-center">
                <button onClick={(e) => handlebuttonActivation(e)}>{g}</button>
              </div>
            </SwiperSlide>
          ))}
        {cast &&
          data.map((g) => (
            <SwiperSlide className="swiper-slide my-cast-siwper flex-center">
              <div className="cast-holder flex-center">
                <li></li>
              </div>
            </SwiperSlide>
          ))}
      </Sswiper>
    </div>
  );
};

// Hook

const Sswiper = styled(Swiper)`
  width: 100%;
  z-index: 5;
  justify-content: flex-start;
  padding-bottom: 3rem;
  padding-left: 50px;

  .my-siwper {
    padding: 0 5rem;
  }
  .btn-holder {
    margin: 0 3rem;
  }

  button {
    margin: 0;
    &.active {
    }
  }

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

  @media screen and (min-width: 600px) {
    padding-left: 12rem;
  }
`;

export default MySwiper;
