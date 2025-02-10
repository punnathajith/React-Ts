import { useState, useEffect, useRef } from "react";
import './rowpost.css';
import axios from '../../axios';
import { API_KEY, Image_Url } from '../../constants/constant';
import YouTube from 'react-youtube';

interface Movie {
  id: number;
  original_title:string;
  backdrop_path: string;
}

interface Video {
  key: string;
}

const RowPost = (props: { url: string; title: string; isSmall?: boolean }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [Urlid, setUrlId] = useState<Video | null>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios.get(props.url).then(response => {
      setMovies(response.data.results);
      console.log(response.data.results);
    }).catch(err => {
      alert('no network !');
      console.log(err);
    });
  }, [props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMoveClick = (id: number) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0]);
      }
    });
  };

  const handleWheel = (event: React.WheelEvent) => {
    event.preventDefault();
    if (rowRef.current) {
      rowRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <div className='title-cards'>
      <h1>{props.title}</h1>
      <div className='card-list' ref={rowRef} onWheel={handleWheel}>
        {movies.map((movie) => (
          
          <div
            key={movie.id}
            className='card'
            onClick={() => handleMoveClick(movie.id)}
          >
           
            <img
              src={`${Image_Url + movie.backdrop_path}`}
              alt='poster'
              className={props.isSmall ? 'smallPoster' : 'poster'}
            />
            <p>{movie.original_title}</p>
          </div>
        ))}
      </div>
      {Urlid && <YouTube videoId={Urlid.key} opts={opts} />}
    </div>
  );
};

export default RowPost;