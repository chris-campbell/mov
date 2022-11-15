import styled from "styled-components";

const WatchWallContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 1rem;
  row-gap: 2rem;
  column-gap: 2rem;
  @media (max-width: 808px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 386px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default WatchWallContainer;
