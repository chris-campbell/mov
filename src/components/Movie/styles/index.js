import styled from "styled-components";

const MovieItem = styled.div`
  overflow: hidden;
  position: relative;

  @media (min-width: 754px) {
    &:hover .popup {
      max-height: 800px;
      transition: max-height 500ms ease-in-out;
    }
  }

  .popup {
    background-color: #03071ee6;
    position: absolute;
    max-height: 0;
    bottom: 0;
    right: 0;
    left: 0;
    .popup-wrapper {
      padding: 1.1rem;
      .title {
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: space-between;
        .date {
          color: ${({ theme }) => theme.colors.snow};
          font-weight: 400;
        }
      }
      .overview {
        font-size: 0.8em;
        line-height: 1.1rem;
        text-overflow: "Read more";
        box-orient: vertical;
        overflow: hidden !important;
        color: ${({ theme }) => theme.colors.snow} !important;
      }
    }
  }
`;

export default MovieItem;
