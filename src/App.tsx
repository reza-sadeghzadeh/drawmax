import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/common/Footer";
import { Header } from "./components/common/Header";
import NotFound from "./pages/404";
import DownloadSlug from "./pages/DownloadSlug";
import Home from "./pages/HomePage";
import LatestMoviesAndSeries from "./pages/LatestMoviesAndSeries";
import { Loading } from "./pages/Loading";
import Search from "./pages/Search";

function App() {
  const { isLoading } = useSelector((state: RootStateOrAny) => state.isLoading);

  const dispatch = useDispatch();

  return (
    <>
      {isLoading && <Loading />}
      <BrowserRouter>
        {!isLoading && (
          <>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/search" component={Search} />
              <Route exact path="/movie/:id">
                <DownloadSlug />
              </Route>
              <Route path="/latest-series" component={LatestMoviesAndSeries} />
              <Route path="/latest-movies" component={LatestMoviesAndSeries} />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
