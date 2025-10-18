/**
 Controlled vs Uncontrolled Components
---------------------------------------------------
React offers two ways to manage form inputs: Controlled and Uncontrolled components.
Understanding the difference helps you decide how to handle user input efficiently.
*/

import React, { useState, useRef } from "react";

/**
1) Controlled Components
A controlled component is one where form data is handled by React state.
The input value is controlled via useState and updated using onChange.
*/
function ControlledInput() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Controlled input submitted: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Component</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

/**
2) Uncontrolled Components
An uncontrolled component stores its own data internally in the DOM.
You access the value using a ref instead of React state.
*/
function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Uncontrolled input submitted: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled Component</h2>
      <input type="text" ref={inputRef} placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
}

/**
3) Key Differences
- Controlled components use React state (via useState) to track input values.
- Uncontrolled components use refs to directly read values from the DOM.
- Controlled components provide real-time validation and updates.
- Uncontrolled components are simpler for quick or legacy forms.
*/

/**
4) Best Practices
Use Controlled Components when:
- You need validation, conditional rendering, or real-time updates.

Use Uncontrolled Components when:
- You need simple, non-reactive inputs or integrate with non-React code.
*/

function App() {
  return (
    <div>
      <h1>Controlled vs Uncontrolled Components</h1>
      <ControlledInput />
      <UncontrolledInput />
    </div>
  );
}

export default App;