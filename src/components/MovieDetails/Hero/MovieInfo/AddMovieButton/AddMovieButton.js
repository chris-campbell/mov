import { Imports } from ".";

const AddMovieButton = () => {
  const { AddMovieButtonContainer, AddBoxIcon } = Imports;

  return (
    <AddMovieButtonContainer className="add-movie">
      <AddBoxIcon onClick={() => addmovieToWatchList()} />{" "}
      <span>Add to watch list</span>
    </AddMovieButtonContainer>
  );
};

export default AddMovieButton;
