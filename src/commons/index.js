import Image from "next/image";
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
    transform: ${({ page }) =>
      page === "/movies/[...movieId]" ? null : "scale(1.05)"};
    transition: 500ms ease-in;
    opacity: ${({ page }) => (page === "/movies/[...movieId]" ? null : "0.5")};
    border-radius: 0.3rem;
    max-height: 800px;
    transition: max-height 500ms ease-in-out;
  }

  &:active {
    opacity: 0.6;
  }
`;

export default PosterImage;
