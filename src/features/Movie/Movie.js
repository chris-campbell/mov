import PosterImage from "./styles";
import { Imports } from ".";

const Movie = ({ id, title, poster_path, overview, release_date }) => {
  const { Image, useDoubleClick, useRouter, useRef } = Imports;

  const buttonRef = useRef();
  const navigate = useRouter();

  useDoubleClick({
    onSingleClick: () => navigateToMovie(),
    onDoubleClick: () => addMovietoWatchList(),

    ref: buttonRef,
    latency: 250,
  });

  const navigateToMovie = () => {
    navigate.push(`/movies/${id}`);
  };

  return (
    <div ref={buttonRef}>
      {poster_path ? (
        <PosterImage
          width={500}
          height={730}
          src={`${process.env.IMAGE_BASE_URL}${process.env.POSTER_SIZE}${poster_path}`}
          alt="Movie Poster"
        />
      ) : (
        <Image width={500} height={730} src={BrokenImage} alt="Movie Poster" />
      )}
    </div>
  );
};

export default Movie;
