import React from "react";

function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => {
          if (index === numQuestions - 1) dispatch({ type: "finished" });
          else dispatch({ type: "nextQuestion" });
        }}
      >
        {index === numQuestions - 1 ? "Finish" : "Next"}
      </button>
    );
}

export default NextButton;
