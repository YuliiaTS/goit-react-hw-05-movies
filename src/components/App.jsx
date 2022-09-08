import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
// import Layout from './Layout/Layout';
// import Home from '../pages/Home';
// import {Movies} from '../pages/Movies';
// import {MovieDetails} from '../pages/MovieDetails';
// import {Cast} from './Cast/Cast';
// import {Reviews} from './Reviews/Reviews';

const Layout = lazy(() => import('./Layout/Layout.jsx' /* webpackChunkName: "Layout" */));
const Home = lazy(() => import('../pages/Home.jsx' /* webpackChunkName: "Home" */));
const Movies = lazy(() => import('../pages/Movies.jsx' /* webpackChunkName: "Movies" */));
const MovieDetails = lazy(() => import('../pages/MovieDetails' /* webpackChunkName: "Details" */));
const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() => import('./Reviews/Reviews.js' /* webpackChunkName: "Reviews" */));

export const App = () => {
  return (
    <>
        <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
        </Suspense>
    </>
  );
};