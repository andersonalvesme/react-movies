import axios from "axios";

const theMovieDBAPI = axios.create({
    baseURL: process.env.REACT_APP_THEMOVIEDB_URL,
    params: {
        'api_key': process.env.REACT_APP_THEMOVIEDB_KEY
    }
});

export default theMovieDBAPI;