// =====================================
// Functional Components in React
// =====================================

import React, { useState, useEffect } from "react";

export default function FunctionalComponentsTutorial() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Functional Components in React</h1>
      <p>Open this file to read comments with full details & examples.</p>
    </div>
  );
}

/* 
=====================================
Introduction to Functional Components
=====================================
- Functional components are JavaScript functions that return JSX.
- They describe what the UI should look like.
- Easier to read, test, and maintain.
- Modern React encourages functional components over class components.
*/

/*
=====================================
Syntax of a Functional Component
=====================================
Example:
*/
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

/*
=====================================
Props in Functional Components
=====================================
Props = arguments passed to components (read-only data).
Used to make components reusable.
*/
function User(props) {
  return <p>User: {props.username}</p>;
}

/*
=====================================
 State with Hooks (useState)
=====================================
Functional components use Hooks for state management.
*/
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

/*
=====================================
 useEffect Hook
=====================================
Handle side effects like fetching data, timers, or subscriptions.
*/
function ExampleEffect() {
  useEffect(() => {
    console.log("Component mounted!");

    return () => {
      console.log("Cleanup when component unmounts");
    };
  }, []);

  return <p>Check console for useEffect messages</p>;
}

/*
=====================================
 Advantages of Functional Components
=====================================
- Simpler & shorter syntax
- No "this" keyword
- Full Hooks support (state, lifecycle, context)
- Better performance optimizations
- Easier to test and debug
*/

/*
=====================================
 When to Use Functional Components
=====================================
- Stateless components (UI only)
- Components with Hooks for state/logic
- Reusable UI blocks (buttons, cards, lists)
- Default choice in modern React development
*/

/*
=====================================
 Summary
=====================================
- Functional components = functions returning JSX
- Props → inputs
- useState/useEffect → state & lifecycle
- Hooks make them as powerful as class components
- Recommended approach since React 16.8+
*/
