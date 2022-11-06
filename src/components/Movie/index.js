import Movie from "./Movie";
import useDoubleClick from "use-double-click";
import { useRouter } from "next/router";
import { useRef } from "react";
import PopupDraw from "./PopupDraw";
import Poster from "./Poster";

export const Imports = {
  useDoubleClick,
  useRouter,
  useRef,
  PopupDraw,
  Poster,
};

export default Movie;
