import styled from "styled-components";

const CastMemberContainer = styled.div`
  position: relative;
  border-radius: 0.5rem;

  img {
    border-radius: 0.5rem;
    width: 100%;
    height: auto;
  }

  .cast-details {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #03071ee6;
    height: 3rem;
    padding: 1rem;
    p {
      font-size: 0.8rem;
      margin-top: 0.2rem;
    }
  }
`;

export default CastMemberContainer;
