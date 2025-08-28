// useState Hook  in React
// ======================================

// Introduction
// --------------------------------------
// - useState is a React Hook that lets you add state to functional components.
// - It allows your component to "remember" data between re-renders.
// - Every time state updates, the component automatically re-renders.

import React, { useState } from "react";

// Example 1: Simple Counter
function Counter() {
  // 2. Declaring State
  // --------------------------------------
  // Syntax: const [stateVariable, setStateFunction] = useState(initialValue);
  const [count, setCount] = useState(0); // initial value = 0

  // 3. Updating State
  // --------------------------------------
  // Always use the setter function (setCount) to update state.
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // 4. Using State in JSX
  // --------------------------------------
  // State variables can be used inside JSX like regular variables.
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React useState Hook</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Example 2: Multiple States
function UserProfile() {
  // You can use multiple useState calls inside one component
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(25);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={() => setName("Jane Smith")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Increase Age</button>
    </div>
  );
}

// Example 3: State with Objects
function TodoApp() {
  // Storing multiple values in one state using an object
  const [todo, setTodo] = useState({ task: "Learn React", done: false });

  const toggleDone = () => setTodo({ ...todo, done: !todo.done });

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Todo App</h2>
      <p>
        Task: {todo.task} | Status: {todo.done ? "Done" : "Not Done"}
      </p>
      <button onClick={toggleDone}>Toggle Status</button>
    </div>
  );
}

// Exporting all examples to use in App.js
export { Counter, UserProfile, TodoApp };

// ======================================
// Key Notes on useState
// - State is preserved across re-renders.
// - Updates are asynchronous (React batches them for performance).
// - You can have multiple states or one object/array state.
// - Always update objects/arrays immutably (create a copy, then update).
