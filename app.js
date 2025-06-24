let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

function renderQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = q.frage;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
    q.antworten.forEach((antwort, index) => {
        const btn = document.createElement("button");
        btn.innerText = antwort;
        btn.onclick = () => checkAnswer(index === q.richtig);
        answersDiv.appendChild(btn);
    });
    updateStats();
}

function checkAnswer(isCorrect) {
    if (isCorrect) correctCount++;
    else wrongCount++;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        alert("Quiz beendet!");
    }
}

function updateStats() {
    document.getElementById("correct").innerText = "Richtig: " + correctCount;
    document.getElementById("wrong").innerText = "Falsch: " + wrongCount;
    document.getElementById("remaining").innerText = "Offen: " + (questions.length - currentQuestionIndex);
}

window.onload = renderQuestion;
