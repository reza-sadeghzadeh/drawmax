import React, { ReactElement, useEffect } from "react";
import Activity from "../components/Activity";
import { Main } from "../components/Main.js";
import Latest from "../components/Latest";
import Footer from "../components/common/Footer";

interface Props {
  setLoading: (a: boolean) => void;
}

function HomePage({ setLoading }: Props): ReactElement {
  const movie = {
    id: 6,
    title: "Lorem ipsum: 2021",
    season: 4,
    episode: 6,
    year: 2021,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusantium bcaecati accusantium accusamus odio molestiae porro dolorem beatae sapiente, commodi, non totam illo ipsum dolor nostrum sit quos aperiam voluptate  ",
    duration: 135,
    imgSrc: "/images/hero.png",
    // imgSrc: "/images/movie1.png",
    score: { imdb: 4.5, rt: 123 },
  };

  useEffect(() => {
    // setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Main movie={movie} isHero={true} slug={false} />
      <Activity />
      <Latest foot={false} />
      <Main movie={movie} isHero={false} slug={false} />
      <Latest foot={true} />
    </>
  );
}

export default HomePage;
