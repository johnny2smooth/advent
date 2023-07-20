const fs = require("fs");
// A === Rock === X
// B === Paper === Y
// C === Scissors === Z

// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock.
const MOVES = {
  X: 1,
  Y: 2,
  Z: 3,
  A: 1,
  B: 2,
  C: 3,
};

// WinningCombos
// A   Y
// 1 - 2 === -1
// B   Z
// 2 - 3 === -1
// C   X
// 3 - 1 === 2

// LosingCombos
// B   X
// 2 - 1 === 1
// C   Y
// 3 - 2 === 1
// A   Z
// 1 - 3 === -2

// 3 - 2 === win

// 0: if loss
// 3: if they're the same
// 6: if you win

let test = `A Y
B X
C Z`;

const rpsDuel = (input) => {
  let totalScore = 0;
  const pairs = input.trim().split(/\n/);
  pairs.forEach((pair) => {
    const [elfMove, myMove] = [...pair.split(" ")];
    let duel = MOVES[elfMove] - MOVES[myMove];

    if (duel === 0) {
      totalScore += MOVES[myMove] + 3;
    }
    if (duel === -1 || duel === 2) {
      totalScore += MOVES[myMove] + 6;
    }
    if (duel === 1 || duel === -2) {
      totalScore += MOVES[myMove];
    }
  });
  return totalScore;
};

// console.log(rpsDuel(test));

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(rpsDuel(data));
  console.log(rpsDuel2(data));
});

// gold start achieved

// step 2
// X --> lose
// Y --> draw
// Z --> win

const outcomes = {
  X: 0,
  Y: 3,
  Z: 6,
  A: "X",
  B: "Y",
  C: "Z",
};

const winningCombos = {
  A: "Y",
  B: "Z",
  C: "X",
};

const losingCombos = {
  B: "X",
  C: "Y",
  A: "Z",
};

const rpsDuel2 = (input) => {
  let totalScore = 0;
  const pairs = input.trim().split(/\n/);
  pairs.forEach((pair) => {
    const [elfMove, myMove] = [...pair.split(" ")];
    if (outcomes[myMove] === 0) {
      totalScore += outcomes[myMove] + MOVES[losingCombos[elfMove]];
    }
    if (outcomes[myMove] === 3) {
      totalScore += outcomes[myMove] + MOVES[outcomes[elfMove]];
    }
    if (outcomes[myMove] === 6) {
      totalScore += outcomes[myMove] + MOVES[winningCombos[elfMove]];
    }
  });
  return totalScore;
};

console.log(rpsDuel2(test2));
