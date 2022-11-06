import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Imports } from ".";
// import FadeLoader from "react-spinners/FadeLoader";

const InfiniteScroller = ({ query }) => {
  const { status, data, fetchNextPage, hasNextPage } = query;
  const { Movie } = Imports;

  return (
    <>
      {status === "success" && (
        <InfiniteScroll
          dataLength={data?.pages.length * 20}
          next={fetchNextPage}
          hasMore={hasNextPage}
        >
          <div>
            {data?.pages.map((page) => (
              <>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {page.results.map((movie) => (
                    <Movie key={movie.id} {...movie} />
                  ))}
                </div>
              </>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

export default InfiniteScroller;
