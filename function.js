// function declaration
function startfun() {
  console.log("stand up");
  console.log("walk towards the awitch");
  console.log("press the switch");
}

// call the function
startfun();
console.log("waking up in the morning");
startfun();
console.log("eating lunch");
console.log("watching js tutorial");
startfun();

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
