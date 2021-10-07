import React, { ReactElement, useEffect } from "react";
import Activity from "../components/Activity";
import { Main } from "../components/Main";
import Latest from "../components/Latest";
import Footer from "../components/common/Footer";

interface Props {
  setLoading: (a: boolean) => void;
}

function HomePage({ setLoading }: Props): ReactElement {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      console.log("heyyyy");

      return () => {
        clearTimeout(timeout);
      };
    }, 2000);
  }, []);

  return (
    <>
      <Main isHero={true} />
      <Activity />
      <Latest foot={false} />
      <Main isHero={false} />
      <Latest foot={true} />
      <Footer />
    </>
  );
}

export default HomePage;
