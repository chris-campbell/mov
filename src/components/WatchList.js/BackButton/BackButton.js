import { Imports } from ".";

const BackButton = () => {
  const { BackButtonContainer } = Imports;

  return (
    <BackButtonContainer>
      <BackButtonContainer.BackLink href="/movies">
        Back to search
      </BackButtonContainer.BackLink>
    </BackButtonContainer>
  );
};

export default BackButton;
