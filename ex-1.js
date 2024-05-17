// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for (let i = 0; i < array.length; i++){
    operation(array[i]);
    console.log(newEmployeeSalaries);
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];


// Using `forEach` function here
forEach(employeeSalaries, function(salary){
  newEmployeeSalaries.push(salary + 5000);
});
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
