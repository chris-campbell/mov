import Movie from "./Movie";
import useDoubleClick from "use-double-click";
import PopupDraw from "./PopupDraw";
import Poster from "./Poster";
import MovieItem from "./styles";
import { useRouter } from "next/router";
import { useRef } from "react";

export const Imports = {
  useDoubleClick,
  useRouter,
  useRef,
  PopupDraw,
  Poster,
  MovieItem,
};

export default Movie;
