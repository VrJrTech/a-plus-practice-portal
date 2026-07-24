"use strict";

// A+ Practice Portal quiz engine — hardened against sparse arrays and bad data.

let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];

let selectedQuizName = "";
let timedExamEnabled = false;
let timerInterval = null;
let examEndTime = null;
let quizFinished = false;

const FULL_EXAM_MINUTES = 90;
const FULL_EXAM_QUESTION_LIMIT = 90;
const CATEGORY_QUESTION_LIMIT = 25;

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

initializeQuizPage();

function initializeQuizPage() {
  const requiredElements = {
    startBtn,
    setupScreen,
    quizScreen,
    studentNameInput,
    quizSelect,
    examOptions,
    timedExamToggle,
    examTimer,
    timerDisplay,
    questionCount,
    questionText,
    choicesContainer,
    nextBtn,
    prevBtn,
    progressBar
  };

  const missingElements = Object.entries(requiredElements)
    .filter(([, element]) => !element)
    .map(([name]) => name);

  if (missingElements.length > 0) {
    console.error(
      "[Quiz] Cannot initialize. Missing page elements:",
      missingElements
    );
    return;
  }

  addQuizStyles();
  restoreTechHandle();
  updateExamOptions();

  startBtn.addEventListener("click", startQuiz);
  quizSelect.addEventListener("change", updateExamOptions);
  nextBtn.addEventListener("click", goToNextQuestion);
  prevBtn.addEventListener("click", goToPreviousQuestion);
}

function restoreTechHandle() {
  const savedHandle = safeStorageGet("techHandle");

  if (savedHandle) {
    studentNameInput.value = savedHandle;
  }
}

function updateExamOptions() {
  const isFullExam = quizSelect.value === "Full A+ Exam";

  examOptions.classList.toggle("hidden", !isFullExam);

  if (!isFullExam) {
    timedExamToggle.checked = false;
  }
}

function startQuiz() {
  if (quizFinished) {
    quizFinished = false;
  }

  const techHandle = studentNameInput.value.trim();

  if (!techHandle) {
    alert("Please enter your Tech Handle.");
    studentNameInput.focus();
    return;
  }

  selectedQuizName = quizSelect.value;
  timedExamEnabled =
    selectedQuizName === "Full A+ Exam" &&
    timedExamToggle.checked;

  const sourceQuestions = getQuestionsByCategory(selectedQuizName);
  const validation = validateQuestionCollection(
    sourceQuestions,
    selectedQuizName
  );

  if (validation.validQuestions.length === 0) {
    console.error(
      `[Quiz] "${selectedQuizName}" has no valid questions.`,
      validation.invalidEntries
    );
    alert(
      "No valid questions are available in this category yet. Please choose another training set."
    );
    return;
  }

  if (validation.invalidEntries.length > 0) {
    console.warn(
      `[Quiz] Skipped ${validation.invalidEntries.length} malformed or empty question entr${validation.invalidEntries.length === 1 ? "y" : "ies"} in "${selectedQuizName}".`,
      validation.invalidEntries
    );
  }

  const questionLimit =
    selectedQuizName === "Full A+ Exam"
      ? FULL_EXAM_QUESTION_LIMIT
      : CATEGORY_QUESTION_LIMIT;

  currentQuestions = shuffleArray(validation.validQuestions)
    .slice(0, questionLimit);

  userAnswers = new Array(currentQuestions.length).fill(null);
  currentQuestionIndex = 0;
  quizFinished = false;

  safeStorageSet("techHandle", techHandle);

  setupScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  if (timedExamEnabled) {
    startExamTimer(FULL_EXAM_MINUTES);
  } else {
    hideExamTimer();
  }

  console.info("[Quiz] Training set started.", {
    category: selectedQuizName,
    sourceEntries: validation.sourceLength,
    validEntries: validation.validQuestions.length,
    skippedEntries: validation.invalidEntries.length,
    selectedQuestions: currentQuestions.length,
    timedExam: timedExamEnabled
  });

  renderQuestion();
}

