import fs from "fs";
const test = `14-38,14-14
2-10,3-55
36-90,36-46
9-97,8-87
75-92,51-92
6-82,1-83
21-79,29-80
26-66,27-27
11-32,11-32
6-90,91-91
36-78,21-65
66-66,23-66
22-23,22-95
3-82,3-35`;

const splitStringPair = (pair: string) => {
  return pair.split(",").map((string) => string.split("-").map((val) => +val));
};

function isOverlapping([
  [firstStart, firstEnd],
  [secondStart, secondEnd],
]: number[][]): boolean {
  return firstStart <= secondEnd && firstEnd >= secondStart;
}

// function isOverlapping([first, second]: number[][]) {
//   let [firstStart, firstEnd] = first;
//   let [secondStart, secondEnd] = second;
//   return firstStart <= secondEnd && firstEnd >= secondStart;
// }

function isFullyContained([first, second]: number[][]) {
  return (
    (first[0] <= second[0] && first[1] >= second[1]) ||
    (first[0] >= second[0] && first[1] <= second[1])
  );
}
fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) return;
  let overlapping = data
    .trim()
    .split(/\n/)
    .map(splitStringPair)
    .filter(isOverlapping);

  console.log(overlapping.length);
});
