import WatchWall from "./WatchWall";
import WatchWallContainer from "./styles";
import Movie from "./Movie/Movie";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const Imports = { WatchWallContainer, Movie, useRouter, useEffect };

export default WatchWall;
