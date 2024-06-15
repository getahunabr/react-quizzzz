function StartScreen({ numQuestions, dispatch }) {
  return (
    <>
      <h2>Welcome to The React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </>
  );
}

export default StartScreen;
