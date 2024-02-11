import React, { Fragment } from "react";
import Summary from "./Summary";
import WatchedList from "./WatchedList";

function WatchedBox({
  setIsOpen2,
  isOpen2,
  watched,
  avgImdbRating,
  avgUserRating,
  avgRuntime,
}) {
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <Fragment>
          <Summary
            watched={watched}
            avgImdbRating={avgImdbRating}
            avgUserRating={avgUserRating}
            avgRuntime={avgRuntime}
          />
          <WatchedList watched={watched} />
        </Fragment>
      )}
    </div>
  );
}

export default WatchedBox;
