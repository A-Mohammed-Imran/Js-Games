let boxs = document.querySelectorAll(".box");
let rsbtn = document.querySelector(".reset");
let mesp = document.querySelector(".mes");
let nebtn = document.querySelector(".new");
let wnsec = document.querySelector("#winsec");

let turn0 = true;

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const rgame = () => {
  turn0 = true;
  ebox();
  wnsec.classList.add("hide");
};

const ebox = () => {
  for (let boxe of boxs) {
    boxe.disabled = false;
    boxe.innerText = "";
  }
};

const dwin = (win) => {
  mesp.innerText = `Winner is ${win}`;
  wnsec.classList.remove("hide");
  dbox();
};

const dbox = () => {
  for (let boxe of boxs) {
    boxe.disabled = true;
  }
};



const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxs[pattern[2]].innerText);

    let pos1val = boxs[pattern[0]].innerText;
    let pos2val = boxs[pattern[1]].innerText;
    let pos3val = boxs[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        dwin(pos1val);
      }
    }
  }
};

nebtn.addEventListener("click", rgame);
rsbtn.addEventListener("click", rgame);
