// This is the sample DB which we will replace with API calls.

const quizDB = [
  {
    question:
      "Q1 : The cake of which one of the following materials prepared with nothing",
    a: "Coconut",
    b: "Palm",
    c: "Mahua",
    d: "Karanj",
    ans: "ans2",
  },
  {
    question: "Q2 : What is the Capital of India",
    a: "New Delhi",
    b: "Jaipur",
    c: "Kolkata",
    d: "Chennai",
    ans: "ans1",
  },
  {
    question: "Q3 : Who is PM of India",
    a: "Modi",
    b: "Rahul",
    c: "Lalu",
    d: "Mamta",
    ans: "ans1",
  },
  {
    question: "Q4 : Who is the CM Of Delhi",
    a: "Mamta",
    b: "Kejri",
    c: "Modi",
    d: "Yogi",
    ans: "ans2",
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
