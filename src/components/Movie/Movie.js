import { Imports } from ".";

const Movie = ({ id, title, poster_path, overview, release_date }) => {
  const {
    useDoubleClick,
    useRouter,
    useRef,
    PopupDraw,
    Poster,
    MovieItem,
  } = Imports;

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
    <MovieItem ref={buttonRef}>
      <Poster poster_path={poster_path} />
      <PopupDraw
        release_date={release_date}
        title={title}
        overview={overview}
      />
    </MovieItem>
  );
};

export default Movie;
