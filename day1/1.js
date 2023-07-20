// const fs = require("fs");

// fs.readFile("input.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(topElves(data, 3));
//   console.log(codingSerenityExample(data));
//   return;
// });

const summonPuzzleInput = async () => {
  const res = await fetch("https://adventofcode.com/2022/day/1/input");
  const text = await res.text();
  return text;
};

let puzzleInput = await summonPuzzleInput();
console.log(puzzleInput);

const topElves = (txtInputStr, nElves = 1) => {
  let calorieAcc = 0;
  let totalCals = [];

  let txtArr = txtInputStr.split(/\n/);

  txtArr.forEach((input) => {
    if (input === "") {
      totalCals.push(calorieAcc);
      calorieAcc = 0;
    } else {
      calorieAcc += +input;
    }
  });

  return totalCals
    .sort((a, b) => b - a)
    .slice(0, nElves)
    .reduce((prev, curr) => prev + curr, 0);
};

const codingSerenityExample = (input, nElves = 1) => {
  const numberGroups = input.split(/\n\n/);
  const getSumOfGroup = (group) =>
    group
      .split("\n")
      .map(Number)
      .reduce((sum, num) => sum + num, 0);

  const groupSums = numberGroups.map(getSumOfGroup);
  return groupSums;
};
