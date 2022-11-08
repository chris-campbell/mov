import { Imports } from ".";

const Hero = ({
  movieId,
  title,
  poster_path,
  release_date,
  directors,
  overview,
  genres,
  vote,
  movie,
}) => {
  const { MovieInfo, Poster, HeroContainer } = Imports;

  const addToWatch = () => {
    const id = movieId;
    const movieData = {
      id,
      title,
      poster_path,
      overview,
      release_date,
    };
  };

  return (
    <HeroContainer>
      <HeroContainer.Wrapper>
        <Poster poster_path={poster_path} />
        <MovieInfo
          movieId={movieId}
          movie={movie}
          title={title}
          release_date={release_date}
          overview={overview}
          genres={genres}
          vote={vote}
          directors={directors}
          addToWatch={addToWatch}
        />
      </HeroContainer.Wrapper>
    </HeroContainer>
  );
};

export default Hero;
