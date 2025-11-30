import MovieCard from "../components/MovieCard"
import { useState,useEffect } from "react";
import "../css/Home.css";
import {searchMovies, getPopularMovies} from "../API/API.JS";


function Home(){
    
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);   
    const [loading, setLoading] = useState(false);  
    
    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to fetch popular movies.");
            }
            finally {
                setLoading(false);
            }
        };

        fetchPopularMovies();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if(searchQuery.trim() === "") return;

        const fetchSearchResults = async () => {
            setLoading(true);
            try {
                const results = await searchMovies(searchQuery);
                setMovies(results);
                setError(null);
            } catch (err) {
                console.log(err);
                setError("Failed to search movies.");
            }
            finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    };

    return (
        <>
        <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input className="search-input" type="text" placeholder="Search for movies..." value = {searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button className="search-button" type="submit">Search</button>
            </form>
            {loading? (<div>Loading movies...</div>):(<div className="movies-grid">
                {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>)}
            {error && <div className="error-message">{error}</div>}
        </div>
        
        </>
    )
}

export default Home;