import React, { Fragment } from "react";

function FinishScreen({ points, maxPossiblePoints, highScore }) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <Fragment>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p>(High score: {highScore} points)</p>
    </Fragment>
  );
}

export default FinishScreen;
