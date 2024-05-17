//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let result = operation(array);
  console.log(result);
  if (result >= 5) {
    console.log(`PASS ✅`);
  } else {
    console.log(`FAIL ❌`);
  }
}

let checkPoint = function (array) {
  let x = 0;
  for (let each of array)
    if (each > 70) {
      x += 1;
    }
  return x;
};

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkPoint);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkPoint);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkPoint);
