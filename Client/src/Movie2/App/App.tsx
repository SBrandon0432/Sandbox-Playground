import React, {useState, useEffect} from "react";
import api from './key';
import MovieList from "../MovieList/MovieList";
import './AppS.scss';




const useMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    async function getTo100Movies() {
      const req = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${api}`);
      const json = await req.json();
      setMovies(json.items);
    }
    getTo100Movies();
  },[])

  return movies;

}


const App = () => {
  const movies = useMovies();

  return (
    <div>
      Code 30 min challenge
    </div>
  )
}

export default App