import { Imports } from ".";

const WatchWall = ({ list }) => {
  const { WatchWallContainer, Movie } = Imports;

  return (
    <WatchWallContainer>
      {list.length > 0 ? (
        list.map((movie) => <Movie key={movie.id} {...movie} movie={movie} />)
      ) : (
        <h1>Watch list empty</h1>
      )}
    </WatchWallContainer>
  );
};

export default WatchWall;
