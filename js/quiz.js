let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];

let selectedQuizName = "";
let timedExamEnabled = false;
let timerInterval = null;
let examEndTime = null;
let quizFinished = false;

const FULL_EXAM_MINUTES = 90;

const startBtn = document.getElementById("start-quiz");
const setupScreen = document.getElementById("setup-screen");
const quizScreen = document.getElementById("quiz-screen");

const studentNameInput = document.getElementById("student-name");
const quizSelect = document.getElementById("quiz-select");

const examOptions = document.getElementById("exam-options");
const timedExamToggle = document.getElementById("timed-exam-toggle");

const examTimer = document.getElementById("exam-timer");
const timerDisplay = document.getElementById("timer-display");

const questionCount = document.getElementById("question-count");
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const progressBar = document.getElementById("progress-bar");

addQuizStyles();
updateExamOptions();

startBtn.addEventListener("click", startQuiz);
quizSelect.addEventListener("change", updateExamOptions);

function updateExamOptions() {
  const isFullExam =
    quizSelect.value === "Full A+ Exam";

  examOptions.classList.toggle(
    "hidden",
    !isFullExam
  );

  if (!isFullExam) {
    timedExamToggle.checked = false;
  }
}

function startQuiz() {
  const techHandle =
    studentNameInput.value.trim();

  if (!techHandle) {
    alert("Please enter your Tech Handle.");
    return;
  }

  selectedQuizName = quizSelect.value;

  timedExamEnabled =
    selectedQuizName === "Full A+ Exam" &&
    timedExamToggle.checked;

  currentQuestions =
    getQuestionsByCategory(selectedQuizName);

  if (
    !Array.isArray(currentQuestions) ||
    currentQuestions.length === 0
  ) {
    alert(
      "No questions have been added to this category yet."
    );
    return;
  }

  currentQuestions =
    shuffleArray(currentQuestions);

  if (selectedQuizName === "Full A+ Exam") {
    currentQuestions =
      currentQuestions.slice(0, 90);
  } else if (currentQuestions.length > 25) {
    currentQuestions =
      currentQuestions.slice(0, 25);
  }

  userAnswers =
    new Array(currentQuestions.length).fill(null);

  currentQuestionIndex = 0;
  quizFinished = false;

  localStorage.setItem(
    "techHandle",
    techHandle
  );

  setupScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  if (timedExamEnabled) {
    startExamTimer(FULL_EXAM_MINUTES);
  } else {
    hideExamTimer();
  }

  renderQuestion();
}

function getQuestionsByCategory(category) {
  switch (category) {
    case "Hardware":
      return hardwareQuestions;

    case "Networking":
      return networkingQuestions;

    case "Mobile Devices":
      return mobileDevicesQuestions;

    case "Virtualization & Cloud":
      return virtualizationCloudQuestions;

    case "Hardware & Network Troubleshooting":
      return hardwareNetworkTroubleshootingQuestions;

    case "Operating Systems":
      return operatingSystemsQuestions;

    case "Security":
      return securityQuestions;

    case "Software Troubleshooting":
      return softwareTroubleshootingQuestions;

    case "Operational Procedures":
      return operationalProceduresQuestions;

    case "Full A+ Exam":
      return questionBank;

    default:
      return [];
  }
}

function renderQuestion() {
  const question =
    currentQuestions[currentQuestionIndex];

  if (!question) {
    console.error(
      "Question not found.",
      currentQuestionIndex,
      currentQuestions.length
    );

    finishQuiz();
    return;
  }

  questionCount.innerText =
    `Rep ${currentQuestionIndex + 1} of ${currentQuestions.length}`;

  questionText.innerText =
    question.question;

  choicesContainer.innerHTML = "";

  question.choices.forEach((choice) => {
    const button =
      document.createElement("button");

    button.classList.add("choice");
    button.innerText = choice;

    if (
      userAnswers[currentQuestionIndex] === choice
    ) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      userAnswers[currentQuestionIndex] = choice;
      renderQuestion();
    });

    choicesContainer.appendChild(button);
  });

  const percent =
    ((currentQuestionIndex + 1) /
      currentQuestions.length) *
    100;

  progressBar.style.width =
    `${percent}%`;

  prevBtn.disabled =
    currentQuestionIndex === 0;

  const isLastQuestion =
    currentQuestionIndex >=
    currentQuestions.length - 1;

  nextBtn.innerText =
    isLastQuestion
      ? "Finish Set 🏀"
      : "Next Rep ➜";
}

