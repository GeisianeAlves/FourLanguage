// Declaração variáveis
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b"];
let points = 0;
let actualQuestion = 0;

const questions = [
  {   
    "question": "Do you live in the town centre?  ",
    "answers": [     
      { "answer": "My apartment’s quite small.", "correct": false },
      { "answer": "No, my apartment’s about five kilometres from here.", "correct": true }
    ]  },
  {
    "question": "Right. Do you live in a house or an apartment?"  , 
    "answers": [
      { "answer": "An apartment. It’s quite small, just one bedroom. ", "correct": true },
      { "answer": "My house is very expensive.",  "correct": false  }
    ] },
  {
    "question": "Do you have a garden?" ,
    "answers": [
      { "answer": "My apartment’s very modern." , "correct": false },
      { "answer": "No, but the view is beautiful.",  "correct": true }
    ] },
  {
    "question": "What do you do? ",
    "answers": [
      { "answer": "I’m a sales assistant. I work in a shop.",  "correct": true },
      {  "answer": "I work in Washington.", "correct": false }
    ] },
  {
    "question": "When do you finish work? ",
    "answers": [
      { "answer": "I get up at quarter to six.", "correct": false },
      { "answer": "I finish work at six.", "correct": true }
  ]}
  ]

function init() {
  createQuestion(0);
}

function createQuestion(i) {
  const oldButtons = answersBox.querySelectorAll("button");
  oldButtons.forEach(function(btn) {
    btn.remove();
  });

  // Alterar o texto da pergunta
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");
  questionText.textContent = questions[i].question;
  questionNumber.textContent = "question " + (i + 1) + " of 5";

  questions[i].answers.forEach(function(answer, i) {

    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");
    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");
    answersBox.appendChild(answerTemplate);

    answerTemplate.addEventListener("click", function() {
      checkAnswer(this);
    });
  });
  actualQuestion++;
}


function checkAnswer(btn) {
  const buttons = answersBox.querySelectorAll("button");
  buttons.forEach(function(button) {

    if(button.getAttribute("correct-answer") === "true") {
      button.classList.add("correct-answer");
      if(btn === button) {
        points++;
      }
    } else {
      button.classList.add("wrong-answer");
    }
  });
  nextQuestion();
}


function nextQuestion() {
  setTimeout(function() {
    if(actualQuestion >= questions.length) {
      showSucccessMessage();
      return;
    }
    createQuestion(actualQuestion);
  }, 800);
}


function showSucccessMessage() {

  hideOrShowQuizz();
  const score = ((points / questions.length) * 100).toFixed(2);
  const displayScore = document.querySelector("#display-score span");
  displayScore.textContent = score.toString();

  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;

  const totalQuestions = document.querySelector("#questions-qty");
  totalQuestions.textContent = questions.length;

}

function hideOrShowQuizz() {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
}

const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function() {
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});


init();
