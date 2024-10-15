let arr = [1, 2, 3, 4, 5];
arr.push(4);
console.log(arr);  // Output: [1, 2, 3, 4]

//pop
arr.pop();
console.log(arr);  // Output: [1, 2]

//shift
arr.shift();
console.log(arr);  // Output: [2, 3]

//delete
arr.splice(1, 2);  // Remove 2 elements starting at index 1
console.log(arr);  // Output: [1, 4]

//foreach()
arr.forEach(num => console.log(num));

//map()
let doubled = arr.map(num => num * 2);
console.log(doubled);  // Output: [2, 4, 6]

//filter()-create a new array
let filtered = arr.filter(num => num > 3);
console.log(filtered);  // Output: [4, 5]

//reduce()
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Output: 10

//find()
let found = arr.find(num => num > 2);
console.log(found);  // Output: 3

//reverse()
arr.reverse();
console.log(arr);  // Output: [3, 2, 1]



