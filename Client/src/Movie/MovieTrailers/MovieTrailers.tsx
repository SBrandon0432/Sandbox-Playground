import React,{useState, useEffect} from "react";
import api from '../../key';

const useTrailer = (movieId: string | undefined | any) => {
  const [trailerUrl, setTrailerUrl] = useState<any>({});

  useEffect( ()=> {
    async function getRequestTrailer() {
      const response = await fetch(`https://imdb-api.com/en/API/YouTubeTrailer/${api}/${movieId}`);
      const json = await response.json();
      setTrailerUrl(json);
    }

      getRequestTrailer();


  },[movieId]);

  return trailerUrl;
}

interface IProps {
  id?: string;
}

const MovieTrailers: React.FC<IProps> = (props: any) => {
  const trailerUrl = useTrailer(props.id);

  return (
    <iframe src={`https://www.youtube.com/embed/${trailerUrl.videoId}`}> </iframe>
  )

}


export default MovieTrailers