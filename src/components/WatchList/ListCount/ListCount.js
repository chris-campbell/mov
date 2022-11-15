import React from "react";
import { Imports } from ".";

const ListCount = ({ listSize }) => {
  const { ListCountContainer } = Imports;

  return (
    <ListCountContainer>
      Movies in list <span>•</span>{" "}
      <span className="list-count">{listSize}</span>
    </ListCountContainer>
  );
};

export default ListCount;
