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

interface Imovie {
  movie: IProps;
  setHandler: React.Dispatch<React.SetStateAction<number | undefined>>;
  index?: number;
}

const MovieList: React.FunctionComponent<Imovie>= ({movie, setHandler, index}: Imovie) =>{

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
    <div className="title">
      {title}
      <button type="button" onClick={ () => setHandler(index) }>More Info</button>
    </div>
  )

}

export default MovieList;
