// React vs Vanilla JavaScript 

/*Introduction
   - Vanilla JS: Plain JavaScript without any libraries.
   - React: JavaScript library for building interactive user interfaces.
   - Knowing the difference helps you choose the right tool for your project.
*/

/*Core Concept Differences
   - Vanilla JS: Directly manipulates the DOM.
   - React: Uses a Virtual DOM to update only the changed elements.
*/

// Example: Vanilla JS
document.getElementById('app')?.innerHTML = '<h1>Hello from Vanilla JS</h1>';

// Example: React (conceptual, for learning)
const App = () => '<h1>Hello from React</h1>';
// ReactDOM.render(App(), document.getElementById('root')); 

/*  Syntax & Learning
   - Vanilla JS: Simple, easy to start with.
   - React: Uses JSX (HTML inside JS), components, state, and props.
   - React has a steeper learning curve but is better for large projects.
*/

/* Step 4 – DOM Manipulation
   - Vanilla JS: Manual DOM updates can get messy as the app grows.
*/
const element = document.createElement('div');
element.textContent = 'Hello DOM in Vanilla JS';
document.body.appendChild(element);

/* React automatically updates only the parts of the DOM that changed
   - This is conceptual for learners in a JS tutorial.
*/

/* Components & Reusability
   - Vanilla JS: Functions and classes can be reused, but organizing large apps is harder.
   - React: Everything is a component. Components have their own logic and UI, making code reusable.
*/

// React component example (illustrative)
const Button = ({ label }) => `<button>${label}</button>`;

/* Performance & Scalability
   - Vanilla JS: Fast for small apps, slows down as UI complexity grows.
   - React: Optimized for large, interactive apps using Virtual DOM.
   - Works well with state management for scalable projects.
*/

/*  Summary
   - Use Vanilla JS for small, simple projects or learning basics.
   - Use React for dynamic, large-scale applications.
   - React improves maintainability, reusability, and scalability.
   - Knowing both gives you flexibility to choose the right tool.
*/
