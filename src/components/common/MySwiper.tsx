import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/swiper-bundle.css";

const MySwiper = () => {
  const btnHolder = useRef<HTMLDivElement>(null);

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
        <SwiperSlide className="swiper-slide my-siwper flex-center">
          <div className="btn-holder flex-center">
            <button
              onClick={(e) => handlebuttonActivation(e)}
              className="active"
            >
              Animations
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide my-siwper flex-center">
          <div className="btn-holder flex-center">
            <button onClick={(e) => handlebuttonActivation(e)}>Action</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide my-siwper flex-center">
          <div className="btn-holder flex-center">
            <button onClick={(e) => handlebuttonActivation(e)}>Horror</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide my-siwper flex-center">
          <div className="btn-holder flex-center">
            <button onClick={(e) => handlebuttonActivation(e)}>
              Biography
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide my-siwper flex-center">
          <div className="btn-holder flex-center">
            <button onClick={(e) => handlebuttonActivation(e)}>Drama</button>
          </div>
        </SwiperSlide>
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
  padding-left: 35px;

  @media screen and (min-width: 600px) {
    padding-left: 60px;
  }

  .my-siwper {
    padding: 0 2rem;
  }

  .btn-holder {
    margin: 0 3rem;
  }

  button {
    margin: 0;

    &.active {
    }
  }
`;

export default MySwiper;
