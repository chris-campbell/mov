import { Imports } from ".";

const InfiniteScroller = ({ query }) => {
  const { status, data, fetchNextPage, hasNextPage } = query;
  const { Movie, InfiniteScroll, MovieGridContainer } = Imports;

  return (
    <>
      {status === "success" && (
        <InfiniteScroll
          dataLength={data?.pages.length * 20}
          next={fetchNextPage}
          hasMore={hasNextPage}
        >
          {data?.pages.map((page) => (
            <>
              <MovieGridContainer>
                {page.results.map((movie) => (
                  <Movie key={movie.id} {...movie} movie={movie} />
                ))}
              </MovieGridContainer>
            </>
          ))}
        </InfiniteScroll>
      )}
    </>
  );
};

export default InfiniteScroller;
