//1--Create two variables, firstName and lastName, and assign 
//Our first and last names as values. 
let firstName = "Suleman";
let lastName = "Seid";

//Then, use console.log to print a greeting message 
//like "Hello, [firstName] [lastName]!" to the console. 
console.log("Hello," + firstName + " " + lastName + "!");

//2-- Global Scope Declare a variable globalVar with a value of 10 in the global scope. 
var globalVar = 10;

//Then, use console.log to print the value of globalVar. 
//Also, create an if statement (using curly braces {}) and 
//declare a variable localVar with a value of 20 inside the block.
if (true) {
    var localVar = 20;
    //console.log(localVar);
  }
  console.log(localVar); // Output: 20  
//Block-Level variables are only accessible within the block where they where declared

//3--Write code that takes an integer and assigns it to a variable.
// Use a ternary operator to determine if it's even or odd, and then use console.log to print a message indicating
// whether the number is even or odd. Test the code with various numbers

let num = 6;
let result = num % 2 === 0 ? "even" : "odd";
console.log(`The number ${num} is ${result}.`);
// We can change the num values to diffferent intiger numbers.

//4--To create two variables, fruit1 and fruit2, and 
//assign the names of two different fruits as their values, we can use the following code:
 let fruit1 = "Apple";
 let fruit2 = "Banana";

//To combine the two fruits in to a single massage using a string concatination
//using "+ " operator.

let fruitMessage = fruit1 + " and " + fruit2;
//To print the fruitMassage to the console, lets use console.log();
console.log(fruitMessage);

//5--To create two variables userName and isLoggedIn in JavaScript,
// we can use the following code:
let userName = "John Jay";
let isLoggedIn = "True";

// To geenerate a greating message based on whether the user is loggged in or  not,
//we can use ternery operator.

let greeting = isLoggedIn? `Welcome back, ${userName}!` : `Hello, ${userName}! Please log in.`;
console.log(greeting);

//6--To decleare a variable inside a block of code, we ca use the let keyword,
//lets declare a variable with a value of 5 inside a bloke curly brackets;

{let localVar = 5;
console.log(localVar);
}

var globalVar = 10;

{   let localVar = 5;
    console.log(localVar);
}

console.log(globalVar);

//we observed that the value of localVar is printed as 5inside the block,
//and the value of glabalVar is printed as 10 outside the block.
//In block Scope, declared variables only accessible within the block which are declared in.

//7--To concatenate two variables in JavaScript, we will use the "+" operator.
 let FirstName = "Suleman";
 let LastName = "Seid";
 let FullName = FirstName + " " + LastName;

 console.log(FullName + " is " + FullName.length + " characters long. ");

 //8--To declare a variable product as a string and another variable discount as a number in JavaScript.
 let product = "your_product_name";
 let discount = 20;
 
 if (discount === 20) 
 {
   console.log(`20% discount on ${product}!`);
 }
  else if (discount === 0) 
  {
   console.log(`No discount available for ${product}`);
 }

 //9--to create a story using variables in JavaScript, 
 //To create three variables: name, place, and activity, 
 //and assigning the apropriate values to them.
 let fullname = "Jack Wills";
 let place = "Seattle";
 let activity = "Playing football";

 //To create story by concatenating them in to a sentence like "once upon a time,[Name]
 //visited [place] and enjoy [activity]." 
let story = 'Once up on a time,' + fullname + " visited " + place + " and enjoyed " + activity + " . ";

//To print the story to the console by using console.log()
console.log(story);


//10--In your own words, explain the key differences between HTML, CSS, and JavaScript. Use plain language and provide a brief description of each.

//HTML, CSS, and JavaScript are three different coding languages that are used to create websites. 
//HTML stands for HyperText Markup Language and is used to create the structure of a website.
//CSS stands for Cascading Style Sheets and is used to style the website, including colors, fonts, and layout.
//JavaScript is used to add interactive elements to the website, such as animations, videos, and more.