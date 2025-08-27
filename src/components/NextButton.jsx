function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        dispatch({
          type: numQuestions === index + 1 ? "finished" : "nextQuestion",
        })
      }
    >
      {numQuestions === index + 1 ? "Finish" : "Next"}
    </button>
  );
}

export default NextButton;
