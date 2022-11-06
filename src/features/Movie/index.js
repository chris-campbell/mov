import Movie from "./Movie";
import Image from "next/image";
import useDoubleClick from "use-double-click";
import { useRouter } from "next/router";
import { useRef } from "react";

export const Imports = { Image, useDoubleClick, useRouter, useRef };

export default Movie;
