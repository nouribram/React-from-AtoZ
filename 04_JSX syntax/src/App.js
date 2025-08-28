<<<<<<< HEAD
// JSX Syntax in React
// ======================================

// 1. What is JSX?
// --------------------------------------
// - JSX stands for JavaScript XML.
// - It allows us to write HTML-like syntax inside JavaScript.
// - React uses JSX to describe what the UI should look like.
// - Behind the scenes, JSX is converted to React.createElement() calls.

// Example: Basic JSX
// This looks like HTML, but it’s actually JSX.
const element = <h1>Hello, Ibrahim</h1>;

// Without JSX, the same code looks like this:
// const element = React.createElement("h1", null, "Hello, React with JSX!");

// ======================================

// 2. Embedding JavaScript in JSX
// --------------------------------------
// - You can embed JS expressions inside JSX using curly braces { }.
// - Examples: variables, function calls, arithmetic, etc.

const user = "Ibrahim";
const greeting = <h2>Hello, {user} </h2>;

// JSX can evaluate expressions:
const number = 10;
const calculation = <p>10 + 5 = {number + 5}</p>;

// ======================================

// 3. JSX Must Have One Parent Element
// --------------------------------------
// Wrong (two sibling elements without a parent):
// return (
//   <h1>Title</h1>
//   <p>Description</p>
// );

//Correct: Wrap them in a parent element (like a <div> or React.Fragment).
const content = (
  <div>
    <h1>Title</h1>
    <p>Description</p>
  </div>
);

// React.Fragment lets you group elements without adding an extra DOM node:
const fragmentExample = (
  <>
    <h1>Header</h1>
    <p>Paragraph</p>
  </>
);

// ======================================

// 4. Attributes in JSX
// --------------------------------------
// - Use camelCase for attributes (className instead of class).
// - Values can be strings (quoted) or expressions (in { }).

const attributes = (
  <div className="container" tabIndex={0}>
    <img src="logo.png" alt="Logo" />
    <button disabled={false}>Click Me</button>
  </div>
);

// ======================================

// 5. JSX with Functions & Components
// --------------------------------------
// - JSX can represent components too.
// - Components must start with a capital letter.

function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage:
const app = (
  <div>
    <Welcome name="Ibrahim" />
    <Welcome name="Zaki" />
  </div>
);

// ======================================

// 6. Conditional Rendering in JSX
// --------------------------------------
// You can use conditional operators inside { }.

const isLoggedIn = true;

const conditional = (
  <div>
    {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in</p>}
  </div>
);

// Short-circuit && can also be used:
const notifications = 3;
const shortCircuit = (
  <div>
    {notifications > 0 && <p>You have {notifications} new messages</p>}
  </div>
);

// ======================================

// 7. Lists in JSX
// --------------------------------------
// Use .map() to render lists of elements.
// Each child should have a unique "key" prop.

const fruits = ["Apple", "Banana", "Cherry"];

const fruitList = (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);

// ======================================

// Export examples (optional)
export {
  element,
  greeting,
  calculation,
  content,
  fragmentExample,
  attributes,
  app,
  conditional,
  shortCircuit,
  fruitList,
};

// ======================================
// Key Notes on JSX
// - JSX looks like HTML but is JavaScript.
// - Use { } to embed expressions.
// - Always wrap multiple elements with a parent (div or fragment).
// - Attributes use camelCase (className, tabIndex).
// - Components must start with a capital letter.
// - JSX makes React code more readable and expressive.
=======
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
>>>>>>> 01b0dd38d47c87dcffd76c5760479acbecf3351d
