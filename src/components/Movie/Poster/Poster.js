import React from "react";
import PosterImage from "./styles";

const Poster = ({ poster_path }) => {
  return (
    <>
      {poster_path ? (
        <PosterImage
          width={500}
          height={730}
          src={`${process.env.IMAGE_BASE_URL}${process.env.POSTER_SIZE}${poster_path}`}
          alt="Movie Poster"
        />
      ) : (
        <Image width={500} height={730} src={BrokenImage} alt="Movie Poster" />
      )}
    </>
  );
};

export default Poster;
