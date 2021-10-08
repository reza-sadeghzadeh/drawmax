import React, { ReactElement } from "react";
import styled from "styled-components";
import MySwiper from "./common/MySwiper";

interface Props {}

function Cast({}: Props): ReactElement {
  // The following could be a property of movie ocject
  // Id can belong to the original movie object or in this case as a best practice we can generate
  const cast = [
    { name: "John Doe", img: "" },
    { name: "John Doe", img: "" },
    { name: "John Doe", img: "" },
    { name: "John Doe", img: "" },
    { name: "John Doe", img: "" },
    { name: "John Doe", img: "" },
    { name: "John Doe", img: "" },
    { name: "John Doe", img: "" },
    { name: "John Doe", img: "" },
    { name: "John Doe", img: "" },
    { name: "John Doe", img: "" },
  ];
  return (
    <Div>
      <div className="container">
        <h4>Cast</h4>

        <MySwiper cast={true} data={cast} />
      </div>
    </Div>
  );
}

export default Cast;

const Div = styled.div`
  background-color: #171717;

  .container {
    padding: 50px 0;
    padding-left: 1rem;
    padding-bottom: 90px;

    .swiper-container {
      justify-content: flex-start;
      padding-left: 0;
    }

    h4 {
      margin-bottom: 2rem;
      font-family: my-font-bold;
    }

    @media screen and (min-width: 400px) {
      padding-left: 3.3rem;
    }
    @media screen and (min-width: 1100px) {
      padding-left: 8.7rem;
    }
  }
`;
