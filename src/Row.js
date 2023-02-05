import React,{useState, useEffect} from 'react';
import axios from './axios';
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url="https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }){
    const[movies,setMovies]=useState([]);
    const[trailerUrl,setTrailerUrl]=useState("");
    //as soon as the rows load we will feed the information 
    useEffect(()=>{
        //if [] is blank, we mean run once when page loads and dont run again
        //dependent on [] i.e. every time variable in [] changes the page isfed with information again
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            //append the url like below
            //"https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=en-213"
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const opts={
        height: "390",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };
    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl('');
        }else {
            movieTrailer(movie?.title|| movie?.name ||movie.original_name|| "")
            .then((url)=>{
                //to get just the last part of youtube after v=
                const urlParams=new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error)=>console.log(error));
        }
    };
    // console.table(movies);
//when we pull in a variable from outside of the block we HAVE TO us in [] as it is a dependent 
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/*several row posters*/}
                {movies.map(movie=>(
                    <img 
                    key={movie.id} //optimization to give unique picture to give it an identity so that it renders what needs to be and not the entire row
                    onClick={()=>handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                    src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} 
                    alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}
export default Row;