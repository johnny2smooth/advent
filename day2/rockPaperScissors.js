const fs = require("fs");
// A === Rock === X
// B === Paper === Y
// C === Scissors === Z

// Original Structure
// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock.
// const MOVES = {
//   X: 1,
//   Y: 2,
//   Z: 3,
//   A: 1,
//   B: 2,
//   C: 3,
// };

// Second Structure, two lookup tables
// One of the lookup tables is two levels deep
// const outcomeScore = {
//   A: { X: 3, Y: 6, Z: 0 },
//   B: { X: 0, Y: 3, Z: 6 },
//   C: { X: 6, Y: 0, Z: 3 },
// };

// const myMoveScore = { X: 1, Y: 2, Z: 3 };

// Third Structure: outcomeScore and myMoveScore can be added together
// const outcomeScore = {
//   A: { X: 4, Y: 8, Z: 3 },
//   B: { X: 1, Y: 5, Z: 9 },
//   C: { X: 7, Y: 2, Z: 6 },
// };

// Fourth Structure: Combine the pairs to remove the string split
const outcomeScore = {
  "A X": 4,
  "A Y": 8,
  "A Z": 3,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 7,
  "C Y": 2,
  "C Z": 6,
};

const rpsDuel = (pair) => outcomeScore[pair];

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  let splitString = data.split(/\n/);
  let score = splitString.map(rpsDuel);
  let totalScore = score.reduce((sum, num) => sum + num, 0);
  console.log(totalScore);
});

// gold start achieved

// step 2
// X --> lose
// Y --> draw
// Z --> win

// const outcomes = {
//   X: 0,
//   Y: 3,
//   Z: 6,
//   A: "X",
//   B: "Y",
//   C: "Z",
// };

// const winningCombos = {
//   A: "Y",
//   B: "Z",
//   C: "X",
// };

// const losingCombos = {
//   B: "X",
//   C: "Y",
//   A: "Z",
// };

// const rpsDuel2 = (input) => {
//   let totalScore = 0;
//   const pairs = input.trim().split(/\n/);
//   pairs.forEach((pair) => {
//     const [elfMove, myMove] = [...pair.split(" ")];
//     if (outcomes[myMove] === 0) {
//       totalScore += outcomes[myMove] + MOVES[losingCombos[elfMove]];
//     }
//     if (outcomes[myMove] === 3) {
//       totalScore += outcomes[myMove] + MOVES[outcomes[elfMove]];
//     }
//     if (outcomes[myMove] === 6) {
//       totalScore += outcomes[myMove] + MOVES[winningCombos[elfMove]];
//     }
//   });
//   return totalScore;
// };

// console.log(rpsDuel2(test2));
