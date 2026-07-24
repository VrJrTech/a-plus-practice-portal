"use strict";

// A+ Practice Portal results renderer — tolerant of old or damaged saved data.

const scoreSummary = document.getElementById("score-summary");
const reviewContainer = document.getElementById("review-container");

// Score Reaction Framework
// Edit the minimum score, title, or message here to change the feedback.
// Keep tiers ordered from highest minimum score to lowest.
const SCORE_FEEDBACK_TIERS = [
  {
    minimumScore: 100,
    level: "boss",
    title: "That Was Boss Level 😤",
    message: "Perfect set. You owned every rep."
  },
  {
    minimumScore: 90,
    level: "elite",
    title: "Locked In 🔥",
    message: "That performance is looking exam-ready."
  },
  {
    minimumScore: 80,
    level: "strong",
    title: "BOOM! That's It! 💥💯",
    message: "You found your rhythm. Clean up the few misses and keep rolling."
  },
  {
    minimumScore: 70,
    level: "building",
    title: "You're Right There! 🎯",
    message: "A few more focused reps and you'll break straight through."
  },
  {
    minimumScore: 50,
    level: "work",
    title: "Not Quite—A Little More Work to Do!",
    message: "Use the review below to isolate the weak spots, then try again."
  },
  {
    minimumScore: 0,
    level: "reset",
    title: "Let's Slow It Down and Rebuild 🧠",
    message: "Study the explanations, focus on one concept at a time, and come back stronger."
  }
];

initializeResultsPage();

function initializeResultsPage() {
  if (!scoreSummary || !reviewContainer) {
    console.error(
      "[Results] Cannot initialize. Required page elements are missing."
    );
    return;
  }

  addScoreFeedbackStyles();

  const storedResult = readStoredResult();

  if (!storedResult) {
    renderEmptyState(
      "No Training Results Found",
      "Complete a training set first."
    );
    return;
  }

  const normalizedResult = normalizeResult(storedResult);

  if (!normalizedResult) {
    renderEmptyState(
      "Training Results Unavailable",
      "The saved result is incomplete or damaged. Run another training set to create a fresh result."
    );
    return;
  }

  renderScoreSummary(normalizedResult);
  renderQuestionReview(normalizedResult);
}

function readStoredResult() {
  let rawResult;

  try {
    rawResult = localStorage.getItem("latestResult");
  } catch (error) {
    console.error("[Results] Browser storage is unavailable.", error);
    return null;
  }

  if (!rawResult) {
    return null;
  }

  try {
    return JSON.parse(rawResult);
  } catch (error) {
    console.error("[Results] Saved result is not valid JSON.", error);
    return null;
  }
}

function normalizeResult(result) {
  if (!result || typeof result !== "object" || Array.isArray(result)) {
    return null;
  }

  if (!Array.isArray(result.questions)) {
    console.error("[Results] Saved result has no question list.");
    return null;
  }

  const savedAnswers = Array.isArray(result.userAnswers)
    ? result.userAnswers
    : [];
  const reviewItems = [];
  const skippedEntries = [];

  // Array.from exposes sparse-array holes as undefined values.
  Array.from(result.questions).forEach((question, index) => {
    const reason = getQuestionValidationError(question);

    if (reason) {
      skippedEntries.push({
        index,
        id:
          question &&
          typeof question === "object" &&
          typeof question.id === "string"
            ? question.id
            : null,
        reason
      });
      return;
    }

    reviewItems.push({
      question,
      userAnswer:
        typeof savedAnswers[index] === "string"
          ? savedAnswers[index]
          : null
    });
  });

  if (skippedEntries.length > 0) {
    console.warn(
      `[Results] Skipped ${skippedEntries.length} invalid saved question entr${skippedEntries.length === 1 ? "y" : "ies"}.`,
      skippedEntries
    );
  }

  if (reviewItems.length === 0) {
    return null;
  }

  const correctCount = reviewItems.reduce(
    (total, item) =>
      total + (item.userAnswer === item.question.answer ? 1 : 0),
    0
  );
  const totalQuestions = reviewItems.length;
  const scorePercent = Math.round(
    (correctCount / totalQuestions) * 100
  );

  return {
    techHandle: getDisplayText(result.techHandle, "Anonymous"),
    examName: getDisplayText(result.examName, "Training Set"),
    streak: getNonNegativeInteger(result.streak, 1),
    timedExam: result.timedExam === true,
    correctCount,
    totalQuestions,
    scorePercent,
    reviewItems,
    skippedCount: skippedEntries.length
  };
}

function getQuestionValidationError(question) {
  if (!question || typeof question !== "object" || Array.isArray(question)) {
    return "Entry is null, empty, or not a question object";
  }

  if (
    typeof question.question !== "string" ||
    question.question.trim() === ""
  ) {
    return "Question text is missing";
  }

  if (!Array.isArray(question.choices) || question.choices.length < 2) {
    return "Answer choices are missing";
  }

  if (
    typeof question.answer !== "string" ||
    question.answer.trim() === ""
  ) {
    return "Correct answer is missing";
  }

  return null;
}

function renderEmptyState(title, message) {
  scoreSummary.replaceChildren();
  reviewContainer.replaceChildren();

  const heading = document.createElement("h2");
  const paragraph = document.createElement("p");

  heading.textContent = title;
  paragraph.textContent = message;

  scoreSummary.append(heading, paragraph);
}

