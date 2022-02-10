import React, {useState, useEffect} from 'react';
import "./MovieListS.scss";
import MovieTrailers from '../MovieTrailers/MovieTrailers'


interface IProps {
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

interface Imovie {
  movie: IProps;
  index?: number;
}

const MovieList: React.FunctionComponent<Imovie>= ({movie, index}: Imovie) =>{
  const [displayTrailer, setDisplayTrailer] = useState<boolean>(false);


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
  } = movie

  return (
       <div className='movie-main'>
         <div className='movie-title-picture-container'>
            <h3 className='movie-title'> {title} </h3>
            <img src={image} width='120rem' height='auto'/>
         </div>

          <div className='movie-basic-info'>
            <div className="movie-rating">imDB rating: {imDbRating} </div>
            <div className='movie-rank'>imDB Rank: {rank} </div>
            <div className='movie-year'>Year Released: {year} </div>
            <div className='movie-crew'>Cast/Crew: {crew} </div>
          </div>
        <div>
          <button onClick={(e)=> {
            if(!displayTrailer){setDisplayTrailer(true)}
            else {setDisplayTrailer(false)}
          }}
          >Display Trailer</button>

          {
            displayTrailer && (
              <MovieTrailers id={id}/>
            )
          }
        </div>
    </div>
  )

}

export default MovieList;
