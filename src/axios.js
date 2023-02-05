import axios from "axios";
//base url to make requests to the movie database i.e. when we create.get it gets appended to the end of base url
const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
});
export default instance; 