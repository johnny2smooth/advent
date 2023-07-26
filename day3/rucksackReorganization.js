let fs = require("fs");
// Each rucksack has two compartments
// the contents of each compartment are to be unique
// meaning 'a' should only exist in one, if either

// there was a mistake though and there is one item in each
// rucksack that was placed in two compartments

// // there are two lower case 'p' in this testSack
// const testSack = "vJrwpWtwJgWrhcsFMMfFFhFp";

// // split the compartments into equal sizes

// const splitSack = testSack.length >> 1;

// const [firstHalf, secondHalf] = [
//   [...testSack.slice(0, splitSack)],
//   [...testSack.slice(splitSack)],
// ];

// // find the duplicate
// const firstHalfSet = new Set(firstHalf);

// let duplicate;

// secondHalf.forEach((item) =>
//   firstHalfSet.has(item) ? (duplicate = item) : null
// );

// // find the priority
let priorityString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let priorityMap = {};

Array(...priorityString).forEach((item, i) => (priorityMap[item] = i + 1));

// add priority to total
// easy!

// first problem
// fs.readFile("input.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   let cleanInput = data.trim().split(/\n/);
//   let total = 0;
//   let priorityString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let priorityMap = {};
//   Array(...priorityString).forEach((item, i) => (priorityMap[item] = i + 1));

//   cleanInput.forEach((sack) => {
//     let splitSack = sack.length >> 1;
//     const [firstHalf, secondHalf] = [
//       [...sack.slice(0, splitSack)],
//       [...sack.slice(splitSack)],
//     ];
//     let duplicate;
//     const firstHalfSet = new Set(firstHalf);

//     secondHalf.forEach((item) =>
//       firstHalfSet.has(item) ? (duplicate = item) : null
//     );

//     total += priorityMap[duplicate];
//   });
//   console.log(total);
// });

// second problem

// let testString = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`;

// split the string into groups of three

// find the item that appears in all bags;
// let commonItem = [];
// groupOfThree.forEach((group) => {
//   const uniqueItemCount = {};
//   let sets = group.map((items) => new Set([...items]));
//   sets.forEach((items) =>
//     items.forEach((item) => {
//       uniqueItemCount[item]
//         ? (uniqueItemCount[item] += 1)
//         : (uniqueItemCount[item] = 1);
//     })
//   );

//   for (const [key, val] of Object.entries(uniqueItemCount)) {
//     if (val === 3) commonItem.push(key);
//   }
// });

// console.log(commonItem);
// new Set(Array(...groupOfThree[0][0]))
// groupOfThree[0]
// split.map((string, i, strArr) =>
//   (i + 1) % 3 === 0 ? [strArr[i - 2], strArr[i - 1], string] : null
// )

// fs.readFile("input.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   let split = data.trim().split(/\n/);
//   let groupOfThree = [];
//   for (let i = 0; i <= split.length - 1; i += 3) {
//     groupOfThree.push([split[i], split[i + 1], split[i + 2]]);
//   }

//   // find the item that appears in all bags;
//   let commonItem = [];
//   groupOfThree.forEach((group) => {
//     const uniqueItemCount = {};
//     let sets = group.map((items) => new Set([...items]));
//     sets.forEach((items) =>
//       items.forEach((item) => {
//         uniqueItemCount[item]
//           ? (uniqueItemCount[item] += 1)
//           : (uniqueItemCount[item] = 1);
//       })
//     );

//     for (const [key, val] of Object.entries(uniqueItemCount)) {
//       if (val === 3) commonItem.push(key);
//     }
//   });
//   let total = commonItem.reduce((sum, num) => sum + priorityMap[num], 0);
//   // console.log(total);
// });

// let split = testString.trim().split(/\n/);
// let groupOfThree = [];
// for (let i = 0; i <= split.length - 1; i += 3) {
//   groupOfThree.push([split[i], split[i + 1], split[i + 2]]);
// }

// functional programming way

//
let testString = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const testSack = "vJrwpWtwJgWrhcsFMMfFFhFp";

// split the rucksack in half
const divideRucksack = (string) => {
  return [string.slice(0, string.length / 2), string.slice(string.length / 2)];
};

// find the duplicate
const findDuplicate = ([firstHalf, secondHalf]) => {
  let firstHalfSet = new Set(firstHalf);
  return [...secondHalf].find((item) => firstHalfSet.has(item));
};

// calculate the priority
// - 96
const calculatePriority = (duplicate) =>
  duplicate.charCodeAt() - (duplicate.charCodeAt() >= 97 ? 96 : 38);

const sumReducer = (sum, num) => sum + num;

let total = testString
  .split(/\n/)
  .map(divideRucksack)
  .map(findDuplicate)
  .map(calculatePriority)
  .reduce(sumReducer);

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  let total = data
    .split(/\n/)
    .map(divideRucksack)
    .map(findDuplicate)
    .map(calculatePriority)
    .reduce(sumReducer);
  console.log(total);
});
