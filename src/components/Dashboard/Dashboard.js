import { Imports } from ".";

export default () => {
  const {
    useSearch,
    InfiniteScroller,
    keywordSearch,
    useInfiniteQuery,
    PageTitle,
    DashboardContainer,
  } = Imports;

  const { search } = useSearch();

  const fetchMovies = async ({ pageParam = 1 }) => {
    return await keywordSearch(search, pageParam);
  };

  const query = useInfiniteQuery(["search", search], fetchMovies, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.page < lastPage.total_pages) {
        return pages.length + 1;
      }
    },
  });

  return (
    <DashboardContainer>
      <PageTitle search={search} />
      <InfiniteScroller query={query} />
    </DashboardContainer>
  );
};
