import "./styles.css";

const answers = [
  "Так",
  "Ні",
  "Можливо",
  "Запитайте пізніше",
  "Дуже сумнівно",
  "Звісно!",
  "Намагайтеся знову",
  "Без сумнівів",
  "Сконцентруйтеся і запитайте знову",
];
const ball = document.querySelector(".magic-ball");
const answerDiv = document.querySelector(".answer");
const askButton = document.querySelector(".ask-button");

askButton.addEventListener("click", function () {
  ball.classList.add("shake");
  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  setTimeout(() => {
    ball.classList.remove("shake");
    answerDiv.textContent = randomAnswer;
    answerDiv.style.opacity = 1;
  }, 2000);
});
