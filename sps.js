let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const messec = document.querySelector(".mes");

const userScorePara = document.querySelector(".us-sc");
const compScorePara = document.querySelector(".co-sc");

const plcho = document.querySelector(".uscho");
const cocho = document.querySelector(".cocho");

const genComCho = () => {
  const options = ["rock", "paper", "scissors"];
  const arropt = Math.floor(Math.random() * 3);
  return options[arropt];
};

const gameDraw = () => {
  messec.innerHTML = "Game Draw, Try again";
};

const showWin = (userWin, compChoi, userChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    messec.innerHTML = `Game Win, ${userChoice} beets ${compChoi}`;
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    messec.innerHTML = `Game Lose, ${compChoi} beets ${userChoice}`;
  }
};

const gamePlay = (userChoice) => {
  const compChoi = genComCho();

  plcho.innerText = `Player chose: ${userChoice}`;
  cocho.innerText = `Computer chose: ${compChoi}`;  

  if (userChoice === compChoi) {
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoi === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoi === "scissors" ? false : true;
    } else {
      userWin = compChoi === "rock" ? false : true;
    }
    showWin(userWin, compChoi, userChoice);
  }
};

choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    gamePlay(userChoice);
  });
});
