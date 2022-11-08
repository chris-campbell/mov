import { Imports } from ".";

const MovieDetails = ({ movie, team }) => {
  const { Hero, useState, useEffect, MovieCast } = Imports;

  const [cast, setCast] = useState([]);
  const [directors, setDirectors] = useState([]);

  const {
    id,
    title,
    poster_path,
    backdrop_path,
    overview,
    genres,
    vote_average,
    release_date,
  } = movie;

  useEffect(() => {
    const directors = team.crew.filter((member) => member.job === "Director");

    setCast(team.cast);
    setDirectors(directors);
  }, [team.cast, team.crew]);

  return (
    <div style={{ padding: "1rem" }}>
      <Hero
        movieId={id}
        title={title}
        poster_path={poster_path}
        backdrop_path={backdrop_path}
        release_date={release_date}
        overview={overview}
        genres={genres}
        directors={directors}
        vote={vote_average}
        movie={movie}
      />

      <MovieCast cast={cast} />
    </div>
  );
};

export default MovieDetails;
