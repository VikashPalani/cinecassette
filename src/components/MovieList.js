import MovieCard from "./MovieCard";

const MovieList = ({title,movies,series}) => {
    return (
    <div className="px-2">
        <h1 className="text-2xl font-medium py-4 text-white">{title}</h1>
        <div className="flex overflow-x-auto hide-scrollbar">
            <div className="flex mb-5">
                {movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
                {series?.map(tv => <MovieCard key={tv.id} posterPath={tv.poster_path} />)}
            </div>
        </div>
    </div>
    );
};

export default MovieList;
