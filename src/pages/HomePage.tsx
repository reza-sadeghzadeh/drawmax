import React, { ReactElement } from "react";
import Activity from "../components/Activity";
import { Main } from "../components/Main";
import Latest from "../components/Latest";

interface Props {}

function HomePage({}: Props): ReactElement {
  return (
    <>
      <Main isHero={true} />
      <Activity />
      <Latest foot={false} />
      <Main isHero={false} />
      <Latest foot={true} />
    </>
  );
}

export default HomePage;
