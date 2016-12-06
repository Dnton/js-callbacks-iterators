// Question 1

// find the longest words in a string
// hint: split & reduce

var str = "The quick brown fox over jumped the lazy dog";

var splitStr = str.split (" ")

console.log(splitStr)

// *ignore this var longestWord = splitStr.forEach(function (longest) {
//   return longest.length
// })
// console.log(longestWord) */

var longestWord = splitStr.reduce( function (currentWord, longest) {
  console.log('current is: ' + currentWord);
  console.log('longest is: ' + longest);

  if (currentWord.length > longest.length) {
    return currentWord
  } else {
    return longest
  }
})

console.log(longestWord)

// function longestFunc(prevVal, currVal){
// }
// splitStr.reduce(longestFunc);
// splitStr.reduce(function(prevVal, currVal){
// }
// do this question forEach

// End

// Question 2
