// React Props and Component Communication
// -----------------------------------------------
// Introduction to Props
// Props (short for properties) are inputs to React components.
// They allow data to flow from a parent component to a child component.
// Props are read-only — a child cannot modify them.
// Essential for component reusability and dynamic UIs.

import React from "react";

// Passing Props
// Props are passed as attributes when using a component.
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage example (Parent component)
function App() {
  const handleChildMessage = (msg) => {
    alert("Message from child: " + msg);
  };

  return (
    <div>
      <h2>Passing Props</h2>
      <Welcome name="Ibrahim" />

      {/* Accessing Props */}
      <h2>Accessing Props</h2>
      <UserCard username="ibrahim1" email="nour@example.com" />

      {/* Default Props */}
      <h2>Default Props</h2>
      <Button /> {/* Will use default text */}
      <Button text="Submit" />

      {/*Child → Parent Communication */}
      <h2>Component Communication</h2>
      <Child notifyParent={handleChildMessage} />
    </div>
  );
}

// Accessing Props
function UserCard(props) {
  return (
    <div>
      <h3>Username: {props.username}</h3>
      <p>Email: {props.email}</p>
    </div>
  );
}

// Default Props
function Button({ text = "Click Me" }) {
  return <button>{text}</button>;
}

// Component Communication (Child → Parent)
function Child({ notifyParent }) {
  return (
    <button onClick={() => notifyParent("Hello Parent")}>
      Click to notify parent
    </button>
  );
}

// Prop Types (optional)
// To use, install prop-types: npm install prop-types
import PropTypes from "prop-types";

Button.propTypes = {
  text: PropTypes.string,
};

//  Summary
// Key Takeaways:
// 1. Props enable dynamic, reusable components.
// 2. Data flows downwards (Parent → Child).
// 3. Child components can communicate back using callbacks.
// 4. Always consider default values and prop validation.
// 5. Mastering props is essential for building complex React apps.

export default App;
