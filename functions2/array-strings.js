//add and remove strings
let fruits = ["apple", "banana", "cherry"];

// Add elements
fruits.push("date");
console.log(fruits);  // Output: ["apple", "banana", "cherry", "date"]

// Remove the last element
fruits.pop();
console.log(fruits);  // Output: ["apple", "banana", "cherry"]

// Add an element at the start
fruits.unshift("avocado");
console.log(fruits);  // Output: ["avocado", "apple", "banana", "cherry"]

// Remove the first element
fruits.shift();
console.log(fruits);  // Output: ["apple", "banana", "cherry"]

//Search-string
console.log(fruits.includes("banana"));  // Output: true
console.log(fruits.includes("grape"));   // Output: false

//find string
let longFruit = fruits.find(fruit => fruit.length > 5);
console.log(longFruit);  // Output: "banana"
