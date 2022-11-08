import { Imports } from ".";

const MovieInfo = ({
  title,
  release_date,
  overview,
  genres,
  vote,
  directors,
  movie,
  movieId,
}) => {
  const {
    Title,
    Overview,
    PopularityMeter,
    Genres,
    Directors,
    AddMovieButton,
  } = Imports;

  return (
    <div className="movie-details">
      <div className="details-wrapper">
        <Title title={title} release_date={release_date} />
        <Overview overview={overview} />
        <Genres genres={genres} />
        <PopularityMeter vote={vote} />
        <Directors directors={directors} />
        <AddMovieButton movie={movie} movieId={movieId} />
      </div>
    </div>
  );
};

export default MovieInfo;
