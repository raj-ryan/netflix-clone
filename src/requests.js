const API_KEY="d6e6b0eae0a2ce84622c0bcbc2d9ae55"
const requests={
fetchTrendingNow:`/trending/all/week?api_key=${API_KEY}&language=en-US`,//just inserting API where it is needed
fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=en-213`,//at the end is the key code to get the respective request
fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_generes=28`,
fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&with_generes=10749`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_generes=27`,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_generes=35`,
fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_generes=99`,
}
export default requests;