// What is javascript?

/*
- A programming language that is used to make web pages interactive
- It's an interpreted language
- Run's on client's computer/browser
- Object based
- It's a "scripting" language and has nothing to do with Java
*/

/*
Implemented the following programming fundamentals in JS
1) Variables
2) Arrays
3) Loops
4) Conditionals
5) Comparison & Operators
6) Objects
7) Functions
8) Program Flow
9) Data types
10) Prototypes
11) Events
*/

// How to create JavaScript
// You just need to create a text editor and run on any of the browser available.


//alert("New JS file!!!! ")
// Variables

/*

Variables naming conventions
- Variable names can contain letters, numbers, underscores, dollar signs
- It should begin with a letter
- Its case sensitive

*/


var test = "This is a test";
var Test = "This is TEST";

// camel case style
var myFavoriteNumber;

// partial case
var MyFavoriteNumber;

// underscore
var my_favorite_number;


// Arrays

var colors = ['red', 'blue', 'green'];
// OR
var colorsNew = new Array("red", "yellow", "orange"); // double or single quotes
// add new element to Array
colorsNew.push('purple');
console.log("String array: "+colorsNew[3]);

// to create an integer Array
var color = [1, 2, 4];
console.log("Integer array: "+color[2]);

var mixedArray = [1, 2, "Seven", 55];
console.log("Mixed datatype array: "+mixedArray[2]);
console.log("Reversing array: "+mixedArray.reverse());
console.log("Sorting array: "+mixedArray.sort());
console.log("Reversing array: "+mixedArray.reverse());


// Loops
for(var i = 1; i<=9; i++){
  //console.log("value of i: "+i);
}
var j = 0;
while(j < 9){
  //console.log("value of j: "+j);
  j++;
}

var numbers = [33, 45, 1, 30, 100];
numbers.forEach(function(number){
  //console.log(number);
});

for(var i = 0; i<numbers.length; i++){
  //console.log(numbers[i]);
}

// Conditionals

// == checks values
if(1 == 1){
  //console.log("Inside true!!!");
}

// === checks datatypes
if(1 === 'ashmi'){
  //console.log("Check passed!");
}
else{
  //console.log("checked failed! ")
}
// switch
var fruit = "orange";

switch(fruit){
  case "banana":
    console.log("I hate bananas");
    break;
  case "apple":
    console.log("I love apples");
    break;
  case "orange":
    console.log("Oranges are ok");
    break;
  default:
    console.log("Inside default");
    break;
}
