// const Color = "green";
// if (color === "red") {
//   console.log("you maybe in danger");
// } else if (color === "yellow") {
//   console.log("you should stop");
// } else if (color === "green") {
//   console.log("you should cross the road");
// } else {
//   console.log("rod par hobo na ");
// }

// const color = "yellow";
// if (color === "green") {
//   console.log("you are a green friend");
// } else if (color === "blue") {
//   console.log("you are a blue friend");
// } else if (color === "red") {
//   console.log("you are a red friend");
// } else if (color === "white") {
//   console.log("you are a white friend");
// } else if (color === "yellow") {
//   console.log("you are a yellow friend");
// } else {
//   console.log("you are a black black friend");
// }

/**
 VARIABLE
 1. What is javaScript?

 ans: *JavaScript is the Programming Language for the Web.
 *JavaScript can update and change both HTML and CSS
 *JavaScript can calculate, manipulate and validate data.

 2. How does js works?
 The program is executed from a binary format, which was
 generated from the original program source code. JavaScript
 is a lightweight interpreted programming language. The web browser
 receives the JavaScript code in its original text form and runs the script from tha

 3. What is variable?
 4. Declare a variable

 0.perseint, parsefloat
 dosomik ar por sonkha thakbe perseint r parsefloat a thake na 

 0***. toFixed.... deye dosomik ar por koyta sonkha rakbo seta tik kora jai
 const pi = 3.14159;

const twoDecimals = pi.toFixed(2);  // twoDecimals will be "3.14"
const fourDecimals = pi.toFixed(4);  // fourDecimals will be "3.1416"

const largeNumber = 12345.6789;
const twoDecimalLarge = largeNumber.toFixed(2);  // twoDecimalLarge will be "12345.68" (rounded)


 5. Type of variable.. 
 var, const, let / Numeric, string, Boolean

 6. Primitive and non-primitive data type
 // Primitive Data Types
let age = 30; // Number (primitive)
let name = "John Doe"; // String (primitive)
let isLoggedIn = true; // Boolean (primitive)
let notAssigned; // Undefined (primitive)
let nothing = null; // Null (primitive)

// Non-Primitive Data Type
let person = { // Object (non-primitive)
  firstName: "Jane",
  lastName: "Doe",
  age: 25
};


 7. js short hand +=
 sonkhepe lekar jonno =
 ..........
// array
............
 8.number of elements in an array
 const fruits = ["apple", "banana", "cherry"];
const numberOfFruits = fruits.length;

console.log(numberOfFruits); // Output: 3

9. find the value of an element by index
var numbers = [45, 23,23,23,13,15,23,];
//get element by index
console.log(numbers[6])
    
    
10. change an element by index
var numbers = [45, 23,23,23,13,15,23,];
//get element by index
console.log(numbers[6])
numbers[1] = 88;
conlole.log(numbers);

11. get the index of an element by the value

12. what does it mean you get undefined while getting
 the vealue of a an element by index
 const colors = ["red", "green", "blue"];

console.log(colors[4]); // Output: undefined (index 4 is out of bounds)
console.log(colors[-1]); // Output: undefined (negative index)

13.how can you add an element to an array
const animals = ["cat", "dog", "rabbit"];
animals.push("fish"); // Add "fish" to the end

console.log(animals); // Output: ["cat", "dog", "rabbit", "fish"]

14. How can you remove the last element from array at the last position
const groceries = ["bread", "milk", "eggs", "cheese"];
const removedItem = groceries.pop();

console.log(groceries); // Output: ["bread", "milk", "eggs"]
console.log(removedItem); // Output: "cheese" (removed element)

15. add an element at the first position of an array
const fruits = ["banana", "mango", "orange"];
fruits.unshift("apple"); // Add "apple" to the beginning

console.log(fruits); // Output: ["apple", "banana", "mango", "orange"]


16. remove the first element of an array
const colors = ["red", "green", "blue", "yellow"];
const removedColor = colors.shift();

console.log(colors); // Output: ["green", "blue", "yellow"]
console.log(removedColor); // Output: "red" (removed element)

...........
CONDITIONALS
............
1. meaning of: >, <, >=, <=, ==, !=, ===, !==,
5 > 3; // true
10 > 20; // false
//
2 < 7; // true
15 < 10; // false
//
8 >= 8; // true (equal)
12 >= 5; // true (greater)
4 >= 10; // false (less than)
//
3 <= 5; // true (less than)
1 <= 1; // true (equal)
9 <= 2; // false (greater than)
//
1 == "1"; // true (converts "1" to a number)
0 == false; // true (converts false to 0)
"hello" == "Hello"; // false (case-sensitive)
//
5 != 3; // true
10 != 10; // false
"apple" != "banana"; // true
//
1 === "1"; // false (different types)
0 === false; // false (different types)
"hello" === "Hello"; // false (case-sensitive)
10 === 10; // true
//
3 !== "3"; // true (different types)
null !== undefined; // true (different types)
10 !== 10; // false
//


2. meaning of &&
let age = 25;
let isLoggedIn = true;

// All conditions must be true for the expression to be true
if (age > 18 && isLoggedIn) {
  console.log("You can access the content."); // This will be executed
} else {
  console.log("You cannot access the content.");
}

3. meaning of ||
let hasPermission = false;
let isLoggedIn = true;

// Only one condition needs to be true for the expression to be true
if (hasPermission || isLoggedIn) {
  console.log("You can access the resource."); // This will be executed
} else {
  console.log("You do not have permission to access the resource.");
}


4. let's say you have x amount of momey. if you have more than 80,000, then
 you will by a mac,
 if more than 60,000 then you will by gaming laptop
 if you more then 40,000 then you will by lenovo yoga
 if you have more than 20,000 the you will by an used laptop
 otherwise, you will use you mobile phone .


let money = 85000; // Change this value to test different amounts

if (money > 80000) {
  console.log("You can buy a Mac!");
} else if (money > 60000) {
  console.log("You can buy a gaming laptop!");
} else if (money > 40000) {
  console.log("You can buy a Lenovo Yoga!");
} else if (money > 20000) {
  console.log("You can buy a used laptop.");
} else {
  console.log("You will use your mobile phone.");
}



 */

function movie() {
  return "Din-The day";
  return "Poran";
  return "Hawa";
}

console.log(movie());
