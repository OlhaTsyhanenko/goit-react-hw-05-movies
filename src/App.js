import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import AppBar from './components/AppBar/AppBar';
import HomePage from './components/HomePage/HomePage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import NotFoundView from './components/NotFoundView';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage'


function App() {
  return (
    <div className="App">
      <AppBar />
      
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
      
    </div>
  );
}

export default App;
