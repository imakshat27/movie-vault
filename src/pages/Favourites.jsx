import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourite() {
    const { favourites } = useMovieContext();

    if (favourites.length > 0) {
        return <div className="favourites">
            <h2>Your Favourites</h2>
            <div className="favourites-grid">
                {favourites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    }
    return <div className = "favourites-empty">
        <h2>Your Favourites is Empty</h2>
        <p>Start adding some movies to your favourites!</p>

    </div>
}

export default Favourite;