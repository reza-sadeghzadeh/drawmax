import React, { ReactElement } from "react";
import Activity from "../components/Activity";
import { Main } from "../components/Main";
import MySwiper from "../components/common/MySwiper";

interface Props {}

function HomePage({}: Props): ReactElement {
  return (
    <>
      <Main />
      <Activity />
    </>
  );
}

export default HomePage;
