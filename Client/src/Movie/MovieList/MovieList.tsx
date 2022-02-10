import React from 'react';
import "./MovieListS.scss";

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


interface Imovie {
  movie: IProps;
  setHandler?: React.Dispatch<React.SetStateAction<number | undefined>>;
  index?: number;
}

const MovieList: React.FunctionComponent<Imovie>= ({movie, index}: Imovie) =>{

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

//  console.log(movie, 'movie list');

  return (
       <div className='movie-main' style={{display: "flex" }}>
          <h3 className='movie-title'> {title} </h3>
          <img src={image} width='120rem' height='auto'/>
          <div className='movie-basic-info'>
            <div className="movie-rating">imDB rating: {imDbRating} </div>
            <div className='movie-rank'>imDB Rank: {rank} </div>
            <div className='movie-year'>Year Released: {year} </div>
            <div className='movie-crew'>Cast/Crew: {crew} </div>
          </div>

          {/* <button onClick={ ()=>{
            setSelectedMovieTrailer(id);
            setShowTrailer(!showTrailer)

          }}> Click for Trailer </button>

          {
            showTrailer && (
              <iframe src={`https://www.youtube.com/embed/${trailerUrl.videoId}`}> </iframe>
            )
          } */}
    </div>
  )

}

export default MovieList;
