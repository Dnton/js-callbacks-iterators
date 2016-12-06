// First question

function lengths() {
  var words = ["hello", "what", "is", "up", "dude"];
    for (var i = 0; i < words.length; i++){
      var insidewords = words[i]
      console.log(insidewords.length)
   }
}

lengths();

// End

// Second Question

function transmogrifier(number1, number2, power){
  var result = Math.pow(number1 * number2, power)

  console.log(result)

}
transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);

// End

// Third Question

function wordReverse(string) {
  var stringArray = string.split(" ")
  stringArray.reverse();
  stringArray.join(" ");

  console.log(stringArray);

}

wordReverse("Now we're talking!");

// End

// Fourth Question

function maxofTwoNumbers(a, b) {
 if (a >= b) {
   return a;
   } else {
     return b;
   }
}

console.log(maxofTwoNumbers(4,5));

// End


// Fifth Question

function maxofThreeNumbers(a, b, c) {
 if ((a >= b) && (a >= c)) {
   return a;
   } else if ((b >= a) && (b >= c)) {
   return b;
   } else {
   return c
   }
 }

console.log(maxofThreeNumbers(4, 5, 10));

// End


// Question 7a

function sumArray() {
  var array = [1, 2, 3, 4]
  var sumnum = 0
  for (var i =0; i < array.length; i++) {
    sumnum += array[i]
  }
  return sumnum
}

console.log(sumArray())

// Question 7b
function multiplyArray() {

  var loop = [1, 2, 3, 4];
  var multiplynum = 1;
  for (var i = 0; i < loop.length; i++) {
  multiplynum *= loop[i];
}
  return multiplynum;
}

console.log(multiplyArray());

// End

// Question 8

var printarguments = function () {
    for (var i = 0; i < arguments.length; i++) {
    var argumentLong = arguments.length
  }
  return argumentLong
 }

console.log(printarguments("one", "two", "three", "four", "banana"))

console.log(printarguments(1, 2, 3, 4, 5))

// End

// Question 9

function reverseString(string) {
  var stringArray = string.split("");
  var reversedString = stringArray.reverse();
  var rejoined = reversedString.join("");
  return rejoined
}

console.log(reverseString("meat cleaver"))

// End

// Question 10

var words = ["word", "us", "rabid", "callback", "draw"]

function findLongestWord() {
  var longestWord = 0
  for (var i = 0; i < words.length; i++) {
    if (words[i] > longestWord){
      longestWord = words[i].length
    }
  }
  return longestWord
}

console.log(findLongestWord(words))

// this is wrong haven't figured it out yet

// Question 11
