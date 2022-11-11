import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 371px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const MovieCastContainer = styled.div`
  margin-top: 4rem;
  padding: 1rem;

  h3 {
    margin-bottom: 1.5rem;
  }
`;

MovieCastContainer.Wrapper = Wrapper;

export default MovieCastContainer;
