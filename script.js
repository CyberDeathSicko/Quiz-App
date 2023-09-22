
let currentQuestionIndex = 0;
let score = 0;
let darkMode = false;


const bodyElement = document.body;
const quizContainer = document.createElement("div");
quizContainer.classList.add("quiz-container");
document.body.appendChild(quizContainer);

const questionElement = document.createElement("div");
questionElement.classList.add("question");
quizContainer.appendChild(questionElement);

const questionTitleElement = document.createElement("h1");
questionElement.appendChild(questionTitleElement);

const questionTextElement = document.createElement("p");
questionElement.appendChild(questionTextElement);

const optionsElement = document.createElement("div");
optionsElement.classList.add("options");
quizContainer.appendChild(optionsElement);

const nextButton = document.createElement("button");
nextButton.id = "nextButton";
nextButton.textContent = "Next";
quizContainer.appendChild(nextButton);

const scoreElement = document.createElement("div");
scoreElement.classList.add("score");
quizContainer.appendChild(scoreElement);

const questionNumberElement = document.createElement("span");
scoreElement.appendChild(questionNumberElement);

const totalQuestionsElement = document.createElement("span");
totalQuestionsElement.id = "totalQuestions";
scoreElement.appendChild(totalQuestionsElement);

const scoreLabelElement = document.createElement("span");
scoreLabelElement.textContent = "Score: ";
scoreElement.appendChild(scoreLabelElement);

const scoreValueElement = document.createElement("span");
scoreValueElement.id = "score";
scoreValueElement.textContent = score;
scoreElement.appendChild(scoreValueElement);


const darkModeToggle = document.createElement("button");
darkModeToggle.id = "darkModeToggle";
darkModeToggle.textContent = "Toggle Dark Mode";
scoreElement.appendChild(darkModeToggle);


function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionTitleElement.textContent = `Question ${currentQuestionIndex + 1}:`;
    questionTextElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = index;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(` ${option}`));
        optionsElement.appendChild(label);
    });

    questionNumberElement.textContent = currentQuestionIndex + 1;
    totalQuestionsElement.textContent = questions.length;
}


function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
    }

    if (parseInt(selectedAnswer.value) === questions[currentQuestionIndex].correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert(`Quiz completed! Your score is ${score}/${questions.length}`);
    }

    scoreValueElement.textContent = score;
}


function toggleDarkMode() {
    darkMode = !darkMode;
    if (darkMode) {
        bodyElement.classList.add("dark-mode");
    } else {
        bodyElement.classList.remove("dark-mode");
    }
}


displayQuestion();

nextButton.addEventListener("click", checkAnswer);
darkModeToggle.addEventListener("click", toggleDarkMode);