function renderScoreSummary(result) {
  scoreSummary.replaceChildren();

  const heading = document.createElement("h2");
  const stats = document.createElement("div");

  heading.textContent = "🏀 Training Complete";
  stats.className = "results-stats";

  stats.append(
    createStatCard("📈 Score", `${result.scorePercent}%`),
    createStatCard(
      "🔥 Streak",
      `${result.streak} Day${result.streak === 1 ? "" : "s"}`
    ),
    createStatCard("🏀 Reps", String(result.totalQuestions))
  );

  scoreSummary.append(
    heading,
    stats,
    createScoreFeedback(result.scorePercent),
    createLabeledParagraph("👤 Tech Handle:", result.techHandle),
    createLabeledParagraph("📚 Training Set:", result.examName),
    createLabeledParagraph(
      "✅ Correct:",
      `${result.correctCount} / ${result.totalQuestions}`
    )
  );

  if (result.timedExam) {
    scoreSummary.append(
      createLabeledParagraph("⏱️ Exam Mode:", "Timed")
    );
  }

  if (result.skippedCount > 0) {
    const warning = document.createElement("p");

    warning.className = "results-data-warning";
    warning.textContent =
      `${result.skippedCount} damaged saved question entr${result.skippedCount === 1 ? "y was" : "ies were"} omitted from this review.`;
    scoreSummary.appendChild(warning);
  }
}

function createScoreFeedback(scorePercent) {
  const tier =
    SCORE_FEEDBACK_TIERS.find(
      (feedbackTier) =>
        scorePercent >= feedbackTier.minimumScore
    ) ||
    SCORE_FEEDBACK_TIERS[SCORE_FEEDBACK_TIERS.length - 1];
  const feedback = document.createElement("section");
  const label = document.createElement("p");
  const title = document.createElement("h3");
  const message = document.createElement("p");

  feedback.className =
    `score-feedback score-feedback-${tier.level}`;
  feedback.setAttribute("aria-live", "polite");

  label.className = "score-feedback-label";
  label.textContent = "Coach's Call";
  title.textContent = tier.title;
  message.className = "score-feedback-message";
  message.textContent = tier.message;

  feedback.append(label, title, message);

  return feedback;
}

function createStatCard(label, value) {
  const card = document.createElement("div");
  const heading = document.createElement("h3");
  const paragraph = document.createElement("p");

  card.className = "stat-card";
  heading.textContent = label;
  paragraph.textContent = value;
  card.append(heading, paragraph);

  return card;
}

function createLabeledParagraph(label, value) {
  const paragraph = document.createElement("p");
  const strong = document.createElement("strong");

  strong.textContent = label;
  paragraph.append(strong, document.createTextNode(` ${value}`));

  return paragraph;
}

function renderQuestionReview(result) {
  reviewContainer.replaceChildren();

  result.reviewItems.forEach((item, index) => {
    const isCorrect = item.userAnswer === item.question.answer;
    const reviewItem = document.createElement("div");
    const status = document.createElement("h3");

    reviewItem.className =
      `review-item ${isCorrect ? "correct" : "incorrect"}`;
    status.textContent =
      `${isCorrect ? "✅ Correct" : "❌ Missed"} — Rep ${index + 1}`;

    reviewItem.append(
      status,
      createReviewSection("Question", item.question.question),
      createReviewSection(
        "Your Answer",
        item.userAnswer || "No Answer"
      ),
      createReviewSection("Correct Answer", item.question.answer),
      createReviewSection(
        "Explanation",
        getDisplayText(
          item.question.explanation,
          "Explanation coming soon."
        )
      )
    );

    reviewContainer.appendChild(reviewItem);
  });
}

function createReviewSection(label, value) {
  const fragment = document.createDocumentFragment();
  const labelParagraph = document.createElement("p");
  const strong = document.createElement("strong");
  const valueParagraph = document.createElement("p");

  strong.textContent = label;
  labelParagraph.appendChild(strong);
  valueParagraph.textContent = value;
  fragment.append(labelParagraph, valueParagraph);

  return fragment;
}

function getDisplayText(value, fallback) {
  return typeof value === "string" && value.trim() !== ""
    ? value.trim()
    : fallback;
}

function getNonNegativeInteger(value, fallback) {
  const number = Number(value);

  return Number.isInteger(number) && number >= 0
    ? number
    : fallback;
}

function addScoreFeedbackStyles() {
  if (document.getElementById("score-feedback-styles")) {
    return;
  }

  const style = document.createElement("style");

  style.id = "score-feedback-styles";
  style.textContent = `
    .score-feedback {
      margin: -12px 0 32px;
      padding: 24px 28px;
      border: 1px solid rgba(51, 214, 255, 0.32);
      border-radius: 18px;
      background:
        linear-gradient(
          135deg,
          rgba(20, 38, 63, 0.98),
          rgba(6, 17, 31, 0.98)
        );
      text-align: center;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22);
    }

    .score-feedback-label {
      margin: 0 0 8px;
      color: #9fb7c9;
      font-size: 0.78rem;
      font-weight: 900;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .score-feedback h3 {
      margin: 0;
      color: #ffffff;
      font-size: clamp(1.35rem, 3vw, 2rem);
    }

    .score-feedback-message {
      margin: 10px 0 0;
      color: #c6d9e7;
      line-height: 1.6;
    }

    .score-feedback-boss {
      border-color: rgba(255, 209, 102, 0.85);
      box-shadow: 0 12px 34px rgba(255, 209, 102, 0.14);
    }

    .score-feedback-boss h3,
    .score-feedback-elite h3 {
      color: #ffd166;
    }

    .score-feedback-strong h3 {
      color: #62e6a7;
    }

    .score-feedback-building h3 {
      color: #33d6ff;
    }

    .score-feedback-work h3 {
      color: #ffd166;
    }

    .score-feedback-reset h3 {
      color: #ff8aa0;
    }

    @media (max-width: 600px) {
      .score-feedback {
        padding: 20px 18px;
      }
    }
  `;

  document.head.appendChild(style);
}
