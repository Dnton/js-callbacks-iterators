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
