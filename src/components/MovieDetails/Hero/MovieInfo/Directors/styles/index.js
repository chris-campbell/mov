import styled from "styled-components";

const DirectorContainer = styled.div`
  h5 {
    margin-bottom: 1rem;
  }

  .director {
    color: ${({ theme }) => theme.colors.snow};
  }
`;

export default DirectorContainer;
