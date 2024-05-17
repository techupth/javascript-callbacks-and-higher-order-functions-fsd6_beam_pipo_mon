const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

function forEach(array, operation) {
  for (let i in array) {
    operation(array[i]);
    console.log(employeeSalaries);
  }
}
// Using `forEach` function here
forEach(employeeSalaries, function (salary) {
  newEmployeeSalaries.push(salary + 5000);
});

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
