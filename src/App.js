import './App.css';
import React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import AppBar from './components/AppBar/AppBar';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage/HomePage' /* webpackChunkName: "HomePage" */),);
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage' /* webpackChunkName: "MoviesPage" */),);
const NotFoundView = lazy(() => import('./components/NotFoundView' /* webpackChunkName: "NotFoundView" */),);
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),);

function App() {
  return (
    <div className="App">
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />          
        </Route>

        <Route>
          <NotFoundView />
        </Route>

      </Switch>
      </Suspense>
      
    </div>
  );
}

export default App;
