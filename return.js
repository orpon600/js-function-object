function add(num1, num2) {
  console.log(num1, num2);
  var sum = num1 + num2;
  // console.log(sum);
  return sum;
}

// add(45, 56);

var total = add(80, 20);
// console.log("total", total);

function bringSingara(money) {
  var singaraPrice = 10;
  var quantity = money / singaraPrice;
  return quantity;
}

var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log("Eating singaras:", singaras);
//
//home work
//write a function called make_avg() which will take an three integers and return the average of those values.

function make_avg(num1, num2, num3) {
  // Calculate the total sum of the three numbers
  const sum = num1 + num2 + num3;

  // Calculate the average by dividing the sum by the number of elements (3)
  const average = sum / 3;

  // Return the calculated average
  return average;
}

// Example usage:
const result = make_avg(10, 20, 30);
console.log(result); // Output: 20

//  write a function called foo() which prints "foo" and
// a function called bar() which prints "bar". call function bar()
//  in the foo() function after printing. what will be the output?
//   Now call the foo() to see the out
function foo() {
  console.log("foo"); // Print "foo"
  bar(); // Call the bar() function
}

function bar() {
  console.log("bar"); // Print "bar"
}

// Call the foo() function to see the output
foo();

//write a function called make_avg() which will take an array of integers and the size
// of that array and return the average  of those values.js

function make_avg(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return null; // Return null for empty arrays
  }

  // Calculate the sum of all elements in the array
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  // Calculate the average by dividing the sum by the number of elements
  const average = sum / arr.length;

  return average;
}

// Example usage:
const numbers = [10, 20, 30, 40];
const average_value = make_avg(numbers);
console.log(average_value); // Output: 25

//5 number
const Color = "green";
if (color === "red") {
  console.log("you maybe in danger");
} else if (color === "yellow") {
  console.log("you should stop");
} else if (color === "green") {
  console.log("you should cross the road");
} else {
  console.log("rod par hobo na ");
}
