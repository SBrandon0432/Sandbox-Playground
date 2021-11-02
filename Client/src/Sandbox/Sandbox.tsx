import React, { useEffect, useState } from 'react';
import './SandBoxS.scss';

export default function SandBox () {
  const [movies, setMovies] = useState([]);

  useEffect( () => {
    async function getRequest() {
      const response = await fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr');
      const json = await response.json();
      console.log(json, 'json')
      setMovies(json);

    }
    getRequest();

  }, [])
  // console.log(movies)
  return (
    <div className = 'SandBox'>
      test
    </div>
  )


}