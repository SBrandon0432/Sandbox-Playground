import React, { useEffect, useState } from 'react';
import './MovieAppS.scss';
import MovieList from '../MovieList/MovieList';
import api from '../../key';

interface IMovie {
  crew?: string;
  fullTitle?: string;
  id?: string;
  imDbRating?: string;
  imDbRatingCount?: string;
  image?: string;
  rank?: string;
  rankUpDown?: string;
  title?: string;
  year?: string;
}

const useMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect( () => {

    async function getRequestTo100Movies() {
      const response = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${api}`);
      const json = await response.json();
      console.log(json.items)
      setMovies(json.items);
    }
    getRequestTo100Movies();

  }, [])

  return movies;
}

//usetrailer was here


const SandBox: React.FC = () => {
  const movies = useMovies();
  const [selectedMovie, setSelectedMovie] = useState<number>(-1);
  const [showTrailer, setShowTrailer] = useState<boolean>(false);
  const [selectedMovieTrailer, setSelectedMovieTrailer] = useState<string | undefined>('')
  // const trailerUrl = useTrailer(selectedMovieTrailer, showTrailer);



  const {
    crew,
    fullTitle,
    id,
    imDbRating,
    imDbRatingCount,
    image,
    rank,
    title,
    year
  } = selectedMovie>=0 ? movies[selectedMovie]: {} as IMovie;

  return (

    <div className='MovieApp' style={{ display: "flex" }}>
      <div style={{ flexDirection: "column" }} >
        {
          movies.map((item: object, index: any) => {
            return < MovieList
            movie={item}
            key={index}
            index={index} />
          })
        }
      </div>
    </div>
  )

}

export default SandBox;


