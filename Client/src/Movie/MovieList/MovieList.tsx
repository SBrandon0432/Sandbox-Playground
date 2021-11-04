import React from 'react';

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
  test: React.Dispatch<React.SetStateAction<number | undefined>>;
  index?: number;
}

const MovieList: React.FunctionComponent<Imovie>= ({movie, test, index}: Imovie) =>{

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

  console.log(movie, 'movie list');

  return (
    <div onClick={ () => test(index) } >
      {title}
    </div>
  )

}

export default MovieList;
