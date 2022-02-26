const quizData = [
  {
    question: "When was HTML launched?",
    a: "1996",
    b: "1999",
    c: "1993",
    d: "2000",
    correct: "c",
  },
  {
    question: "What is the best programming language in 2022?",
    a: "Java",
    b: "C",
    c: "Python ",
    d: "Javascript",
    correct: "c",
  },
  {
    question: "Who is the president of the U.S.A?",
    a: "Jason Akbar",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Joe Biden",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notion",
    d: "Application Programming Interface",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
let currentQuiz = 0;
let score = 0;
const questionEl = document.querySelector("#question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.querySelector("#submit");
const quiz = document.querySelector("#quiz");

const answersEls = document.querySelectorAll(".answer");

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  submitBtn.innertext = "Submit";
}

function getSelected() {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deselect() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", function () {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
      console.log(score);
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      //TO DO: Show Results
      score >= 3
        ? (quiz.innerHTML = `<h2>Good job! Your score : ${score}/${quizData.length} 🎉 </h2>  <button onClick="location.reload()">Reload</button>`)
        : (quiz.innerHTML = `<h2>Good luck next time! Your score : ${score}/${quizData.length} 😖 </h2>
        <button onClick="location.reload()">Reload</button>`);
    }
  }

  deselect();
});
///////////////////////////////
///////////////////////////////
// submitBtn.addEventListener("click", function () {
//   if (submitBtn.innerText === "Restart") {
//     currentQuiz = 0;
//     score = 0;
//     loadQuiz();

//     submitBtn.addEventListener("click", function () {
//       const answer = getSelected();
//       console.log(answer);
//       if (answer) {
//         if (answer === quizData[currentQuiz].correct) {
//           score++;
//           console.log(score);
//         }
//         currentQuiz++;
//         if (currentQuiz < quizData.length) {
//           loadQuiz();
//         } else {
//           //TO DO: Show Results
//           score >= 3
//             ? alert(`Great Job! Your score is ${score} 🎉`)
//             : alert(`Good luck next time ${score} 😖`);
//           submitBtn.innerText = "Restart";
//         }
//       }

//       deselect();
//     });
//   }
// });
