import styled from "styled-components";
import Link from "next/link";

const BackButtonContainer = styled.div`
  margin-top: 2rem;
  svg {
    font-size: 1.1rem;
  }
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  width: fit-content;

  &:hover {
    color: ${({ theme }) => theme.colors.summerOrange};
    transition: 300ms ease-in-out;
  }
`;

BackButtonContainer.BackLink = BackLink;

export default BackButtonContainer;
