import styled from "styled-components";

const PopularityMeterContainer = styled.div`
  margin-bottom: 1rem;
  h5 {
    margin-bottom: 0.5rem;
  }

  meter {
    height: 1.5rem;
    max-width: 20rem;
    width: 100%;
    border-radius: none;
    &::-webkit-meter-bar {
      border-radius: 3px;
      border: none;
    }
  }
`;

export default PopularityMeterContainer;
