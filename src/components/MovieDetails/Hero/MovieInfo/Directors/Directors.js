import { Imports } from ".";

const Directors = ({ directors }) => {
  const { DirectorContainer } = Imports;

  return (
    <DirectorContainer className="directors">
      <h5>Directors</h5>

      {directors.map((director) => (
        <span key={director.id} className="director">
          {director.name}
        </span>
      ))}
    </DirectorContainer>
  );
};

export default Directors;
