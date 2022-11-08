import React from "react";
import Image from "next/image";
import BrokenImage from "./img/brokenImg.png";

import styled from "styled-components";

const PosterImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 0.3rem;
  border-radius: 0.3rem;
  cursor: pointer;
  transform: scale(1);
  transition: 500ms ease-out;

  &:hover {
    transform: scale(1.05);
    transition: 500ms ease-in;
    opacity: 0.5;
    border-radius: 0.3rem;
    max-height: 800px;
    transition: max-height 500ms ease-in-out;
  }

  &:active {
    opacity: 0.6;
  }
`;

const Poster = ({ poster_path }) => {
  const imageURL = process.env.IMAGE_BASE_URL;
  const posterSize = process.env.POSTER_SIZE;

  return (
    <div className="hero-poster">
      {poster_path ? (
        <PosterImage
          src={`${imageURL}${posterSize}${poster_path}`}
          width={500}
          height={700}
          alt="Movie Poster"
        />
      ) : (
        <Image src={BrokenImage} width={500} height={700} alt="Movie Poster" />
      )}
    </div>
  );
};

export default Poster;
