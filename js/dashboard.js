const dashboardStats = document.getElementById("dashboard-stats");

const techHandle = localStorage.getItem("techHandle") || "No Handle Yet";

const streakData = JSON.parse(localStorage.getItem("streakData")) || {
  currentStreak: 0
};

const userStats = JSON.parse(localStorage.getItem("userStats")) || {
  totalSetsCompleted: 0,
  totalQuestionsAnswered: 0,
  bestScore: 0
};

dashboardStats.innerHTML = `
  <div class="stat-card">
    <h3>👤 Tech Handle</h3>
    <p>${techHandle}</p>
  </div>

  <div class="stat-card">
    <h3>🔥 Streak</h3>
    <p>${userStats.totalSetsCompleted > 0 ? streakData.currentStreak : 0} Day${streakData.currentStreak === 1 ? "" : "s"}</p>
  </div>

  <div class="stat-card">
    <h3>🏆 Best Score</h3>
    <p>${userStats.bestScore}%</p>
  </div>

  <div class="stat-card">
    <h3>📚 Sets Completed</h3>
    <p>${userStats.totalSetsCompleted}</p>
  </div>

  <div class="stat-card">
    <h3>🏀 Reps Completed</h3>
    <p>${userStats.totalQuestionsAnswered}</p>
  </div>

  <div class="stat-card">
    <h3>🧠 Status</h3>
    <p>${userStats.totalSetsCompleted > 0 ? "Active" : "Ready"}</p>
  </div>
`;