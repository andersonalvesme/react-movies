import {useParams} from "react-router-dom";

export default function MovieDetail() {
    const {id} = useParams();

    return (
        <h1>Movie {id}</h1>
    )
}