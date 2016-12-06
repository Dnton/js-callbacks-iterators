// Callbacks.
// Callbacks are essentially creating and reserving bits of code
// to be used for the later event
// First two examples demonstrating how callbacks work

function telephone() {
  return "867-5309"
}

console.log(telephone())

function blondie( tel ) {
  return "Call me on the line at " + tel()
}4

console.log(blondie(telephone))

function repeater(num, str){
  for(var i = 0; i < num; i++) {
    console.log(str);
  }
}

function repeaterSetup(num1, str1, callback) {
  console.log("HERE WE GO!!")
  callback(num1, str1)
}

repeaterSetup(3, "tora", repeater)

// Example 3: Showcasing setTimeout and setInterval as callbacks

var body = document.querySelector('body');
var h1 = document.createElement('h1')

function afterFiveSec() {
   h1.textContent = "Hello World!"
   body.appendChild(h1)
   window.setInterval(everySec, 1000)
}

window.setTimeout(afterFiveSec, 5000);

var h2 = document.createElement('h2')
var count = 0

function everySec()  {
  h2.textContent = "WOAH" + count;
  body.appendChild(h2)
  count++;
}
