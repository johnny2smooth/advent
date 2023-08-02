import fs from "fs";
`       [H]         [S]         [D]
    [S] [C]         [C]     [Q] [L]
    [C] [R] [Z]     [R]     [H] [Z]
    [G] [N] [H] [S] [B]     [R] [F]
[D] [T] [Q] [F] [Q] [Z]     [Z] [N]
[Z] [W] [F] [N] [F] [W] [J] [V] [G]
[T] [R] [B] [C] [L] [P] [F] [L] [H]
[H] [Q] [P] [L] [G] [V] [Z] [D] [B]`;

interface StackStructure {
  [key: string]: string[];
}

let stack: StackStructure = {
  1: ["H", "T", "Z", "D"],
  2: ["Q", "R", "W", "T", "G", "C", "S"],
  3: ["P", "B", "F", "Q", "N", "R", "C", "H"],
  4: ["L", "C", "N", "F", "H", "Z"],
  5: ["G", "L", "F", "Q", "S"],
  6: ["V", "P", "W", "Z", "B", "R", "C", "S"],
  7: ["Z", "F", "J"],
  8: ["D", "L", "V", "Z", "R", "H", "Q"],
  9: ["B", "H", "G", "N", "F", "Z", "L", "D"],
};

const replaceLettersWithCommas = (string: string) =>
  string.replace(/\D+/g, " ").trim().split(" ");

const moveCrates = ([move, from, to]: string[]) =>
  stack[to].push(...stack[from].splice(-Number(move)).reverse());

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) throw err;
  data.trim().split(/\n/).map(replaceLettersWithCommas).forEach(moveCrates);

  console.log(
    Object.values(stack)
      .map((arr) => arr.pop())
      .join("")
  );
});
