const form = document.getElementById("feedback-form");

const techHandleInput = document.getElementById("tech-handle");

// Auto-fill saved Tech Handle if available
const savedHandle = localStorage.getItem("techHandle");

if (savedHandle) {
  techHandleInput.value = savedHandle;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const techHandle =
    document.getElementById("tech-handle").value.trim();

  const email =
    document.getElementById("email").value.trim();

  const feedbackType =
    document.getElementById("feedback-type").value;

  const questionId =
    document.getElementById("question-id").value.trim();

  const message =
    document.getElementById("message").value.trim();

  const subject =
    `A+ Practice Portal Feedback - ${feedbackType}`;

  const body =
`Tech Handle: ${techHandle}

Email: ${email}

Feedback Type: ${feedbackType}

Question ID: ${questionId}

Message:
${message}`;

  const mailto =
    `mailto:VrJr.tech@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
});