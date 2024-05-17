//Exercise #2: At Least Five Function
function atLeastFive(array, operation) {
  let check = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 70) {
      check++;
    }
  }
  console.log(array);
  return operation(check);
}

function checkIfPass(check) {
  if (check >= 5) {
    return "ผ่านเกณฑ์ ✅";
  } else {
    return "ไม่ผ่านเกณฑ์ ❌";
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkIfPass);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkIfPass);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkIfPass);
console.log("Room 1 Result: " + scoreRoom1Result);
console.log("Room 2 Result: " + scoreRoom2Result);
console.log("Room 3 Result: " + scoreRoom3Result);
