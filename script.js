
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  const topics = Object.keys(questions);
  app.innerHTML = '<h2>Wähle ein Thema:</h2>';
  topics.forEach(topic => {
    const btn = document.createElement("button");
    btn.textContent = topic;
    btn.style.display = "block";
    btn.style.margin = "1rem 0";
    btn.onclick = () => startQuiz(topic);
    app.appendChild(btn);
  });
});

function startQuiz(topic) {
  const qList = questions[topic];
  let current = 0, correct = 0;
  const app = document.getElementById("app");
  showQuestion();

  function showQuestion() {
    if (current >= qList.length) {
      app.innerHTML = `<h2>Fertig!</h2><p>Richtig: ${correct} von ${qList.length}</p>`;
      return;
    }
    const q = qList[current];
    app.innerHTML = `<h2>${q.q}</h2>`;
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.style.display = "block";
      btn.onclick = () => {
        if (i === q.correct) correct++;
        current++;
        showQuestion();
      };
      app.appendChild(btn);
    });
  }
}
