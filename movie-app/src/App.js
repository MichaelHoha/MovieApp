import { HashRouter as Router, Route, Switch, } from 'react-router-dom';
import BestMovies from './components/BestMovies';
import AllMovies from './components/AllMovies';
import HomePage from './components/HomePage';
import TheMovie from './components/TheMovie';
import Header from './components/Header';
import React, { useState } from 'react';
import './App.css';

export default function App() {
 
  const [movie, setMovie] = useState([]);

  const sendMovies = e => setMovie(e)

  const addRate = index => {
    if (movie[index].rate.length < 5) {
      movie[index].rate.push(movie[index].rate.length + 1);

      setMovie([...movie]);

    }
    else {
      alert('The rate cant be bigger then 3!');

    }
  }

  const unlikeRate = (index) => {
    if (movie[index].rate.length > 1) { 
      movie[index].rate.pop(movie[index].rate);

      setMovie([...movie]);

    }
    else {
      alert('You killed the movie!')

    }
  }

  // const rand = () => {
  //     let temp = Math.floor(Math.random() * movie.name - movie.name.length )
  //     return (
  //       alert(temp)
  //     )
  //   }
  

  return (
    <div className="App"> 
      <Header headerTitle='BM' />
      
      <Router>
        <AllMovies sendMovies={sendMovies} />
        <BestMovies movie={movie} />
        <Switch>

          {/* <button onClick={() => {rand()}}>Rand</button> */}

          {movie.map((element, index) => {

            return (
              <Route exact path='/' component={() => {

                return <HomePage addRate={addRate} unlikeRate={unlikeRate} movie={movie} index={index} />
              }} />
            )
          })}

          {movie.map((element, index) => {

            return (
              <Route exact path={`/movie${element.name}`} component={() => {

                  return <TheMovie addRate={addRate} unlikeRate={unlikeRate} index={index}
                    poster={element.poster} name={element.name} rate={element.rate} info={element.info} />

                }} />
            )
          })}

        </Switch>
      </Router>
    </div>
  );
}
