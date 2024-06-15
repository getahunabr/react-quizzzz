function FinishScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "✨";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 60 && percentage < 80) emoji = "🥳";
  if (percentage < 60) emoji = "😐";
  if (percentage === 0) emoji = "🤯";

  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong>out of{maxPossiblePoints}(
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(highScore:{highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "Restart" })}
      >
        ReStart
      </button>
    </>
  );
}

export default FinishScreen;
