// Example of how to avoid using return more than once within a function

function obv(){
  if(1 > 2) {
    return 'nah';
  } else {
    return 'yaz';
  }
}

console.log(obv())

function obv(){
  //ternary operator
  var result = (1 > 2) ? 'yah' : 'nah'
  return result
}

console.log(obv())
// End of Example

// New Example for closures

function Person() {
  var name = "";
  var age = 0;

  return {
    getName: function() {
     return name
    },
    setName: function(newName) {
     name = (newName)
    },
    getAge: function() {
     return age
    },
    setAge: function (newAge){
     age = newAge;
    }
  }
}

var person1 = Person()

person1.setName("Jeshua")

person1.setAge(28)

// the above commands works because
// there is an object within the function Person()

console.log(person1.getName())

console.log(person1.getAge())

person1.setName("Amanda")

person1.setAge(28)

console.log(person1.getName())

console.log(person1.getAge())

// person1 name goes from "" to "Jeshua" to "Amanda" so right now
// var person1 name will be "Amanda".

var person2 = Person()

person2.setName("Jachin")

person2.setAge(24)

console.log(person2.getName())
console.log(person2.getAge())

// when you create a new variable for the Person(), you create a new object
// so person1 and person2 are new objects created from the template of Person()
// hence Person() is a function that is known as a factory.

// New Example for call and apply

var details = {
  name: 'Jeshua',
  addr: 'Bedok North Ave 4',
  spouse: 'none',
  age: 28
}

var details = {
  name: 'Jeshua',
  addr: 'Bedok North Ave 4',
  spouse: 'none',
  age: 28
}

var getName = function() {
  return this.name
}

var getAddr = function() {
  return this.addr
}

var getSpouse = function() {
  return this.spouse
}

var getAge = function(){
  return this.age
}

var setDetails = function(newName, newAddr, newSpouse, newAge) {
  this.name = newName;
  this.addr = newAddr;
  this.spouse = newSpouse;
  this.age = newAge;
}

var Johannes = [
  'Johannes',
  'Simei St 1',
  'None',
  '20'
]

// setDetails.call( details, 'Jachin', 'Bedok South Ave 3', 'None', '24');

setDetails.apply( details, Johannes);

// alert(getName.call(details));
// alert(getAddr.call(details));
// alert(getSpouse.call(details));
// alert(getAge.call(details));

alert(getName.apply(details));
alert(getAddr.apply(details));
alert(getSpouse.apply(details));
alert(getAge.apply(details));

// end of example

// Example of Constructors and Prototype
// prototypes can also contain impt functions

function Person(newName, newAge, newAddr, favFood) {
  this.name = newName;
  this.age = newAge;
  this.address = newAddr;
  this.food = favFood;
}

Person.prototype.setFullName = function(){
  this.name = "Mr. " + this.name;
}

var user = new Person("Jeshua", 28, "Bedok North Ave 4", "Sushi");
console.log(user.name);
user.setFullName();
console.log(user.name);
console.log(user.address);
console.log(user.food)

// End of Example
