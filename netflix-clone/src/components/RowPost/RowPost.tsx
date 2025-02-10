import { useState,useEffect,useRef } from "react";
import './rowpost.css';
import axios from '../../axios';
import { API_KEY,Image_Url } from "../../constants/constant";
import YouTube from 'react-youtube';

interface Movie {
  id: number;
  backdrop_path: string;
}

interface Video {
  key: string;
}

const RowPost = (props: { url: string; title: string; isSmall?: boolean }) =>{

  const [movies, setMovies] = useState<Movie[]>([]);
  const [Urlid, setUrlId] = useState<Video | null>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  

  useEffect(()=>{
    axios.get(props.url).then(response=>{
      setMovies(response.data.results)
    }).catch(err=>{
      alert('no network !');
      console.log(err);
    })
  },[props.url])
  const opts = {
    height: '390',
      width: '100%',
      playerVars: {
    
        autoplay: 1,
      }
  }
  const handleMoveClick=(id:number)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
         if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
         }
    })
   };
   const handleScroll = (e: React.WheelEvent) => {
    if (rowRef.current) {
      rowRef.current.scrollLeft += e.deltaY;
    }
  };
  return(
    <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters' ref={rowRef} onWheel={handleScroll}>
            {movies.map(obj=>{
              console.log(obj); 
               return <img onClick={()=>handleMoveClick(obj.id)} className={props.isSmall?'smallPoster':'poster'} alt='poster' src={`${Image_Url+obj.backdrop_path}`}/>
            })}
            </div>
           {Urlid&& <YouTube videoId={Urlid.key} opts={opts}/>}
        </div>
  )
}

export default RowPost;