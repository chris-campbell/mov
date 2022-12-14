import Movie from "./Movie";
import useDoubleClick from "use-double-click";
import PopupDraw from "./PopupDraw";
import Poster from "./Poster";
import MovieItem from "./styles";
import { useRouter } from "next/router";
import { useRef } from "react";
import { addMovie } from "../../redux/slices/watcherSlices";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useCallback } from "react";

export const Imports = {
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
};

export default Movie;
