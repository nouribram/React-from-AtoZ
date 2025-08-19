// ==========================
// JSX Syntax  (React)
// ==========================

// What is JSX?
// JSX = JavaScript XML
// Extension of JavaScript used in React
// Looks like HTML but is written inside JavaScript
// Compiled into React.createElement() calls
// Makes UI code more readable and declarative

const intro = <h1>Hello JSX!</h1>;


// Expressions in JSX
// Use {} to embed JavaScript expressions inside JSX
// Supports variables, function calls, math, conditions
// Expressions only, not statements

const name = "Ibrahim";
const greeting = <h2>Hello, {name}!</h2>;


// Using Attributes in JSX
// Similar to HTML attributes but in camelCase
// Use className instead of class
// Use htmlFor instead of for

const logo = <img src="logo.png" alt="Logo" />;
const button = <button onClick={() => alert("Clicked!")}>Click Me</button>;


// Nesting & Wrapping in JSX
// JSX allows nesting like HTML
// Must return a single parent element
// Can use React.Fragment <> </> shorthand

const nested = (
  <div>
    <h1>Welcome</h1>
    <p>JSX makes UI easy!</p>
  </div>
);


// Functions & Conditions in JSX
// JSX can call functions
// Useful for conditional rendering
// Supports ternary operators & logical &&

function getGreeting(user) {
  return user ? <h1>Hello, {user}</h1> : <h1>Hello, Guest</h1>;
}

const conditional = getGreeting("Nour");


// Styling with JSX
// Inline styles use objects (camelCase properties)
// Can also use CSS files or CSS-in-JS libraries

const styleObj = { color: "blue", fontSize: "20px" };
const styledText = <p style={styleObj}>Styled Text</p>;


//  Comments in JSX
// Use {/* comment */} inside JSX

const withComment = (
  <div>
    {/* This is a JSX comment */}
    <h1>Hello JSX</h1>
  </div>
);


//  Why Use JSX?
// Readable, HTML-like syntax for JavaScript
// Simplifies UI creation with React
// Combines logic + markup in one place
// Industry standard in React projects

const conclusion = <h2>JSX makes React powerful and simple!</h2>;
