let userS = 0;
let compS = 0;

let choice1 = document.querySelector(".choice1");

let choice2 = document.querySelector(".choice2");

let choice3 = document.querySelector(".choice3");

let para = document.querySelector("#press");

let a = document.querySelector("#user");

let b = document.querySelector("#computer");

const draw = () => {
  para.innerText = "Draw.Play Again!";
  para.style.background = "blue";
};

const Winner = (u, user, comp) => {
  if (u == true) {
    para.innerText = `You Win! ${user} beats computer's ${comp}`;

    userS++;
    a.innerText = userS;
    para.style.background = "green";
  } else {
    para.innerText = `You lose. ${comp} beats your ${user} `;
    para.style.background = "red";

    compS++;
    b.innerText = compS;
  }
};
const compG = () => {
  let arr = ["rock", "paper", "scissors"];
  const p = Math.floor(Math.random() * 3); //main logic for computer choicing
  return arr[p];
};

const playG = (user) => {
  const comp = compG();

  if (user === comp) {
    draw();
  } else {
    let userWin = true;
    if (user == "rock" && comp === "paper") {
      userWin = false;
    } else if (user === "rock" && comp === "scissors") {
      userWin = true;
    } else if (user === "paper" && comp === "rock") {
      userWin = true;
    } else if (user === "paper" && comp === "scissors") {
      userWin = false;
    } else if (user === "scissors" && comp === "rock") {
      userWin = false;
    } else if (user === "scissors" && comp === "paper") {
      userWin = true;
    }
    Winner(userWin, user, comp);
  }
};

choice1.addEventListener("click", () => {
  const user = choice1.getAttribute("id");
  playG(user);
});

choice2.addEventListener("click", () => {
  const user = choice2.getAttribute("id");
  playG(user);
});

choice3.addEventListener("click", () => {
  const user = choice3.getAttribute("id");
  playG(user);
});
