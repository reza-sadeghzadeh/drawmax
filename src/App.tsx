import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import { Header } from "./components/common/Header";
import NotFound from "./pages/404";
import DownloadSlug from "./pages/DownloadSlug";
import Home from "./pages/HomePage";
import { Loading } from "./pages/Loading";
import Search from "./pages/Search";

function App() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  // }, []);

  if (loading) return <Loading />;

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home setLoading={setLoading} />
          </Route>
          <Route exact path="/search" component={Search} />
          <Route exact path="/movie/:id">
            <DownloadSlug />
          </Route>
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
