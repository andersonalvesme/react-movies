import theMovieDBAPI from "../../services/TheMovieDBAPI";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import FavoriteButton from "../../components/FavoriteButton";

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const loadPopularMovies = () => {
        theMovieDBAPI.get(`movie/popular`)
            .then((result) => {
                setMovies(result.data.results);
            })
            .catch((error) => {
                toast.error("There was a problem.");
                console.debug(error);
            });
    }

    useEffect(() => {
        loadPopularMovies();
    }, []);

    return (
        <div className="container">
            <div className="page-title">Popular Movies</div>
            <div className="row">
                {movies.map((movie) => {
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
                                    <FavoriteButton movie={movie}/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}