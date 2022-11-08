import { Imports } from ".";

const CastMember = ({ id, name, character, profile_path }) => {
  const { Image, CastMemberContainer } = Imports;

  return (
    <CastMemberContainer key={id} className="cast-member">
      <div className="cast-member-wrapper">
        <div>
          <div>
            <Image
              src={`${process.env.IMAGE_BASE_URL}${process.env.POSTER_SIZE}${profile_path}`}
              width={350}
              height={500}
              alt="Movie Poster"
            />
          </div>
        </div>
        <div className="cast-details">
          <h4>{name}</h4>
          <p>{character}</p>
        </div>
      </div>
    </CastMemberContainer>
  );
};

export default CastMember;
