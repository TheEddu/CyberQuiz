function Results({ questionBank, userAnswers, restartQuiz }) {
    function getScore() {
        let finalScore = 0;

        userAnswers.forEach((answer, index) => {
            if (answer === questionBank[index].answer) {
                finalScore++;
            }
        });

        return finalScore;
    }

    const score = getScore();

    return (
        <div>
            <h2>Quiz Results</h2>
            <p className="score">Score: {score}/{questionBank.length} </p>
            <button className="restart-button" onClick={restartQuiz}> Restart Quiz</button>
        </div>
    );
}

export default Results;
