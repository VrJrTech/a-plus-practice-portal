function getTechHandle() {
  return localStorage.getItem("techHandle");
}

function saveTechHandle(name) {
  localStorage.setItem("techHandle", name);
}

function promptForTechHandle() {
  let handle = getTechHandle();

  if (!handle) {
    handle = prompt(
      "Welcome to RossHouse Labs!\n\nChoose your Tech Handle:"
    );

    if (!handle || handle.trim() === "") {
      handle = "Guest Operator";
    }

    saveTechHandle(handle.trim());
  }

  return handle;
}

function updateWelcomeMessage() {
  const welcome = document.getElementById("welcome-message");

  if (welcome) {
    const handle = promptForTechHandle();
    welcome.innerText = `👋 Welcome back, ${handle}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateWelcomeMessage();
});