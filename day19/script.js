/**
 * ============================================================================
 * DAY 1: JAVASCRIPT FUNDAMENTALS & SYNTAX PRACTICE
 * ============================================================================
 * Topics covered:
 * 1.1 Variables (let, const, var) and Scope Rules
 * 1.2 Data Types (Primitives, Objects, Template Literals)
 * 1.3 Operators (Arithmetic, Assignment, Comparison, Logical)
 * 1.4 Control Flow (if/else, Ternary, Switch)
 * ============================================================================
 */


// ============================================================================
// 1.1 VARIABLES (The Memory Containers)
// ============================================================================
console.log("--- 1.1 Variables ---");

// var: Legacy declaration (Function-scoped, can be re-declared). Discouraged in modern JS.
var legacyScore = 50; 

// let: Modern declaration (Block-scoped, mutable). Use this for values that change.
let score = 10;
console.log("Initial let score:", score);
score = 20; // Valid re-assignment
console.log("Updated let score:", score);

// const: Modern declaration (Block-scoped, immutable). Use this for fixed values.
const PI = 3.14159;
console.log("Constant PI:", PI);
// PI = 3.15; // Un-commenting this will throw a TypeError!


// ============================================================================
// 1.2 DATA TYPES (The 7 Primitives + 1 Reference Type)
// ============================================================================
console.log("\n--- 1.2 Data Types ---");

let userName = "Gavi";      // String: Textual data
let age = 21;               // Number: Integer or floating-point
let isStudent = true;       // Boolean: true or false
let city;                   // Undefined: Declared but no value assigned yet
let emptyBox = null;        // Null: Intentional absence of value

console.log("String:", userName);
console.log("Number:", age);
console.log("Boolean:", isStudent);
console.log("Undefined:", city);
console.log("Null:", emptyBox);

// Template Literals (String Interpolation with backticks)
// Teach students to use backticks (`) and ${} instead of using the + operator.
console.log(`Hello, my name is ${userName} and I am ${age} years old.`);


// ============================================================================
// 1.3 OPERATORS (Manipulating Values)
// ============================================================================
console.log("\n--- 1.3 Operators ---");

// Arithmetic Operators
let mathResult = (10 + 5) * 2; // 30
console.log("Math Result:", mathResult);

// Comparison Operators: LOOSE (==) vs STRICT (===)
// WARNING FOR STUDENTS: Always use === to avoid weird JavaScript bugs!
console.log("Loose Equality (5 == '5'):", 5 == "5");   // true (JS converts type behind the scenes)
console.log("Strict Equality (5 === '5'):", 5 === "5"); // false (Checks value AND data type)

// Logical Operators (&& = AND, || = OR, ! = NOT)
let hasGoodGrades = true;
let hasGoodAttendance = false;

// Both must be true for AND (&&) to return true
console.log("Will pass the class? (AND):", hasGoodGrades && hasGoodAttendance); // false

// Only one needs to be true for OR (||) to return true
console.log("Will pass the class? (OR):", hasGoodGrades || hasGoodAttendance); // true


// ============================================================================
// 1.4 CONTROL FLOW (Making Decisions in Code)
// ============================================================================
console.log("\n--- 1.4 Control Flow ---");

let marks = 75;

// 1. if...else if...else Structure
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B"); // This will run
} else {
  console.log("Fail");
}

// 2. Ternary Operator (Concise conditional expression)
// Syntax: condition ? ifTrue : ifFalse
let examStatus = (marks >= 40) ? "Passed" : "Failed";
console.log("Exam Status (Ternary):", examStatus);

// 3. Switch Statement (Multi-branch condition evaluation)
// Great for checking a single variable against many possible exact values.
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of work week. Let's code!");
    break; // Break stops the code from falling through to the next case
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Regular day");
}