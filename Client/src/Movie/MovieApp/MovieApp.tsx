import React, { useEffect, useState } from 'react';
import './MovieAppS.scss';
import api from './key';
import MovieList from '../MovieList/MovieList';


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

const useTrailer = (movieId: number, loadTrailer: boolean) => {
  const [trailerUrl, setTrailerUrl] = useState<any>({});
  const [trailerLoaded, setTrailerLoaded] = useState<boolean>(false);

  useEffect( ()=> {
    async function getRequestTrailer() {
      const response = await fetch(`https://imdb-api.com/en/API/YouTubeTrailer/${api}/tt1375666`); // random movie
      const json = await response.json();
      setTrailerUrl(json);
      setTrailerLoaded(true);
    }
    if (loadTrailer && !trailerLoaded) {
      getRequestTrailer();
    }

  },[movieId, loadTrailer, trailerLoaded]);

  useEffect(() => {
    setTrailerLoaded(false);
  }, [movieId])

  return trailerUrl;

}


const SandBox: React.FC = () => {
  const movies = useMovies();
  const [selectedMovie, setSelectedMovie] = useState<number>(-1);
  const [showTrailer, setShowTrailer] = useState<boolean>(false);
  const trailerUrl = useTrailer(0, showTrailer);

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
//change
  return (

    <div className='MovieApp' style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }} >
        {
          movies.map((item: object, index: any) => {
            return < MovieList
            movie={item}
            key={index}
            index={index}
            setHandler = {setSelectedMovie} />
          })
        }
      </div>
      {
         selectedMovie >= 0 && (

          <div className='moreInfo' style={{display: "flex", flexDirection: "column" }}>

            <h3 className='title'> {title} </h3>
            <img src={image} width='120rem' height='auto'/>
            <div className="rating">imDB rating: {imDbRating} </div>
            <div className='rank'>imDB Rank: {rank} </div>
            <div className='year'>Year Released: {year} </div>
            <div className='crew'>Cast/Crew: {crew} </div>

            <button onClick={()=>setShowTrailer(!showTrailer)}> Click for Trailer </button>

            {
              showTrailer && (
                <iframe src={trailerUrl.videoUrl}> </iframe>
              )
            }

          </div>
        )
      }
    </div>
  )

}

export default SandBox;