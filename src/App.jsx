import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
      <div className="Movie-wrapper" key={i}>
        <div className="Movie-title">{movie.title}</div>
        <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`} alt={movie.poster_path}/>
        <div className="Movie-date">release : {movie.release_date}</div>
        <div className="Movie-rate">{movie.vote_average}</div>
      </div>
      );
    });
  };

  useEffect(() => {
    getMovieList()
      .then((result) => {
        setPopularMovies(result.results);
        // console.log(result.results)
      })
      .catch((result) => {
        console.log(result);
      });
  }, []);

  
  const search = async (q) => {
    // console.log({ hasil: q });
    if(q.length > 3){
      const query = await searchMovie(q);
      // console.log(query.results);
      setPopularMovies(query.results);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>MOVIE MANIA</h1>
        <input
          className="Movie-search"
          type="text"
          placeholder="Cari Film Kesayangan"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
