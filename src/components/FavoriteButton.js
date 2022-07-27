import {useEffect, useState} from "react";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";

const keyTheMovieDBFavorites = "@TheMovieDBFavorites";

export default function FavoriteButton({movie}) {
    const [favorites, setFavorites] = useState([]);
    const loadFavorites = () => {
        setFavorites(JSON.parse(localStorage.getItem(keyTheMovieDBFavorites)) || []);
    }
    const isFavorite = (movie) => {
        return favorites.some((favorite) => favorite.id === movie.id)
    }
    const toggleFavorite = (movie) => {
        let newFavorites;

        if (isFavorite(movie)) {
            newFavorites = favorites.filter((favorite) => {
                return favorite.id !== movie.id;
            })
        } else {
            newFavorites = [...favorites, movie];
        }

        setFavorites(newFavorites);
        localStorage.setItem(keyTheMovieDBFavorites, JSON.stringify(newFavorites));
    }

    useEffect(() => {
        loadFavorites();
    }, []);

    return (
        <>
            {isFavorite(movie)
                ? <MdFavorite style={{float: "right", fontSize: "22px", color: "red"}}
                              onClick={() => {
                                  toggleFavorite(movie)
                              }}/>
                : <MdFavoriteBorder style={{float: "right", fontSize: "22px"}}
                                    onClick={() => {
                                        toggleFavorite(movie)
                                    }}/>
            }
        </>
    )
}