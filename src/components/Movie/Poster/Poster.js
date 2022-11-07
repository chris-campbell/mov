import { Imports } from ".";

const Poster = ({ poster_path }) => {
  const { BrokenImage, PosterImage } = Imports;

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
        <PosterImage
          width={500}
          height={730}
          src={BrokenImage}
          alt="Movie Poster"
        />
      )}
    </>
  );
};

export default Poster;
