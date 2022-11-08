import React from "react";
import { Imports } from ".";

const Title = ({ title, release_date }) => {
  const { TitleContainer } = Imports;

  return (
    <TitleContainer>
      <h1>
        {title} <span className="date">{`(${release_date.slice(0, 4)})`}</span>
      </h1>
    </TitleContainer>
  );
};

export default Title;
