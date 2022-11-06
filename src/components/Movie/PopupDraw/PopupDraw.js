import React from "react";
import LinesEllipsis from "react-lines-ellipsis";

const PopupDraw = ({ title, release_date, overview }) => {
  return (
    <div className="popup">
      <div className="popup-wrapper">
        <h4 className="title">
          {title}
          <span className="date">{release_date?.slice(0, 4)}</span>
        </h4>

        <LinesEllipsis
          text={overview}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="words"
          className="overview"
        />
      </div>
    </div>
  );
};

export default PopupDraw;
