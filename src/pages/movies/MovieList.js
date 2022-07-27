import theMovieDBAPI from "../../services/TheMovieDBAPI";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        loadPopularMovies(setMovies);
    }, []);

    return (
        <div className="container">
            <div className="page-title">Playing Now</div>
            <div className="row">
                {movies.map((movie) => {
                    console.log(movie);
                    return (
                        <div key={movie.id} className="column">
                            <div className="card">
                                <img src={process.env.REACT_APP_THEMOVIEDB_URL_IMAGE + movie.poster_path}
                                     alt={movie.title}/>

                                <div className="card-bottom">
                                    <h5>
                                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                                    </h5>
                                    <hr/>
                                    <h4 style={{
                                        display: "inline",
                                        color: movie.vote_average >= 7 ? "green" : "red"
                                    }}>{movie.vote_average}</h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function loadPopularMovies(setMovies) {
    theMovieDBAPI.get(`movie/popular`)
        .then((result) => {
            setMovies(result.data.results);
        })
        .catch((error) => {
            toast.error("There was a problem.");
            console.debug(error);
        });
}