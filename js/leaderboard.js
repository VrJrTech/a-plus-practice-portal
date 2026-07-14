const leaderboardBody = document.getElementById("leaderboard-body");
const leaderboardFilter = document.getElementById("leaderboard-filter");

leaderboardFilter.addEventListener("change", loadLeaderboard);

loadLeaderboard();

function loadLeaderboard() {
  const selectedCategory = leaderboardFilter.value;
  const leaderboardKey = `leaderboard_${selectedCategory}`;
  const savedLeaderboard = JSON.parse(localStorage.getItem(leaderboardKey)) || [];

  leaderboardBody.innerHTML = "";

  if (savedLeaderboard.length === 0) {
    leaderboardBody.innerHTML = `
      <tr>
        <td colspan="5">No scores yet. Be the first on the board.</td>
      </tr>
    `;
    return;
  }

  const topScores = savedLeaderboard
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  topScores.forEach((entry, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${getRankIcon(index)}</td>
      <td>${entry.techHandle || entry.name || "Unknown"}</td>
      <td>${entry.examName || selectedCategory}</td>
      <td>${entry.score}%</td>
      <td>${entry.date || "N/A"}</td>
    `;

    leaderboardBody.appendChild(row);
  });
}

function getRankIcon(index) {
  if (index === 0) return "🥇";
  if (index === 1) return "🥈";
  if (index === 2) return "🥉";
  return index + 1;
}