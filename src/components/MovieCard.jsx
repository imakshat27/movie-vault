function MovieCard() {
    return (
        <div className = "movie-card">
            <div className = "movie-poster">
                <img src={movie.url} alt={movie.title} />
        </div>
    )
}