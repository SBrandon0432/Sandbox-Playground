import React, { useEffect, useState } from 'react';
import './MovieAppS.scss';
import api from './key';
import MovieList from '../MovieList/MovieList';
import { isModifier } from 'typescript';

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
  const [selectedMovie, setSelectedMovie] = useState<number>(-1)


  useEffect( () => {
    async function getRequest() {
      const response = await fetch(`https://imdb-api.com/en/API/MostPopularMovies/${api}`);
      const json = await response.json();
      setMovies(json.items);
    }
    getRequest();

  }, [])

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
  } = selectedMovie>=0 ? movies[selectedMovie]: {
    crew:null,
    fullTitle:null,
    id:null,
    imDbRating:null,
    imDbRatingCount:null,
    image:'null',
    rank:null,
    title:null,
    year:null};


  return (

    <div className='MovieApp' style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }} >
        {
          movies.map((item: object, index: any) => {
            return < MovieList
            movie={item}
            key={index}
            index={index}
            setHandler={setSelectedMovie} />
          })
        }
      </div>
      {
         selectedMovie >= 0 && (

          <div className='moreInfo' style={{display: "flex", flexDirection: "column" }}>

            <h3 className='title'> {title} </h3>
            <img src={image} width='30%' height='auto'/>
            <div className="rating">imDB rating: {imDbRating} </div>
            <div className='rank'>imDB Rank: {rank} </div>
            <div className='year'>Year Released: {year} </div>
            <div className='crew'>Cast/Crew: {crew} </div>


          </div>
        )
      }
    </div>
  )


}

export default SandBox;