import styled from "styled-components";

export const TitleContainer = styled.div`
  h1 {
    color: #fff;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    .date {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.snow};
    }
  }
`;

export default TitleContainer;
