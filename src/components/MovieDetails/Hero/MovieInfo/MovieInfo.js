import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import _ from "lodash";

const MovieInfo = ({
  title,
  release_date,
  overview,
  genres,
  vote,
  directors,
  movie,
  movieId,
}) => {
  return (
    <div className="movie-details">
      <div className="details-wrapper">
        <h1>
          {title}{" "}
          <span className="date">{`(${release_date.slice(0, 4)})`}</span>
        </h1>
        <div>
          <h3>Synopsis</h3>
          <p>{overview}</p>
        </div>
        <div className="genres">
          {genres.map((genre) => (
            <span key={_.uniqueId()} className="genre">
              {genre.name}
            </span>
          ))}
        </div>

        <div>
          <h5>Popularity</h5>
          <meter
            min="0"
            max="100"
            optimum="100"
            low="40"
            high="70"
            value={vote * 10}
          />
        </div>

        <div className="directors">
          <h5>Directors</h5>
          {directors.map((director) => (
            <span key={director.id} className="director">
              {director.name}
            </span>
          ))}
        </div>

        <div className="add-movie">
          <AddBoxIcon onClick={() => addmovieToWatchList()} /> Add to watch list
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
