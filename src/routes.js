import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/Header";
import MovieList from "./pages/movies/MovieList";
import MovieDetail from "./pages/movies/MovieDetail";
import FavoriteList from "./pages/favorites/FavoriteList";

export default function routes() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/movies" element={<MovieList/>}/>
                <Route path="/movies/:id" element={<MovieDetail/>}/>
                <Route path="/favorites" element={<FavoriteList/>}/>
            </Routes>
        </BrowserRouter>
    )
}