nextBtn.addEventListener("click", () => {
  const isLastQuestion =
    currentQuestionIndex >=
    currentQuestions.length - 1;

  if (isLastQuestion) {
    finishQuiz();
    return;
  }

  currentQuestionIndex += 1;
  renderQuestion();
});

prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderQuestion();
  }
});

function finishQuiz() {
  if (quizFinished) {
    return;
  }

  quizFinished = true;

  stopExamTimer();

  let correctCount = 0;

  currentQuestions.forEach(
    (question, index) => {
      if (
        question &&
        userAnswers[index] === question.answer
      ) {
        correctCount += 1;
      }
    }
  );

  const scorePercent = Math.round(
    (correctCount /
      currentQuestions.length) *
      100
  );

  const techHandle =
    localStorage.getItem("techHandle") ||
    "Anonymous";

  const streakData =
    updateStreak();

  updateUserStats(
    scorePercent,
    currentQuestions.length
  );

  const latestResult = {
    techHandle,
    examName: selectedQuizName,
    scorePercent,
    correctCount,
    totalQuestions:
      currentQuestions.length,
    questions:
      currentQuestions,
    userAnswers,
    streak:
      streakData.currentStreak,
    timedExam:
      timedExamEnabled
  };

  localStorage.setItem(
    "latestResult",
    JSON.stringify(latestResult)
  );

  saveToLeaderboard(
    techHandle,
    selectedQuizName,
    scorePercent
  );

  window.location.href =
    "results.html";
}

function updateUserStats(
  score,
  repsCompleted
) {
  const stats =
    JSON.parse(
      localStorage.getItem("userStats")
    ) || {
      totalSetsCompleted: 0,
      totalQuestionsAnswered: 0,
      bestScore: 0
    };

  stats.totalSetsCompleted += 1;

  stats.totalQuestionsAnswered +=
    repsCompleted;

  if (score > stats.bestScore) {
    stats.bestScore = score;
  }

  localStorage.setItem(
    "userStats",
    JSON.stringify(stats)
  );
}

function saveToLeaderboard(
  techHandle,
  examName,
  score
) {
  const leaderboardKey =
    `leaderboard_${examName}`;

  const leaderboard =
    JSON.parse(
      localStorage.getItem(
        leaderboardKey
      )
    ) || [];

  leaderboard.push({
    techHandle,
    examName,
    score,
    date:
      new Date().toLocaleDateString()
  });

  localStorage.setItem(
    leaderboardKey,
    JSON.stringify(leaderboard)
  );
}

function updateStreak() {
  const today =
    getTodayString();

  const yesterday =
    getYesterdayString();

  const streakData =
    JSON.parse(
      localStorage.getItem("streakData")
    ) || {
      currentStreak: 0,
      lastTrainingDate: null
    };

  if (
    streakData.lastTrainingDate === today
  ) {
    return streakData;
  }

  if (
    streakData.lastTrainingDate === yesterday
  ) {
    streakData.currentStreak += 1;
  } else {
    streakData.currentStreak = 1;
  }

  streakData.lastTrainingDate = today;

  localStorage.setItem(
    "streakData",
    JSON.stringify(streakData)
  );

  return streakData;
}

function getTodayString() {
  return new Date()
    .toISOString()
    .split("T")[0];
}

function getYesterdayString() {
  const yesterday = new Date();

  yesterday.setDate(
    yesterday.getDate() - 1
  );

  return yesterday
    .toISOString()
    .split("T")[0];
}

function shuffleArray(array) {
  const shuffled = [...array];

  for (
    let i = shuffled.length - 1;
    i > 0;
    i -= 1
  ) {
    const randomIndex =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      shuffled[i],
      shuffled[randomIndex]
    ] = [
      shuffled[randomIndex],
      shuffled[i]
    ];
  }

  return shuffled;
}

