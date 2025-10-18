/**
Handling User Input (onClick, onChange, onSubmit)
------------------------------------------------------------
In React, user interactions are handled through event handlers.
Events like clicks, typing, or submitting forms are attached to elements
using camelCase event names such as onClick, onChange, onSubmit, etc.
*/

import React, { useState } from "react";

/**
1) Handling Button Clicks (onClick)
The onClick event triggers a function when a user clicks a button or element.
*/
function ClickExample() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      <h2>onClick Example</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

/**
2) Handling Text Input (onChange)
The onChange event is used to track changes in input fields.
It runs every time the user types something in the input box.
*/
function InputExample() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>onChange Example</h2>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Type your name"
      />
      <p>Hello, {name}</p>
    </div>
  );
}

/**
3) Handling Form Submissions (onSubmit)
onSubmit triggers when a form is submitted.
It’s often used together with onChange to capture user input.
*/
function FormExample() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    alert(`Form submitted with email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>onSubmit Example</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

/**
4) Handling Multiple Inputs
You can manage multiple inputs in one object using one handler.
*/
function MultiInputExample() {
  const [formData, setFormData] = useState({
    name: "",
    age: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Multiple Inputs Example</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter name"
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Enter age"
      />
      <p>
        Name: {formData.name}, Age: {formData.age}
      </p>
    </div>
  );
}

/**
- onClick → Handles button clicks or clickable elements.
- onChange → Tracks typing and changes in input elements.
- onSubmit → Handles full form submissions.
- Always prevent default form behavior with event.preventDefault().
- Manage state with useState to reflect user input in real-time.
*/
function App() {
  return (
    <div>
      <h1>React Handling User Input</h1>
      <ClickExample />
      <InputExample />
      <FormExample />
      <MultiInputExample />
    </div>
  );
}

export default App;