function getQuestionsByCategory(category) {
  const categories = {
    Hardware:
      typeof hardwareQuestions !== "undefined"
        ? hardwareQuestions
        : [],
    Networking:
      typeof networkingQuestions !== "undefined"
        ? networkingQuestions
        : [],
    "Mobile Devices":
      typeof mobileDevicesQuestions !== "undefined"
        ? mobileDevicesQuestions
        : [],
    "Virtualization & Cloud":
      typeof virtualizationCloudQuestions !== "undefined"
        ? virtualizationCloudQuestions
        : [],
    "Hardware & Network Troubleshooting":
      typeof hardwareNetworkTroubleshootingQuestions !== "undefined"
        ? hardwareNetworkTroubleshootingQuestions
        : [],
    "Operating Systems":
      typeof operatingSystemsQuestions !== "undefined"
        ? operatingSystemsQuestions
        : [],
    Security:
      typeof securityQuestions !== "undefined"
        ? securityQuestions
        : [],
    "Software Troubleshooting":
      typeof softwareTroubleshootingQuestions !== "undefined"
        ? softwareTroubleshootingQuestions
        : [],
    "Operational Procedures":
      typeof operationalProceduresQuestions !== "undefined"
        ? operationalProceduresQuestions
        : [],
    "Full A+ Exam":
      typeof questionBank !== "undefined"
        ? questionBank
        : []
  };

  return categories[category] || [];
}