function startExamTimer(minutes) {
  stopExamTimer();

  examTimer.classList.remove("hidden");

  examEndTime =
    Date.now() +
    minutes * 60 * 1000;

  updateTimerDisplay();

  timerInterval =
    setInterval(
      updateTimerDisplay,
      1000
    );
}

function updateTimerDisplay() {
  const remaining =
    examEndTime - Date.now();

  if (remaining <= 0) {
    timerDisplay.innerText = "00:00";

    stopExamTimer();

    alert(
      "Time is up. Your exam will now be submitted."
    );

    finishQuiz();
    return;
  }

  const totalSeconds =
    Math.floor(remaining / 1000);

  const minutes =
    Math.floor(totalSeconds / 60);

  const seconds =
    totalSeconds % 60;

  timerDisplay.innerText =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  examTimer.classList.remove(
    "timer-warning",
    "timer-danger"
  );

  if (totalSeconds <= 300) {
    examTimer.classList.add(
      "timer-danger"
    );
  } else if (totalSeconds <= 900) {
    examTimer.classList.add(
      "timer-warning"
    );
  }
}

function stopExamTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function hideExamTimer() {
  stopExamTimer();

  examTimer.classList.add("hidden");

  examTimer.classList.remove(
    "timer-warning",
    "timer-danger"
  );

  timerDisplay.innerText = "90:00";
}

function addQuizStyles() {
  if (
    document.getElementById(
      "quiz-option-styles"
    )
  ) {
    return;
  }

  const style =
    document.createElement("style");

  style.id = "quiz-option-styles";

  style.textContent = `
    .exam-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      margin-top: 20px;
      padding: 16px 18px;
      border: 1px solid rgba(51, 214, 255, 0.28);
      border-radius: 14px;
      background: rgba(20, 38, 63, 0.7);
    }

    .exam-options.hidden {
      display: none;
    }

    .exam-option-text {
      display: flex;
      flex-direction: column;
      gap: 4px;
      text-align: left;
    }

    .exam-option-text strong {
      color: #f4f7fb;
    }

    .exam-option-text span {
      color: #9fb7c9;
      font-size: 0.9rem;
    }

    .timer-toggle {
      position: relative;
      width: 56px;
      height: 30px;
      margin: 0;
      flex-shrink: 0;
    }

    .timer-toggle input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .toggle-slider {
      position: absolute;
      inset: 0;
      cursor: pointer;
      border-radius: 999px;
      background: #24415f;
      transition: 0.2s ease;
    }

    .toggle-slider::before {
      content: "";
      position: absolute;
      width: 22px;
      height: 22px;
      left: 4px;
      top: 4px;
      border-radius: 50%;
      background: white;
      transition: 0.2s ease;
    }

    .timer-toggle input:checked + .toggle-slider {
      background: #33d6ff;
    }

    .timer-toggle input:checked + .toggle-slider::before {
      transform: translateX(26px);
      background: #03111f;
    }

    .exam-timer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 18px;
      margin-bottom: 20px;
      padding: 14px 18px;
      border: 1px solid rgba(51, 214, 255, 0.28);
      border-radius: 14px;
      background: rgba(20, 38, 63, 0.95);
      color: #f4f7fb;
      font-weight: 800;
    }

    .exam-timer.hidden {
      display: none;
    }

    .exam-timer strong {
      color: #33d6ff;
      font-size: 1.25rem;
      letter-spacing: 1px;
    }

    .exam-timer.timer-warning {
      border-color: rgba(255, 209, 102, 0.7);
    }

    .exam-timer.timer-danger {
      border-color: rgba(255, 77, 109, 0.8);
    }

    .exam-timer.timer-danger strong {
      color: #ff4d6d;
    }

    @media (max-width: 600px) {
      .exam-options {
        align-items: center;
      }

      .exam-timer {
        flex-direction: column;
        gap: 6px;
        text-align: center;
      }
    }
  `;

  document.head.appendChild(style);
}