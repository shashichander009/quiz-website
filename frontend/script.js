const quizDB = [
  {
    question:
      "Q1 : The cake of which one of the following materials prepared with nothing",
    a: "Coconut",
    b: "Palm",
    c: "Mahua",
    d: "Karanj",
    ans: "ans1",
  },
  {
    question: "Q2 : how are you today",
    a: "option for a",
    b: "option for a",
    c: "option for a",
    d: "option for a",
    ans: "ans4",
  },
  {
    question: "Q3 : how are you today",
    a: "option for a",
    b: "option for a",
    c: "option for a",
    d: "option for a",
    ans: "ans3",
  },
  {
    question: "Q4 : how are you today",
    a: "option for a",
    b: "option for a",
    c: "option for a",
    d: "option for a",
    ans: "ans5",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");
console.log(answers);

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deSelectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }

  questionCount++;

  deSelectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
        <h3> Your Score is ${score}/${quizDB.length} 🤞 </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>`;
    showScore.classList.remove("scoreArea");
  }
});
