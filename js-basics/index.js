// This is my first JS code!
console.log("Hello world!!")

// cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or a hyphen (-)
// Are case-sensitive

let name = "Ashmi";
console.log("Name: "+name);

// Once variable declared as constant 
// value cannot be changed
const interestRate = 0.3
//interestRate = 1;
console.log("interestRate: "+interestRate);


let firstName = "Priyanka"; // String literal
let age = 30; // Number literal
let isApproved = false; // boolean literal
let selectedColor = null;

console.log(age);

// Declaring objects
let person = {
    name : 'Ashmi',
    age : 24
};
console.log(person);
console.log(person.name);

// change properties of object
// 2 ways
// Dot notation
person.name = "Amishi";

// Bracket notation
person['name'] = "Saras";

console.log("Changed name: "+person.name);

// Arrays
let colors = ['red', 'blue'];
console.log("colors: "+colors);

// length of array is dynamic. It can change!


colors[2] = "Orange";
console.log("colors length: "+colors.length);


// Functions

// Performing a task
function greet(name){
    console.log("Name is: "+name);
}
greet('Ashmi');

// Calculating a value
function square(number){
    return number * number;
}

let value = square(2);
console.log("Square of 2 is: "+value);


// Maps
// Maps are a collection of keyed dataitems just like an object. But the main difference is that Map allows
// keys of any type.

let map = new Map();
map.set(1, 'Ashmi'); // a numeric key
map.set('1', 'Raja'); // a String key
map.set(3, 30);
map.set(true, 'Algebra'); // a boolean key

console.log("Map size: "+map.size); // 4
console.log(map.get(1)); // Ashmi
console.log(map.get('1')); // Raja
console.log(map.get(true)) // Algebra

// Map iteration
let recipeMap = new Map([['Potato', 100],
                        ['tomatoes', 20],
                        ['onions', 34]]);
// iterate over keys
for(let vegetables of recipeMap.keys()){
    console.log("Keys: "+vegetables);
}

// iterate over values
for(let num of recipeMap.values()){
    console.log("Values: "+num);
}

// iterate over entries
for(let entries of recipeMap){
    console.log("Key and value pairs: "+entries);
}

// Map has built-in forEach method

// runs the function for each (key, value) pair
recipeMap.forEach( (value, key, map) => {
    console.log(`${key} : ${value}`); // onions : 34
});

// Create a map from a plain Object
// Object.entries: Map from Object
let obj = {
    name: "John",
    age: 30
  };
  
  let data = new Map(Object.entries(obj));
  
  console.log( data.get('name') ); // John

  // Here Object.entries() returns the array of key/value pairs: [['John' : 30], ["Ashmi" : 50]]

// Create an object from Map
// Object.fromEntries : Object from Map
let prices = Object.fromEntries([
    ['onions', 12],
    ['Beans', 34],
    ['Peas', 300]
]);

// here prices is now prices = {onions : 12, Beans : 34, Peas : 300}
console.log("Price of Onions: "+prices.onions);

// We can use Object.fromEntries to get plain object from Map
data = new Map();
map.set('banana', 10);
map.set('apple', 10);
map.set('orange', 10);

obj = Object.fromEntries(map.entries());
console.log("Price of Orange: "+obj.orange);