function Finished({ numQuestions, maxPoints, points, highscore, dispatch }) {
  let emoji;
  const percentage = (points / maxPoints) * 100;
  if (percentage === 100) emoji = "🎖️";
  else if (percentage >= 80) emoji = "🎉";
  else if (percentage >= 50) emoji = "😊";
  else if (percentage >= 10) emoji = "👍🏽";
  else emoji = "🤔";

  return (
    <>
      <p className="result">
        {emoji}You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%)
        <br />
        from {numQuestions} Questions.
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default Finished;
