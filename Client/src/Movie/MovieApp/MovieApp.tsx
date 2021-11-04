import React, { useEffect, useState } from 'react';
import './MovieAppS.scss';
import api from './key';
import MovieList from '../MovieList/MovieList';

// interface IMovies {
//  movies?: [] | {};

// }

// interface Props {
//   movies: IMovies;
// }

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


const SandBox: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [test, setId] = useState<undefined| number>()

  useEffect( () => {
    async function getRequest() {
      const response = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${api}`);
      const json = await response.json();
      // console.log(json.items, 'json')
      setMovies(json.items);
    }
    getRequest();

  }, [])



  return (
    <div className='MovieApp' style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }} >
        {
          movies.map((item: object, index: any) => {
            return <MovieList movie={item} key={index} index={index} test={setId} />
          })
        }
      </div>
      {
        test && (
          <div>
            {movies[test].id}
          </div>
        )
      }
    </div>
  )


}

export default SandBox;