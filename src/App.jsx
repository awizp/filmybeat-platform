import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";

import { Navbar, Footer, MovieList, SearchList, MovieDetails, PageNotFound } from "./components";
import RootLayout from "./layout/RootLayout";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<MovieList title={"Now Playing"} apiPath="movie/now_playing" />} />

          <Route path="movies">
            <Route path="popular" element={<MovieList title={"Popular Movies"} apiPath="movie/popular" />} />
            <Route path="top" element={<MovieList title={"Top Rated Movies"} apiPath="movie/top_rated" />} />
            <Route path="upcoming" element={<MovieList title={"Upcoming Movies"} apiPath="movie/upcoming" />} />
          </Route>

          <Route path="search" element={<SearchList title={"Search results for "} />} />
          <Route path="movie/:id" element={<MovieDetails />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </>
    )
  );

  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;