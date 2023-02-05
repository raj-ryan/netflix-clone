import React, { useState,useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const[movie,setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request =await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random()*request.data.results.length-1)]
            );
            return request;
        }
        fetchData();
    },[]);
    console.log(movie);
    function truncate(str, max) {
        return str?.length > max ? str.substr(0, max-1) + '…' : str;
      }
  return (
    <header 
        className="banner"
        style={{backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center",
    }}> {/*background image*/}
        <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
            {movie?.title||movie?.name||movie?.original_name}
        </h1>
        <div className="banner__button"> 
            <button className="banner__buttons">Play</button>
            <button className="banner__buttons">My List</button>
        </div>
        <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
        </h1>
        {/* div play my list*/}
        {/* description */}
        </div>
        <div className='banner--fadeBottom'/>
    </header>
  );
}

export default Banner;
