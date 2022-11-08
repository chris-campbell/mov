import { Imports } from ".";

const MovieCast = ({ cast }) => {
  const { Image, MovieCastContainer, CastMember } = Imports;

  return (
    <MovieCastContainer>
      <h3>Cast Members</h3>
      <MovieCastContainer.Wrapper>
        {cast.map((member) =>
          member.profile_path ? <CastMember {...member} /> : null
        )}
      </MovieCastContainer.Wrapper>
    </MovieCastContainer>
  );
};

export default MovieCast;
