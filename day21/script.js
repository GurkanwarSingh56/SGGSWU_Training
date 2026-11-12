/**
 * ============================================================================
 * DAY 3: BOM & DOM MANIPULATION BASICS
 * ============================================================================
 */

// ==========================================
// 1. BOM (Browser Object Model) Basics
// ==========================================

// window.alert("welcome to our js section");

// let a = window.confirm("are you enjoying the session?");
// console.log(a); // Returns true (OK) or false (Cancel)

// let name = window.prompt("Enter your name:");
// console.log("Welcome " + name);


// ==========================================
// 2. DOM ELEMENT SELECTION
// ==========================================

// --- Select by ID ---
const h1 = document.getElementById("heading-content");
console.log(h1);
/* 
  INSTRUCTOR NOTE - Output options students usually guess:
  1. heading-content 
  2. document.getElementById("heading-content");
  3. We are going to learn DOM manipulation (Correct visual element)
  
  CRITICAL: You must check this in the browser console! 
  If you compile this on Node.js, it will return an error because 
  Node doesn't have a 'document' object (no browser window).
*/

// --- Select by Class Name ---
const h3 = document.getElementsByClassName("heading-3");
console.log(h3[0].textContent); // Accessing the first element in the HTMLCollection


// --- Select by Tag Name ---
const h4 = document.getElementsByTagName("h4");
console.log(h4[0].textContent);


// ==========================================
// 3. QUERY SELECTORS
// ==========================================

// --- querySelector (Selects the first match) ---
const classname = document.querySelector(".heading-3");
console.log(classname.textContent);
/*
  INSTRUCTOR NOTE: 
  If students ask why there is no expected output if we write ("heading-3") instead of (".heading-3"):
  Answer: We MUST add the dot (.) for classes and hash (#) for IDs when using querySelector, 
  just like in CSS!
*/

// --- querySelectorAll (Selects all matches) ---
const allclass = document.querySelectorAll(".heading-3");
// querySelectorAll returns a NodeList, so we can use a forEach loop on it
allclass.forEach(element => {
    console.log(element.textContent);
});


// ==========================================
// 4. MODIFYING ELEMENTS & COMMON TRAPS
// ==========================================

/* 
  QUESTION FOR STUDENTS: 
  How do we select <h4>Now we are learning js</h4> ?
*/

// TRAP 1: Trying to change an HTMLCollection directly
// let h4Elements = document.getElementsByTagName("h4");
// h4Elements.textContent = "we have learnt javascript"; 
/* 
  Will it change? 
  Answer: There will be NO change! getElementsByTagName returns a collection (like an array). 
  You cannot set textContent on an array, only on individual elements.
*/

// CORRECT WAY: Specify the index [0]
// let h4Elements = document.getElementsByTagName("h4");
// h4Elements[0].textContent = "we have learnt javascript";


// --- innerHTML vs textContent ---
const pTag = document.querySelector("p");
// innerHTML parses HTML tags, whereas textContent would just print the literal string "<strong>"
pTag.innerHTML = "<strong>1. html </strong>";