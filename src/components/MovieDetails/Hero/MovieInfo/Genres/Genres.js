import { Imports } from ".";

const Genres = ({ genres }) => {
  const { _, GenresContainer } = Imports;
  return (
    <GenresContainer className="genres">
      {genres.map((genre) => (
        <span key={_.uniqueId()} className="genre">
          {genre.name}
        </span>
      ))}
    </GenresContainer>
  );
};

export default Genres;
