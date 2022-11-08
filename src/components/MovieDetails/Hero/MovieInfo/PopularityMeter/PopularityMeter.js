import { Imports } from ".";

const PopularityMeter = ({ vote }) => {
  const { PopularityMeterContainer } = Imports;
  return (
    <PopularityMeterContainer>
      <h5>Popularity</h5>

      <meter
        min="0"
        max="100"
        optimum="100"
        low="40"
        high="70"
        value={vote * 10}
      />
    </PopularityMeterContainer>
  );
};

export default PopularityMeter;
