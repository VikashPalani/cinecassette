import MovieCard from "./MovieCard";

const MovieList = ({title,movies}) => {
    return (
    <div>
        <div>
            <h1>{title}</h1>
            <div>
                {movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
            </div>
        </div>
    </div>
    );
};

export default MovieList;
