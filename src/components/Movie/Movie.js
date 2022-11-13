import { Imports } from ".";

const Movie = ({ id, title, poster_path, overview, release_date, movie }) => {
  const {
    useDoubleClick,
    useRouter,
    useRef,
    PopupDraw,
    Poster,
    MovieItem,
    addMovie,
    useDispatch,
    useSelector,
    toast,
    useCallback,
  } = Imports;

  const dispatch = useDispatch();
  const buttonRef = useRef();
  const navigate = useRouter();

  const movies = useSelector((s) => s.value);

  useDoubleClick({
    onSingleClick: () => navigateToMovie(),
    onDoubleClick: () => addMovietoWatchList(),

    ref: buttonRef,
    latency: 250,
  });

  const navigateToMovie = () => {
    navigate.push(`/movies/${id}`);
  };

  const removeMoveNotify = useCallback(
    () =>
      toast(
        ({}) => (
          <div>
            Added <span style={{ fontWeight: 600 }}>{movie.title}</span> to
            watch list.
          </div>
        ),
        { position: "bottom-right" }
      ),
    [movie.title]
  );

  const addMovietoWatchList = () => {
    const isMovie = movies.find((m) => m.id === id);

    if (isMovie)
      return toast.warn("Movie already in list.", { position: "bottom-right" });

    dispatch(addMovie(movie));
    removeMoveNotify();
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