function validateQuestionCollection(source, categoryName) {
  if (!Array.isArray(source)) {
    return {
      sourceLength: 0,
      validQuestions: [],
      invalidEntries: [
        {
          index: null,
          id: null,
          reason: `${categoryName} is not an array`
        }
      ]
    };
  }

  const validQuestions = [];
  const invalidEntries = [];

  // Array.from converts sparse-array holes into explicit undefined values,
  // allowing every bad slot to be detected and reported.
  Array.from(source).forEach((question, index) => {
    const reason = getQuestionValidationError(question);

    if (reason) {
      invalidEntries.push({
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

    validQuestions.push({
      ...question,
      question: question.question.trim(),
      choices: question.choices.map((choice) => choice.trim()),
      answer: question.answer.trim()
    });
  });

  return {
    sourceLength: source.length,
    validQuestions,
    invalidEntries
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
    return "At least two answer choices are required";
  }

  if (
    question.choices.some(
      (choice) =>
        typeof choice !== "string" ||
        choice.trim() === ""
    )
  ) {
    return "One or more answer choices are empty or invalid";
  }

  if (
    typeof question.answer !== "string" ||
    question.answer.trim() === ""
  ) {
    return "Correct answer is missing";
  }

  const normalizedChoices = question.choices.map((choice) => choice.trim());

  if (!normalizedChoices.includes(question.answer.trim())) {
    return "Correct answer does not match any answer choice";
  }

  return null;
}

function renderQuestion() {
  if (quizFinished) {
    return;
  }

  // This is a second line of defense. Questions are validated at startup,
  // but a later accidental mutation still cannot terminate the set early.
  while (
    currentQuestionIndex < currentQuestions.length &&
    getQuestionValidationError(currentQuestions[currentQuestionIndex])
  ) {
    console.error(
      "[Quiz] Removed an invalid question found during rendering.",
      {
        index: currentQuestionIndex,
        question: currentQuestions[currentQuestionIndex]
      }
    );

    currentQuestions.splice(currentQuestionIndex, 1);
    userAnswers.splice(currentQuestionIndex, 1);
  }

  if (currentQuestions.length === 0) {
    stopExamTimer();
    alert(
      "This training set contains no usable questions. Please choose another category."
    );
    returnToSetup();
    return;
  }

  if (currentQuestionIndex >= currentQuestions.length) {
    currentQuestionIndex = currentQuestions.length - 1;
  }

  const question = currentQuestions[currentQuestionIndex];

  questionCount.textContent =
    `Rep ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
  questionText.textContent = question.question;
  choicesContainer.replaceChildren();

  question.choices.forEach((choice) => {
    const button = document.createElement("button");

    button.type = "button";
    button.classList.add("choice");
    button.textContent = choice;

    if (userAnswers[currentQuestionIndex] === choice) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      selectAnswer(choice);
    });

    choicesContainer.appendChild(button);
  });

  const percent =
    ((currentQuestionIndex + 1) / currentQuestions.length) * 100;

  progressBar.style.width = `${percent}%`;
  prevBtn.disabled = currentQuestionIndex === 0;

  const isLastQuestion =
    currentQuestionIndex === currentQuestions.length - 1;

  nextBtn.textContent = isLastQuestion
    ? "Finish Set 🏀"
    : "Next Rep ➜";
}

function selectAnswer(choice) {
  if (quizFinished || !currentQuestions[currentQuestionIndex]) {
    return;
  }

  userAnswers[currentQuestionIndex] = choice;

  choicesContainer
    .querySelectorAll(".choice")
    .forEach((button) => {
      button.classList.toggle(
        "selected",
        button.textContent === choice
      );
    });
}

function goToNextQuestion() {
  if (quizFinished || currentQuestions.length === 0) {
    return;
  }

  const isLastQuestion =
    currentQuestionIndex >= currentQuestions.length - 1;

  if (isLastQuestion) {
    finishQuiz();
    return;
  }

  currentQuestionIndex += 1;
  renderQuestion();
}

function goToPreviousQuestion() {
  if (quizFinished) {
    return;
  }

  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderQuestion();
  }
}

function finishQuiz() {
  if (quizFinished || currentQuestions.length === 0) {
    return;
  }

  quizFinished = true;
  nextBtn.disabled = true;
  prevBtn.disabled = true;
  stopExamTimer();

  const finalValidation = validateQuestionCollection(
    currentQuestions,
    selectedQuizName
  );

  if (finalValidation.invalidEntries.length > 0) {
    console.error(
      "[Quiz] Invalid questions were removed before results were saved.",
      finalValidation.invalidEntries
    );
  }

  const validQuestions = [];
  const validAnswers = [];

  currentQuestions.forEach((question, index) => {
    if (!getQuestionValidationError(question)) {
      validQuestions.push(question);
      validAnswers.push(
        typeof userAnswers[index] === "string"
          ? userAnswers[index]
          : null
      );
    }
  });

  if (validQuestions.length === 0) {
    console.error("[Quiz] No valid questions remained at submission.");
    alert(
      "Your results could not be created because the training data was invalid."
    );
    quizFinished = false;
    nextBtn.disabled = false;
    prevBtn.disabled = currentQuestionIndex === 0;
    return;
  }

  const correctCount = validQuestions.reduce(
    (total, question, index) =>
      total + (validAnswers[index] === question.answer ? 1 : 0),
    0
  );

  const totalQuestions = validQuestions.length;
  const scorePercent = Math.round(
    (correctCount / totalQuestions) * 100
  );
  const techHandle =
    safeStorageGet("techHandle") || "Anonymous";
  const streakData = updateStreak();

  updateUserStats(scorePercent, totalQuestions);

  const latestResult = {
    version: 2,
    completedAt: new Date().toISOString(),
    techHandle,
    examName: selectedQuizName,
    scorePercent,
    correctCount,
    totalQuestions,
    questions: validQuestions,
    userAnswers: validAnswers,
    streak: streakData.currentStreak,
    timedExam: timedExamEnabled
  };

  const resultSaved = safeStorageSet(
    "latestResult",
    JSON.stringify(latestResult)
  );

  if (!resultSaved) {
    alert(
      "Your browser could not save the results. Please check its storage settings and try again."
    );
    quizFinished = false;
    nextBtn.disabled = false;
    prevBtn.disabled = currentQuestionIndex === 0;
    return;
  }

  saveToLeaderboard(
    techHandle,
    selectedQuizName,
    scorePercent
  );

  console.info("[Quiz] Training set completed.", {
    category: selectedQuizName,
    correctCount,
    totalQuestions,
    scorePercent
  });

  window.location.assign("results.html");
}

function returnToSetup() {
  currentQuestions = [];
  userAnswers = [];
  currentQuestionIndex = 0;
  quizFinished = false;
  nextBtn.disabled = false;
  prevBtn.disabled = true;
  quizScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
}

function updateUserStats(score, repsCompleted) {
  const defaultStats = {
    totalSetsCompleted: 0,
    totalQuestionsAnswered: 0,
    bestScore: 0
  };
  const savedStats = safeJsonParse(
    safeStorageGet("userStats"),
    defaultStats,
    "userStats"
  );
  const stats =
    savedStats &&
    typeof savedStats === "object" &&
    !Array.isArray(savedStats)
      ? savedStats
      : { ...defaultStats };

  stats.totalSetsCompleted =
    toNonNegativeNumber(stats.totalSetsCompleted) + 1;
  stats.totalQuestionsAnswered =
    toNonNegativeNumber(stats.totalQuestionsAnswered) +
    repsCompleted;
  stats.bestScore = Math.max(
    toNonNegativeNumber(stats.bestScore),
    score
  );

  safeStorageSet("userStats", JSON.stringify(stats));
}

function saveToLeaderboard(techHandle, examName, score) {
  const leaderboardKey = `leaderboard_${examName}`;
  const savedLeaderboard = safeJsonParse(
    safeStorageGet(leaderboardKey),
    [],
    leaderboardKey
  );
  const leaderboard = Array.isArray(savedLeaderboard)
    ? savedLeaderboard
    : [];

  leaderboard.push({
    techHandle,
    examName,
    score,
    date: new Date().toLocaleDateString()
  });

  safeStorageSet(
    leaderboardKey,
    JSON.stringify(leaderboard)
  );
}

function updateStreak() {
  const defaultStreak = {
    currentStreak: 0,
    lastTrainingDate: null
  };
  const savedStreak = safeJsonParse(
    safeStorageGet("streakData"),
    defaultStreak,
    "streakData"
  );
  const streakData =
    savedStreak &&
    typeof savedStreak === "object" &&
    !Array.isArray(savedStreak)
      ? savedStreak
      : { ...defaultStreak };
  const today = getLocalDateString(new Date());
  const yesterdayDate = new Date();

  yesterdayDate.setDate(yesterdayDate.getDate() - 1);

  const yesterday = getLocalDateString(yesterdayDate);

  streakData.currentStreak = toNonNegativeNumber(
    streakData.currentStreak
  );

  if (streakData.lastTrainingDate === today) {
    return streakData;
  }

  streakData.currentStreak =
    streakData.lastTrainingDate === yesterday
      ? streakData.currentStreak + 1
      : 1;
  streakData.lastTrainingDate = today;

  safeStorageSet(
    "streakData",
    JSON.stringify(streakData)
  );

  return streakData;
}

function getLocalDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function toNonNegativeNumber(value) {
  const number = Number(value);

  return Number.isFinite(number) && number >= 0
    ? number
    : 0;
}

function shuffleArray(array) {
  const shuffled = Array.from(array);

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index]
    ];
  }

  return shuffled;
}

function startExamTimer(minutes) {
  stopExamTimer();
  examTimer.classList.remove("hidden");
  examEndTime = Date.now() + minutes * 60 * 1000;
  updateTimerDisplay();
  timerInterval = window.setInterval(updateTimerDisplay, 1000);
}

function updateTimerDisplay() {
  const remaining = examEndTime - Date.now();

  if (remaining <= 0) {
    timerDisplay.textContent = "00:00";
    stopExamTimer();
    alert("Time is up. Your exam will now be submitted.");
    finishQuiz();
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  timerDisplay.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  examTimer.classList.remove("timer-warning", "timer-danger");

  if (totalSeconds <= 300) {
    examTimer.classList.add("timer-danger");
  } else if (totalSeconds <= 900) {
    examTimer.classList.add("timer-warning");
  }
}

function stopExamTimer() {
  if (timerInterval !== null) {
    window.clearInterval(timerInterval);
    timerInterval = null;
  }
}

function hideExamTimer() {
  stopExamTimer();
  examTimer.classList.add("hidden");
  examTimer.classList.remove("timer-warning", "timer-danger");
  timerDisplay.textContent = "90:00";
}

function safeStorageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error(`[Storage] Could not read "${key}".`, error);
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.error(`[Storage] Could not save "${key}".`, error);
    return false;
  }
}

function safeJsonParse(value, fallback, label) {
  if (typeof value !== "string" || value.trim() === "") {
    return fallback;
  }

  try {
    return JSON.parse(value);
  } catch (error) {
    console.warn(
      `[Storage] Ignoring invalid JSON stored for "${label}".`,
      error
    );
    return fallback;
  }
}

function addQuizStyles() {
  if (document.getElementById("quiz-option-styles")) {
    return;
  }

  const style = document.createElement("style");

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
