// https://edabit.com/challenge/6R6gReGTGwzpwuffD
function sevenBoom(arr) {
  const result = arr.join("").match(/7/g);
  return result ? "Boom!" : "there is no 7 in the array";
}

let testCase1 = sevenBoom([1, 2, 3, 4, 5, 6, 7]) === "Boom!";
let testCase2 = sevenBoom([8, 6, 33, 100]) === "there is no 7 in the array";
let testCase3 = sevenBoom([2, 55, 60, 97, 86]) === "Boom!";

console.log(testCase1);
console.log(testCase2);
console.log(testCase3);
