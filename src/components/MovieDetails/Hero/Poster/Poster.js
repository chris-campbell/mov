import BrokenImage from "./img/brokenImg.png";
import { Imports } from ".";

const Poster = ({ poster_path }) => {
  const imageURL = process.env.IMAGE_BASE_URL;
  const posterSize = process.env.POSTER_SIZE;

  const { useRouter, PosterImage } = Imports;

  const router = useRouter();

  console.log(router.pathname);

  return (
    <div className="hero-poster">
      {poster_path ? (
        <PosterImage
          page={router.pathname}
          src={`${imageURL}${posterSize}${poster_path}`}
          width={500}
          height={700}
          alt="Movie Poster"
        />
      ) : (
        <PosterImage
          page={router.pathname}
          src={BrokenImage}
          width={500}
          height={700}
          alt="Movie Poster"
        />
      )}
    </div>
  );
};

export default Poster;
