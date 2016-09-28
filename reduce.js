var numbers = [1, 56, 2, 4, 1, 99, 3, 5];

// Your code here!

var mult = function(a, b) {
  return a * b;
};

var result = numbers.reduce(mult);

console.log(result);

// Write something that takes the above array and returns the product
// of all the numbers
// via multiplication
