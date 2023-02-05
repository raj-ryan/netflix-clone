import React from 'react'
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';
import Nav from  './Nav';
function App() {
  return (
    <div className="app">
     <Nav />
     <Banner /> 
      <Row title="Netflix Originals" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow //isLargeRow={true} only one prop
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrendingNow}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
