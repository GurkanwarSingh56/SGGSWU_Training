# Full-Stack Web Development

## Knowledge Transfer (KT) Session Report

**Institution:** Shri Guru Granth Sahib World University  
**Course:** Full-Stack Web Development  
**Batch:** First Year  
**Coverage:** Web development fundamentals, version control, HTML, and CSS

## 1. Executive Summary and Objectives

This report details the Knowledge Transfer (KT) sessions conducted to introduce
basic web development concepts, version control, and core HTML and CSS
elements. The primary objective was to build foundational web architecture
skills and ensure hands-on proficiency through practical assignments.

## 2. Session Schedule and Topic Breakdown

### Session 1 — 28 September: Introduction to Web Development

- Overview of web technologies and the client-server environment.
- Environment setup.
- Orientation and learning objectives.

### Session 2 — 29 September: Core HTML Tags and Version Control

- Basic HTML structure.
- Headings (`<h1>`–`<h6>`), paragraphs (`<p>`), anchors (`<a>`), and images
  (`<img>`).
- Introduction to Git version control and GitHub onboarding.

### Session 3 — 30 September: Lists and Practical Applications

- Constructing ordered (`<ol>`) and unordered (`<ul>`) lists.
- Classwork: Food Ranking System.
- Homework assignment: Movie Ranking System.

### Session 4 — 5 October: Formatting and Embedded Content

- Inline formatting with bold (`<b>`/`<strong>`), italics (`<i>`/`<em>`),
  and the generic container (`<span>`).
- Embedding external media using inline frames (`<iframe>`).

### Session 5 — 6 October: Web Forms

- Designing user inputs, forms, and data collection structures (`<form>`).

### Session 6 — 7 October: Data Tables

- Creating tabular data layouts using `<table>`, `<tr>`, `<th>`, and `<td>`.

### Session 7 — 8 October: Semantic Elements and Wrap-Up

- Semantic markup for accessible and SEO-friendly document layouts.
- Review of remaining HTML tags.
- Wrap-up discussion.

### Session 8 — 9 October: Introduction to Assignment 1

- Introduction to Assignment 1.
- Students began replicating the Grazitti Learning Portal website.

### Session 9 — 21 October: Revised Topics and Completed Assignment 1

- Review of revised web development topics.
- Completion of Assignment 1.

### Session 10 — 22 October: Introduction to CSS

#### Chapter 1: Creating Our First CSS Website

- Document Object Model (DOM).
- HTML `id` and `class` attributes.
- Three ways to add CSS.
- CSS selectors.
- Comments in CSS.

#### Chapter 2: Colors and Backgrounds

- The `color` property.
- Supported color value formats.
- Named colors.
- Background properties in detail.

#### Chapter 3: CSS Box Model

- Box model layers.
- Box model analogy and examples.

### Session 11 — 23 October: CSS Review and Implementation

- Review of CSS topics.
- Practical CSS implementation.

### Session 12 — 27 October: Viva and Assignment Inspection

- Viva session.
- Assignment inspection and review.

### Session 13 -28 October : Display and Positioning in CSS

- Chapter 4: Font and display.
- Chapter 5: Size position and lists. 

### Session 14 -29 October : Display and Positioning in CSS

- Chapter 5: Practical demonstration of positioning 

### Session 15 -30 October : Flexbox

- Chapter 6: FlexBox Foundation 

### Session 16 -2 November : FlexBox and Grid 
 
- Chapter 6: Practical demonstration of Flexbox
- Chapter 6: Introduction to Grid 

### Session 17 -3 November : Grid 
 
- Chapter 6: Practical demonstration of Grid 

### Session 18 -4 November :Media querry,Transforms, Transitions, Animations And Revision of all topics 

- Chapter 6: Media Querry 
- Chapter 7: Transforms, Transitions and Animations
- Final Revision of complete CSS With Assignment Test 

### Session 19 - 11 November : Introduction to JavaScript & Control Flow
- **Chapter 1 Fundamentals & Scoping:** 
  - Explored variable declarations (`var`, `let`, `const`) and understood the difference between global, function, and block scope.
  - Studied variable hoisting and best practices for modern ES6+ syntax.
- **Data Types & Type Operators:** 
  - Explored primitive data types (*Number, String, Boolean, Undefined, Null*) and non-primitive types (*Objects*).
  - Practiced arithmetic, assignment, logical operators, and strict equality comparison (`===` vs `==`).
- **Control Flow & Decision Making:** 
  - Implemented conditional logic using `if-else` chains and `switch` statements.
  - Mastered concise conditional evaluation using the **Ternary Operator** (`condition ? true : false`).
- **Practical Execution:** Wrote and tested foundational script files running in both browser consoles and Node.js environments.

### Session 20 - 12 November : JavaScript Functions, Objects & DOM Basics
- **Chapter 2 Advanced Syntax & Data Structures:** 
  - Declared and invoked reusable JavaScript functions, handling parameters, return values, and function scope.
  - Worked with **Arrays** (storing lists of items) and complex **Objects** (managing key-value data structures like student records).
  - Explored iteration loops (`for`, `while`, `for...of`, `for...in`) to traverse data collections.
- **Introduction to the DOM (Document Object Model):** 
  - Understood how browsers parse HTML into a tree of live JavaScript objects upon loading.
- **Element Selection & Manipulation:** 
  - Practiced selecting specific DOM elements using modern methods (`querySelector`, `getElementById`).
  - Dynamically altered element text content, attributes, and inline CSS styles through scripts.

  ### Session 21 - 7 November : BOM & DOM Manipulation Basics
- **Browser Object Model (BOM) Fundamentals:** 
  - Explored how JavaScript interacts with the browser window itself.
  - Practiced using built-in window methods for user interaction: `window.alert()`, `window.confirm()`, and `window.prompt()`.
- **Selecting DOM Elements:** 
  - Mastered traditional DOM selection methods: `getElementById`, `getElementsByClassName`, and `getElementsByTagName`.
  - Transitioned to modern, versatile selectors: `querySelector` (single element) and `querySelectorAll` (multiple elements), understanding the required CSS-style syntax (using `.` for classes and `#` for IDs).
- **Understanding HTMLCollections vs. NodeLists:** 
  - Discussed why `getElementsByClassName` and `getElementsByTagName` return array-like collections.
  - **Common Trap Avoided:** Learned that you cannot change the text of an entire HTMLCollection directly (e.g., `h4.textContent = "..."` will fail). You must specify the exact index, such as `h4[0].textContent = "..."`.
  - Iterated through NodeLists safely using `.forEach()`.
- **Modifying the DOM & Environment Context:** 
  - Differentiated between `.textContent` (for raw text) and `.innerHTML` (for parsing HTML tags like `<strong>`).
  - **Environment Rule:** Highlighted that DOM manipulation code must be run in the browser console or linked HTML files, as the `document` object does not exist in the Node.js backend environment.