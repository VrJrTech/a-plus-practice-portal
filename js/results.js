const resultData = JSON.parse(
  localStorage.getItem("latestResult")
);

const scoreSummary =
  document.getElementById("score-summary");

const reviewContainer =
  document.getElementById("review-container");

if (!resultData) {
  scoreSummary.innerHTML = `
    <h2>No Training Results Found</h2>
    <p>Complete a training set first.</p>
  `;
} else {
  const streak =
    resultData.streak || 1;

  scoreSummary.innerHTML = `
    <h2>🏀 Training Complete</h2>

    <div class="results-stats">
      <div class="stat-card">
        <h3>📈 Score</h3>
        <p>${resultData.scorePercent}%</p>
      </div>

      <div class="stat-card">
        <h3>🔥 Streak</h3>
        <p>${streak} Day${streak === 1 ? "" : "s"}</p>
      </div>

      <div class="stat-card">
        <h3>🏀 Reps</h3>
        <p>${resultData.totalQuestions}</p>
      </div>
    </div>

    <p>
      <strong>👤 Tech Handle:</strong>
      ${resultData.techHandle}
    </p>

    <p>
      <strong>📚 Training Set:</strong>
      ${resultData.examName}
    </p>

    <p>
      <strong>✅ Correct:</strong>
      ${resultData.correctCount} /
      ${resultData.totalQuestions}
    </p>
  `;

  resultData.questions.forEach(
    (question, index) => {
      const userAnswer =
        resultData.userAnswers[index];

      const isCorrect =
        userAnswer === question.answer;

      const reviewItem =
        document.createElement("div");

      reviewItem.className =
        `review-item ${
          isCorrect
            ? "correct"
            : "incorrect"
        }`;

      reviewItem.innerHTML = `
        <h3>
          ${
            isCorrect
              ? "✅ Correct"
              : "❌ Missed"
          }
        </h3>

        <p><strong>Question</strong></p>
        <p>${question.question}</p>

        <p><strong>Your Answer</strong></p>
        <p>${userAnswer || "No Answer"}</p>

        <p><strong>Correct Answer</strong></p>
        <p>${question.answer}</p>

        <p><strong>Explanation</strong></p>
        <p>
          ${
            question.explanation ||
            "Explanation coming soon."
          }
        </p>
      `;

      reviewContainer.appendChild(
        reviewItem
      );
    }
  );
}