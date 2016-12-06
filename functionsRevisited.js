// Functions lab revisited
// long qns
// 1.
var words = ['hello','what', 'is', 'up', 'dude']

function lengths(array) {
  return words.map(string => string.length)
}

console.log(lengths(words))

// short qn
// 4.

function sumArray(array) {
  return array.reduce((a, b) => a + b);
}

function multiplyArray(array) {
  return array.reduce((a, b) => a * b )
}

// 7.

function findLongestWord(array) {
  return array.reduce(function(longestWord, word) {
    if (word.length > longestWord.length) {
      longestWord = word.length
      }
      return longestWord;
    }
  )
}

console.log(findLongestWord(['apple', 'orange', 'pineapple', 'mango']))

// 8.

function filterLongWords(array, x) {
  return array.reduce(function (array, word) {
    if (word.length > x) {
      array.push(word)
    }
    return array
  }, [])
}

console.log(filterLongWords(['one', 'five', 'twenty'], 3))
