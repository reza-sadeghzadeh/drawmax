import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/common/Header";
import Home from "./pages/HomePage";
import { Loading } from "./pages/Loading";

function App() {
  const [loading, setLoading] = useState(false);

  console.log(loading);

  useEffect(() => {
    setLoading(true);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home setLoading={setLoading} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
