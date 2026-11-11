// --- 1. Standard FOR Loop ---
// Best when you know exactly how many times you want to loop.
for (let i = 1; i <= 3; i++) {
    console.log(`For Loop count: ${i}`);
}

// User Edge-case: Jumping by specific intervals
for (let i = 0; i < 10; i = i + 12) {
    console.log(`Jump loop: ${i}`); // Only runs once (prints 0), next is 12 (fails condition)
}

// --- 2. WHILE vs DO...WHILE Loop ---
let a = 5;

// WHILE: Evaluates condition FIRST. If false, it never runs.
while (a < 5) {
    console.log("This will never print because 5 is not < 5");
    a++;
}
console.log("While loop finished: no output");

// DO...WHILE: Runs the code FIRST, then evaluates the condition. 
// Guarantees at least one execution.
let b = 5;
do {
    console.log(`Do-While ran! b = ${b}`); // Prints 5
    b++;
} while (b < 5);


// --- 3. FOR...OF Loop (For Iterables like Arrays) ---
// Directly gives you the values, skipping the need for manual indexing.
let fruits = ["apple", "mango"];
for (let element of fruits) {
    console.log(`For...Of output: ${element}`); // Prints "apple", then "mango"
}

// --- 4. FOR...IN Loop (For Object properties) ---
// Iterates over the keys (property names) of an object.
let studentObj = { name: "Gurkanwar", rollno: 23 };
for (let key in studentObj) {
    console.log(`${key}: ${studentObj[key]}`); // name: Gurkanwar, rollno: 23
}

// --- 1. Standard Function Declaration & Return vs Console.log ---
function calculateDouble(amount) {
    var result = amount * 2;
    return result; // Passes the data back to where it was called
}

// If a function lacks a 'return' statement, it defaults to returning 'undefined'
let finalAmount = calculateDouble(5); 
console.log(`Calculated amount: ${finalAmount}`); // 10


// --- 2. Function Expression ---
// Storing a function inside a variable. Not hoisted!
const greet = function(name) {
    return `Hello, ${name}`;
};


// --- 3. Modern Arrow Functions (ES6) ---
// Shorter syntax. If there are no curly braces {}, it implicitly returns the value.
const multiply = (a, b) => a * b;
console.log(`Arrow function output: ${multiply(2, 3)}`); // 6


// --- 4. Default & Rest Parameters ---
// Default: Gives a fallback value if no argument is passed.
function welcome(name = "Guest") {
    return `Welcome, ${name}!`;
}

// Rest (...): Gathers an unlimited number of arguments into an array.
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(`Sum all: ${sumAll(5, 10, 15)}`); // 30


// --- 1. Global vs Function vs Block Scope ---
let globalVar = "I am everywhere";

function scopeTest() {
    var functionVar = "I am trapped in this function";
    
    if (true) {
        // let and const are BLOCK scoped (trapped inside the nearest {})
        let blockVar = "I am trapped in this IF block";
        console.log(blockVar); // Works!
    }
    
    // console.log(blockVar); // ERROR: blockVar is not defined here
    console.log(functionVar); // Works!
}

scopeTest();

// --- 2. Hoisting Example ---
// Function declarations are hoisted to the top, so you can call them before defining them.
sayHi(); 

function sayHi() {
    console.log("Hi! I was hoisted!");
}

// Variables with 'let' and 'const' are NOT hoisted in the same way (Temporal Dead Zone).
// console.log(myAge); // ERROR: Cannot access 'myAge' before initialization
let myAge = 25;


// --- 1. Array Fundamentals ---
let colors = ["Red", "Green", "Blue"];
console.log(`First color: ${colors[0]}`); // "Red" (Zero-based indexing)
console.log(`Total colors: ${colors.length}`); // 3


// --- 2. Array Methods (Mutating vs Non-Mutating) ---
let nums = [10, 20, 30];

// Adding/Removing from the END
nums.push(40); // Adds 40 -> [10, 20, 30, 40]
nums.pop();    // Removes 40 -> [10, 20, 30]

// Adding/Removing from the START
nums.unshift(5); // Adds 5 -> [5, 10, 20, 30]
nums.shift();    // Removes 5 -> [10, 20, 30]

// Extracting a portion (Non-Mutating)
// slice(startIndex, endIndexNotIncluded)
let subArray = nums.slice(1, 3); 
console.log(`Sliced array: ${subArray}`); // [20, 30]
console.log(`Original remains unchanged: ${nums}`); // [10, 20, 30]

// --- 1. Objects and Methods ---
const user = {
    name: "Aakash",
    age: 22,
    // Method (a function belonging to an object)
    greet() {
        console.log("Hello from Aakash!");
    }
};

console.log(user.name); // Accessing property
user.age = 23;          // Mutating property
user.greet();           // Calling the method


// --- 2. The 'this' Keyword Context ---
// 'this' refers to the object that is executing the current function.
const car = {
    brand: "Toyota",
    showDetails() {
        // 'this' points to the 'car' object
        console.log(`Vehicle brand: ${this.brand}`);
    },
    
    // WARNING FOR STUDENTS: Arrow functions DO NOT bind their own 'this'.
    // They inherit it from outside. This will print undefined!
    brokenDetails: () => {
        console.log(`Arrow function brand: ${this.brand}`);
    }
};

car.showDetails();   // Toyota
car.brokenDetails(); // undefined