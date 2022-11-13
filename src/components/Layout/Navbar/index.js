import Navbar from "./Navbar";
import Search from "./img/searchIcon.svg";
import Link from "next/link";
import PeekABooSearch from "../../PeekABooSearch";
import Image from "next/image";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAllMovies } from "../../../redux/slices/watcherSlices";
import { signOut, useSession } from "next-auth/react";
import { persistor } from "../../../redux/store";

export const Imports = {
  Search,
  IconButton,
  Link,
  PeekABooSearch,
  Image,
  removeAllMovies,
  useState,
  useSelector,
  useDispatch,
  useSession,
  signOut,
  persistor,
};

export default Navbar;
