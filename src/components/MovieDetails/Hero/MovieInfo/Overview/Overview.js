import { Imports } from ".";

const Overview = ({ overview }) => {
  const { OverviewContainer } = Imports;

  return (
    <OverviewContainer>
      <h3>Synopsis</h3>
      <p>{overview}</p>
    </OverviewContainer>
  );
};

export default Overview;
