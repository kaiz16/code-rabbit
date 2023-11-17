// https://edabit.com/challenge/6R6gReGTGwzpwuffD
function sevenBoom(arr) {
  const result = arr.join("").match(/7/g)
  return result ? "Boom!" : "there is no 7 in the array"
}

let testCase1 = sevenBoom([1, 2, 3, 4, 5, 6, 7]) === "Boom!"
let testCase2 = sevenBoom([8, 6, 33, 100]) === "there is no 7 in the array"
let testCase3 = sevenBoom([2, 55, 60, 97, 86]) === "Boom!"
let testCase4 = sevenBoom([2, 6, 7, 9, 3]) === "Boom!"
let testCase5 = sevenBoom([33, 68, 400, 5]) === "there is no 7 in the array"
let testCase6 = sevenBoom([86, 48, 100, 66]) === "there is no 7 in the array"
let testCase7 = sevenBoom([76, 55, 44, 32]) === "Boom!"
let testCase8 = sevenBoom([35, 4, 9, 37]) === "Boom!"

console.log(testCase1)
console.log(testCase2)
console.log(testCase3)
console.log(testCase4)
console.log(testCase5)
console.log(testCase6)
console.log(testCase7)
console.log(testCase8)
