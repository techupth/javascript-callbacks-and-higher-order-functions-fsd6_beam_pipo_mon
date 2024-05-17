// Exercise #1: For Each Function

function forEach(array, operation, number) {
  // Start coding here
  // console.log(array);
  for (let each of array) {
    // console.log(each);
    let newNumber = operation(each, number);
    newEmployeeSalaries.push(newNumber);
  }
  return newEmployeeSalaries;
}

let Salary = function (num1, num2) {
  // console.log(number);
  let number = num1 + num2;
  return number;
};

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
forEach(employeeSalaries, Salary, 5000);
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
