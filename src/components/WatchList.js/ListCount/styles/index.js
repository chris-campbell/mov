import styled from "styled-components";

const ListCountContainer = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.snow};
  display: flex;
  align-items: center;
  gap: 0.3rem;

  .list-count {
    color: ${({ theme }) => theme.colors.summerOrange};
    font-style: "italic";
  }
`;

export default ListCountContainer;
