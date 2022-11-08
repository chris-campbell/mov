import styled from "styled-components";

const HeroContainer = styled.div`
  background-repeat: no-repeat;
  height: auto;
  position: sticky;
  background-size: cover !important;
  background-position: 50% !important;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media (max-width: 738px) {
    grid-template-rows: 1fr;
    grid-template-columns: none;
    gap: 0;
  }
`;

HeroContainer.Wrapper = Wrapper;

export default HeroContainer;
