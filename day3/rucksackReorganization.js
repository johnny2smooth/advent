// Each rucksack has two compartments
// the contents of each compartment are to be unique
// meaning 'a' should only exist in one, if either

// there was a mistake though and there is one item in each
// rucksack that was placed in two compartments

// there are two lower case 'p' in this testSack
const testSack = "vJrwpWtwJgWrhcsFMMfFFhFp";

// split the compartments into equal sizes

const splitSack = testSack.length >> 1;

const [firstHalf, secondHalf] = [
  [...testSack.slice(0, splitSack)],
  [...testSack.slice(splitSack)],
];

// find the duplicate
const firstHalfSet = new Set(firstHalf);

let duplicate;

secondHalf.forEach((item) =>
  firstHalfSet.has(item) ? (duplicate = item) : null
);

// find the priority
let priorityString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let priorityMap = {};

Array(...priorityString).forEach((item, i) => (priorityMap[item] = i + 1));

// add priority to total
// easy!
