import { MovieCard } from "../components/MovieCard"
import { useState } from "react";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2020" },
        {id: 2, title: "Macerick", release_date: "2024"},
        {id: 3, title: "Ready", release_date: "2010"},
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert("Searching for: " + searchQuery);
        setSearchQuery("");
        
    };
    return (
        <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input classNmae="search-input" type="text" placeholder="Search for movies..." value = {searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button className="search-button" type="submit">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => 
                movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
                <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}

export default Home;