// React Tutorial: useState Hook

import React, { useState } from "react";

export default function UseStateTutorial() {

  //Basic Syntax
  const [count, setCount] = useState(0);

  //Multiple useState Example
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      
      {/* Introduction */}
      <h1>React useState Hook Tutorial</h1>
      <p>useState allows functional components to have state and automatically re-render when state changes.</p>


      {/* Updating State */}
      <h2>Count Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>

      {/*State Rules */}
      <h2>State Rules</h2>
      <ul>
        <li>Call hooks at the top level (not in loops or conditions)</li>
        <li>Use only inside functional components or custom hooks</li>
        <li>State updates are asynchronous; use functional updates if needed</li>
      </ul>

      {/*Functional Updates */}
      <h2>Functional Update Example</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Increase Safely</button>

      {/*Multiple useState Example */}
      <h2>Multiple State Example</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={e => setAge(Number(e.target.value))}
      />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
      <p>
        Name: {name} | Age: {age} | Logged In: {isLoggedIn ? "Yes" : "No"}
      </p>

      {/* Key Takeaways */}
      <h2>Key Takeaways</h2>
      <ul>
        <li>useState adds state to functional components</li>
        <li>Always use setState to update values</li>
        <li>Use functional updates if relying on previous state</li>
        <li>Multiple states can exist in one component</li>
        <li>State changes trigger re-renders automatically</li>
      </ul>

      {/* Full Counter Example */}
      <h2>Full Counter Example</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
