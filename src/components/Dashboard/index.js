import Dashboard from "./Dashboard";
import InfiniteScroller from "../InfiniteScroller";
import keywordSearch from "./utils/fetchMovies";
import { useInfiniteQuery } from "react-query";
import PageTitle from "../PageTitle";

import { useSearch } from "../../context/searchContext";

export const Imports = {
  useSearch,
  InfiniteScroller,
  keywordSearch,
  useInfiniteQuery,
  PageTitle,
};

export default Dashboard;
