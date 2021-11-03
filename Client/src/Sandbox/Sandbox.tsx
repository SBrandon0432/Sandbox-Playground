import React, { useEffect, useState } from 'react';
import './SandBoxS.scss';
import api from './key';

export default function SandBox () {
  const [movies, setMovies] = useState([]);

  useEffect( () => {
    async function getRequest() {
      const response = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${api}`);
      const json = await response.json();
      console.log(json, 'json')
      setMovies(json.items);

    }
    getRequest();

  }, [])
   console.log(movies)
  return (
    <div className = 'SandBox'>
      test
    </div>
  )


}